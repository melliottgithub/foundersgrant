#!/usr/bin/env python3
"""
IndexNow Push Indexing Protocol for FoundersGrant.org
Follows SOP-FR-02 (Frontier SOTA Research)
Notifies Microsoft Bing, Copilot, Perplexity, Yandex, Seznam, and Naver simultaneously.
"""

import urllib.request
import json
import re

INDEXNOW_KEY = "3a4f89d02c7b41e89ef51a704e6c3821"
HOST = "foundersgrant.org"
BASE_URL = f"https://{HOST}"
KEY_LOCATION = f"https://{HOST}/{INDEXNOW_KEY}.txt"

def collect_urls():
    urls = [
        f"{BASE_URL}/",
        f"{BASE_URL}/grants",
        f"{BASE_URL}/apply",
        f"{BASE_URL}/impact",
        f"{BASE_URL}/legal/terms"
    ]

    with open("src/data/geo.ts", "r") as f:
        content = f.read()

    # Extract state slugs
    state_matches = re.findall(r"slug:\s*'([a-z0-9-]+)'", content[:content.find("CITIES_MATRIX")])
    for s in set(state_matches):
        urls.append(f"{BASE_URL}/grants/{s}")

    # Extract city pairs
    city_matches = re.findall(r"stateSlug:\s*'([a-z0-9-]+)',\s*slug:\s*'([a-z0-9-]+)'", content)
    for state_slug, city_slug in city_matches:
        urls.append(f"{BASE_URL}/grants/{state_slug}/{city_slug}")

    return sorted(list(set(urls)))

def push_to_indexnow(urls):
    payload = {
        "host": HOST,
        "key": INDEXNOW_KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls
    }

    data = json.dumps(payload).encode("utf-8")
    endpoints = [
        "https://api.indexnow.org/indexnow",
        "https://www.bing.com/indexnow"
    ]

    for endpoint in endpoints:
        req = urllib.request.Request(
            endpoint,
            data=data,
            headers={
                "Content-Type": "application/json; charset=utf-8",
                "User-Agent": "FoundersGrant-IndexNow-Bot/1.0"
            }
        )
        try:
            with urllib.request.urlopen(req, timeout=10) as response:
                print(f"✅ Successfully notified {endpoint} with {len(urls)} URLs. Response Code: {response.getcode()}")
        except urllib.error.HTTPError as e:
            print(f"⚠️ HTTP response from {endpoint}: {e.code} - {e.reason}")
        except Exception as e:
            print(f"ℹ️ {endpoint}: {e}")

if __name__ == "__main__":
    urls = collect_urls()
    print(f"🚀 Prepared {len(urls)} URLs for IndexNow Push Indexing Protocol:")
    for u in urls[:5]:
        print(f"   • {u}")
    print(f"   ... and {len(urls) - 5} more.")
    push_to_indexnow(urls)
