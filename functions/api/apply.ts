// Cloudflare Pages Function for POST /api/apply
// Proxies grant applications to the AWS Lambda intake handler

const LAMBDA_URL = 'https://24exfbcyds46du3drw5ydtpsli0rguts.lambda-url.us-east-1.on.aws/';

interface PagesContext {
  request: Request;
}

export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};

export const onRequestPost = async (context: PagesContext) => {
  try {
    const rawBody = await context.request.text();

    const forwardRes = await fetch(LAMBDA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'CloudflarePages-FoundersGrant/1.0',
        'X-Forwarded-For': context.request.headers.get('cf-connecting-ip') || 'unknown',
      },
      body: rawBody,
    });

    const responseData = await forwardRes.text();

    return new Response(responseData, {
      status: forwardRes.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown proxy error';
    return new Response(
      JSON.stringify({ error: 'Failed to process application', details: errorMsg }),
      {
        status: 502,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
};
