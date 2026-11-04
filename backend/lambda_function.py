import json
import os
import uuid
from datetime import datetime, timezone
import boto3

dynamodb = boto3.resource("dynamodb", region_name="us-east-1")
ses = boto3.client("ses", region_name="us-east-1")

TABLE_NAME = os.environ.get("TABLE_NAME", "devmellio-leads")
RECIPIENT_EMAIL = os.environ.get("RECIPIENT_EMAIL", "michael.elliott@devmellio.com")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "Founders Grant Applications <noreply@devmellio.com>")

CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
}


def handler(event, context):
    method = (
        event.get("requestContext", {}).get("http", {}).get("method")
        or event.get("httpMethod", "POST")
    )

    if method == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": CORS_HEADERS,
            "body": json.dumps({"status": "ok"}),
        }

    try:
        raw_body = event.get("body", "{}")
        if event.get("isBase64Encoded", False):
            import base64

            raw_body = base64.b64decode(raw_body).decode("utf-8")

        data = json.loads(raw_body) if isinstance(raw_body, str) else raw_body
    except Exception as e:
        return {
            "statusCode": 400,
            "headers": CORS_HEADERS,
            "body": json.dumps({"error": "Invalid JSON payload", "details": str(e)}),
        }

    full_name = (data.get("fullName") or "").strip()
    business_name = (data.get("businessName") or "").strip()
    email = (data.get("email") or "").strip()
    phone = (data.get("phone") or "").strip()
    city = (data.get("city") or "").strip()
    state = (data.get("state") or "").strip()
    website = (data.get("website") or "None provided").strip()
    desired_package = (data.get("desiredPackage") or "Not specified").strip()
    founder_story = (data.get("founderStory") or "").strip()
    bottleneck = (data.get("bottleneck") or "").strip()

    if not full_name or not email or not phone:
        return {
            "statusCode": 400,
            "headers": CORS_HEADERS,
            "body": json.dumps({"error": "Full name, email, and phone are required"}),
        }

    app_id = str(uuid.uuid4())
    now_utc = datetime.now(timezone.utc)
    now_iso = now_utc.isoformat()

    client_ip = (
        event.get("requestContext", {}).get("http", {}).get("sourceIp")
        or event.get("headers", {}).get("x-forwarded-for", "unknown")
    )
    user_agent = event.get("headers", {}).get("user-agent", "unknown")

    record = {
        "PK": "FOUNDERSGRANT_APPLICATION",
        "SK": f"{now_iso}#{app_id}",
        "id": app_id,
        "fullName": full_name,
        "businessName": business_name,
        "email": email,
        "phone": phone,
        "city": city,
        "state": state,
        "website": website,
        "desiredPackage": desired_package,
        "founderStory": founder_story,
        "bottleneck": bottleneck,
        "ip": client_ip,
        "userAgent": user_agent,
        "createdAt": now_iso,
        "status": "SUBMITTED",
        "source": "foundersgrant.org",
    }

    # 1. Save to DynamoDB
    try:
        table = dynamodb.Table(TABLE_NAME)
        table.put_item(Item=record)
    except Exception as db_err:
        print(f"DynamoDB save warning: {db_err}")

    # 2. Dispatch SES Email Notification to Michael
    subject = f"🚀 [Founders Grant] {business_name} ({full_name}) - {desired_package}"
    body_text = f"""NEW FOUNDERS GRANT APPLICATION
==================================================
Applicant:       {full_name}
Business:        {business_name}
Email:           {email}
Phone:           {phone}
Location:        {city}, {state}
Website:         {website}
Selected Grant:  {desired_package}
Application ID:  {app_id}
Submitted:       {now_iso} (UTC)
Client IP:       {client_ip}

FOUNDER STORY & MISSION:
--------------------------------------------------
{founder_story}

BIGGEST TECH BOTTLENECK:
--------------------------------------------------
{bottleneck}
==================================================
Direct Reply: {email}
Call Applicant: {phone}
"""

    body_html = f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Founders Grant Application</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f7; color: #1d1d1f; padding: 24px; margin: 0;">
  <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #d2d2d7; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
    <div style="background: #0071e3; color: #ffffff; padding: 24px 28px;">
      <span style="background: rgba(255,255,255,0.2); font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.5px;">New Inbound Grant Application</span>
      <h1 style="color: #ffffff; margin: 12px 0 4px 0; font-size: 22px; font-weight: 700;">{business_name}</h1>
      <p style="color: rgba(255,255,255,0.9); font-size: 14px; margin: 0;">Applied for: <strong>{desired_package}</strong></p>
    </div>

    <div style="padding: 24px 28px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
        <tr style="border-bottom: 1px solid #f0f0f2;">
          <td style="padding: 10px 0; color: #86868b; width: 140px; font-weight: 600;">Founder Name:</td>
          <td style="padding: 10px 0; color: #1d1d1f; font-weight: 700; font-size: 15px;">{full_name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f0f0f2;">
          <td style="padding: 10px 0; color: #86868b; font-weight: 600;">Email:</td>
          <td style="padding: 10px 0;"><a href="mailto:{email}" style="color: #0071e3; font-weight: 600; text-decoration: none;">{email}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #f0f0f2;">
          <td style="padding: 10px 0; color: #86868b; font-weight: 600;">Phone:</td>
          <td style="padding: 10px 0;"><a href="tel:{phone}" style="color: #0071e3; font-weight: 700; font-size: 15px; text-decoration: none;">{phone}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #f0f0f2;">
          <td style="padding: 10px 0; color: #86868b; font-weight: 600;">Metro Location:</td>
          <td style="padding: 10px 0; color: #1d1d1f; font-weight: 600;">{city}, {state}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f0f0f2;">
          <td style="padding: 10px 0; color: #86868b; font-weight: 600;">Website / Social:</td>
          <td style="padding: 10px 0; color: #1d1d1f;">{website}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f0f0f2;">
          <td style="padding: 10px 0; color: #86868b; font-weight: 600;">Grant Package:</td>
          <td style="padding: 10px 0; color: #34c759; font-weight: 700;">{desired_package}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #86868b; font-weight: 600;">Application ID:</td>
          <td style="padding: 10px 0; color: #86868b; font-size: 12px; font-family: monospace;">{app_id}</td>
        </tr>
      </table>

      <div style="background: #fbfbfd; border: 1px solid #e5e5ea; border-radius: 12px; padding: 16px; margin-bottom: 20px;">
        <h3 style="color: #1d1d1f; font-size: 14px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Founder Story &amp; Mission</h3>
        <p style="color: #424245; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">{founder_story}</p>
      </div>

      <div style="background: #fff8f0; border: 1px solid #ffd8a8; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
        <h3 style="color: #c92a2a; font-size: 14px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Primary Tech Bottleneck</h3>
        <p style="color: #495057; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">{bottleneck}</p>
      </div>

      <div style="text-align: center; margin-top: 24px; display: flex; gap: 12px; justify-content: center;">
        <a href="mailto:{email}?subject=Founders%20Grant%20Application%20-%20Next%20Steps%20for%20{business_name}" style="background: #0071e3; color: #ffffff; padding: 12px 24px; border-radius: 980px; text-decoration: none; font-weight: 600; font-size: 14px; display: inline-block;">Reply via Email</a>
        <a href="tel:{phone}" style="background: #34c759; color: #ffffff; padding: 12px 24px; border-radius: 980px; text-decoration: none; font-weight: 600; font-size: 14px; display: inline-block;">Call Applicant</a>
      </div>
    </div>

    <div style="background: #f5f5f7; border-top: 1px solid #e5e5ea; padding: 16px 28px; text-align: center; font-size: 12px; color: #86868b;">
      FoundersGrant.org · Direct Pro Bono Intake · DevMellio LLC (Denver, CO)
    </div>
  </div>
</body>
</html>
"""

    try:
        ses.send_email(
            Source=SENDER_EMAIL,
            Destination={"ToAddresses": [RECIPIENT_EMAIL]},
            Message={
                "Subject": {"Data": subject, "Charset": "UTF-8"},
                "Body": {
                    "Text": {"Data": body_text, "Charset": "UTF-8"},
                    "Html": {"Data": body_html, "Charset": "UTF-8"},
                },
            },
        )
    except Exception as ses_err:
        print(f"SES send error: {ses_err}")

    return {
        "statusCode": 200,
        "headers": CORS_HEADERS,
        "body": json.dumps({
            "success": True,
            "applicationId": app_id,
            "message": "Application received and queued for Friday review.",
        }),
    }
