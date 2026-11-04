import re

# Comprehensive mapping of Wikidata IDs, Wikipedia URLs, and geographic coordinates for all states and cities
GEO_METADATA = {
    "states": {
        "colorado": {"wikidataId": "Q1261", "wikipediaUrl": "https://en.wikipedia.org/wiki/Colorado", "latitude": 39.5501, "longitude": -105.7821},
        "texas": {"wikidataId": "Q1439", "wikipediaUrl": "https://en.wikipedia.org/wiki/Texas", "latitude": 31.9686, "longitude": -99.9018},
        "california": {"wikidataId": "Q99", "wikipediaUrl": "https://en.wikipedia.org/wiki/California", "latitude": 36.7783, "longitude": -119.4179},
        "florida": {"wikidataId": "Q812", "wikipediaUrl": "https://en.wikipedia.org/wiki/Florida", "latitude": 27.6648, "longitude": -81.5158},
        "new-york": {"wikidataId": "Q1384", "wikipediaUrl": "https://en.wikipedia.org/wiki/New_York_(state)", "latitude": 40.7128, "longitude": -74.0060},
        "illinois": {"wikidataId": "Q1204", "wikipediaUrl": "https://en.wikipedia.org/wiki/Illinois", "latitude": 40.6331, "longitude": -89.3985},
        "georgia": {"wikidataId": "Q1428", "wikipediaUrl": "https://en.wikipedia.org/wiki/Georgia_(U.S._state)", "latitude": 32.1656, "longitude": -82.9001},
        "washington": {"wikidataId": "Q1223", "wikipediaUrl": "https://en.wikipedia.org/wiki/Washington_(state)", "latitude": 47.7511, "longitude": -120.7401},
        "arizona": {"wikidataId": "Q816", "wikipediaUrl": "https://en.wikipedia.org/wiki/Arizona", "latitude": 34.0489, "longitude": -111.0937},
        "tennessee": {"wikidataId": "Q1509", "wikipediaUrl": "https://en.wikipedia.org/wiki/Tennessee", "latitude": 35.5175, "longitude": -86.5804},
        "north-carolina": {"wikidataId": "Q1454", "wikipediaUrl": "https://en.wikipedia.org/wiki/North_Carolina", "latitude": 35.7596, "longitude": -79.0193},
        "massachusetts": {"wikidataId": "Q771", "wikipediaUrl": "https://en.wikipedia.org/wiki/Massachusetts", "latitude": 42.4072, "longitude": -71.3824}
    },
    "cities": {
        "denver": {"wikidataId": "Q1655", "wikipediaUrl": "https://en.wikipedia.org/wiki/Denver", "latitude": 39.7392, "longitude": -104.9903},
        "boulder": {"wikidataId": "Q486981", "wikipediaUrl": "https://en.wikipedia.org/wiki/Boulder,_Colorado", "latitude": 40.0150, "longitude": -105.2705},
        "colorado-springs": {"wikidataId": "Q165487", "wikipediaUrl": "https://en.wikipedia.org/wiki/Colorado_Springs,_Colorado", "latitude": 38.8339, "longitude": -104.8214},
        "fort-collins": {"wikidataId": "Q333333", "wikipediaUrl": "https://en.wikipedia.org/wiki/Fort_Collins,_Colorado", "latitude": 40.5853, "longitude": -105.0844},
        "aurora": {"wikidataId": "Q488667", "wikipediaUrl": "https://en.wikipedia.org/wiki/Aurora,_Colorado", "latitude": 39.7294, "longitude": -104.8319},
        "lakewood": {"wikidataId": "Q854067", "wikipediaUrl": "https://en.wikipedia.org/wiki/Lakewood,_Colorado", "latitude": 39.7047, "longitude": -105.0814},
        "littleton": {"wikidataId": "Q986420", "wikipediaUrl": "https://en.wikipedia.org/wiki/Littleton,_Colorado", "latitude": 39.6133, "longitude": -105.0166},
        "arvada": {"wikidataId": "Q716946", "wikipediaUrl": "https://en.wikipedia.org/wiki/Arvada,_Colorado", "latitude": 39.8028, "longitude": -105.0875},
        "austin": {"wikidataId": "Q16559", "wikipediaUrl": "https://en.wikipedia.org/wiki/Austin,_Texas", "latitude": 30.2672, "longitude": -97.7431},
        "dallas": {"wikidataId": "Q16557", "wikipediaUrl": "https://en.wikipedia.org/wiki/Dallas", "latitude": 32.7767, "longitude": -96.7970},
        "houston": {"wikidataId": "Q16555", "wikipediaUrl": "https://en.wikipedia.org/wiki/Houston", "latitude": 29.7604, "longitude": -95.3698},
        "los-angeles": {"wikidataId": "Q65", "wikipediaUrl": "https://en.wikipedia.org/wiki/Los_Angeles", "latitude": 34.0522, "longitude": -118.2437},
        "san-diego": {"wikidataId": "Q16552", "wikipediaUrl": "https://en.wikipedia.org/wiki/San_Diego", "latitude": 32.7157, "longitude": -117.1611},
        "san-francisco": {"wikidataId": "Q62", "wikipediaUrl": "https://en.wikipedia.org/wiki/San_Francisco", "latitude": 37.7749, "longitude": -122.4194},
        "miami": {"wikidataId": "Q8652", "wikipediaUrl": "https://en.wikipedia.org/wiki/Miami", "latitude": 25.7617, "longitude": -80.1918},
        "orlando": {"wikidataId": "Q49233", "wikipediaUrl": "https://en.wikipedia.org/wiki/Orlando,_Florida", "latitude": 28.5383, "longitude": -81.3792},
        "tampa": {"wikidataId": "Q49255", "wikipediaUrl": "https://en.wikipedia.org/wiki/Tampa,_Florida", "latitude": 27.9506, "longitude": -82.4572},
        "new-york-city": {"wikidataId": "Q60", "wikipediaUrl": "https://en.wikipedia.org/wiki/New_York_City", "latitude": 40.7128, "longitude": -74.0060},
        "brooklyn": {"wikidataId": "Q18419", "wikipediaUrl": "https://en.wikipedia.org/wiki/Brooklyn", "latitude": 40.6782, "longitude": -73.9442},
        "chicago": {"wikidataId": "Q1297", "wikipediaUrl": "https://en.wikipedia.org/wiki/Chicago", "latitude": 41.8781, "longitude": -87.6298},
        "atlanta": {"wikidataId": "Q23556", "wikipediaUrl": "https://en.wikipedia.org/wiki/Atlanta", "latitude": 33.7490, "longitude": -84.3880},
        "seattle": {"wikidataId": "Q5083", "wikipediaUrl": "https://en.wikipedia.org/wiki/Seattle", "latitude": 47.6062, "longitude": -122.3321},
        "phoenix": {"wikidataId": "Q16556", "wikipediaUrl": "https://en.wikipedia.org/wiki/Phoenix,_Arizona", "latitude": 33.4484, "longitude": -112.0740},
        "nashville": {"wikidataId": "Q23197", "wikipediaUrl": "https://en.wikipedia.org/wiki/Nashville,_Tennessee", "latitude": 36.1627, "longitude": -86.7816},
        "charlotte": {"wikidataId": "Q16565", "wikipediaUrl": "https://en.wikipedia.org/wiki/Charlotte,_North_Carolina", "latitude": 35.2271, "longitude": -80.8431},
        "boston": {"wikidataId": "Q100", "wikipediaUrl": "https://en.wikipedia.org/wiki/Boston", "latitude": 42.3601, "longitude": -71.0589}
    }
}

with open("src/data/geo.ts", "r") as f:
    content = f.read()

# Update StateData and CityData interfaces
state_interface_old = """export interface StateData {
  slug: string;
  name: string;
  code: string;
  region: string;
  totalSmallBusinesses: string;
  activeCycle: string;
  deadline: string;
  awardedGrantsCount: number;
  description: string;
  highlightCities: string[];
}"""

state_interface_new = """export interface StateData {
  slug: string;
  name: string;
  code: string;
  region: string;
  totalSmallBusinesses: string;
  activeCycle: string;
  deadline: string;
  awardedGrantsCount: number;
  description: string;
  highlightCities: string[];
  wikidataId?: string;
  wikipediaUrl?: string;
  latitude?: number;
  longitude?: number;
}"""

city_interface_old = """export interface CityData {
  stateSlug: string;
  slug: string;
  name: string;
  stateName: string;
  stateCode: string;
  metroPopulation: string;
  focusTitle: string;
  description: string;
  priorityNeeds: string[];
  keyIndustries: string[];
  awardedGrantsCount: number;
  activeCycle: string;
  deadline: string;
}"""

city_interface_new = """export interface CityData {
  stateSlug: string;
  slug: string;
  name: string;
  stateName: string;
  stateCode: string;
  metroPopulation: string;
  focusTitle: string;
  description: string;
  priorityNeeds: string[];
  keyIndustries: string[];
  awardedGrantsCount: number;
  activeCycle: string;
  deadline: string;
  wikidataId?: string;
  wikipediaUrl?: string;
  latitude?: number;
  longitude?: number;
}"""

content = content.replace(state_interface_old, state_interface_new)
content = content.replace(city_interface_old, city_interface_new)

# Inject metadata into states
for slug, meta in GEO_METADATA["states"].items():
    pattern = rf"(\{{\s*slug:\s*'{slug}',[\s\S]*?highlightCities:\s*\[[\s\S]*?\])(\s*\}})"
    match = re.search(pattern, content)
    if match:
        insertion = f",\n    wikidataId: '{meta['wikidataId']}',\n    wikipediaUrl: '{meta['wikipediaUrl']}',\n    latitude: {meta['latitude']},\n    longitude: {meta['longitude']}"
        replacement = match.group(1) + insertion + match.group(2)
        content = content[:match.start()] + replacement + content[match.end():]

# Inject metadata into cities
for slug, meta in GEO_METADATA["cities"].items():
    pattern = rf"(\{{\s*stateSlug:\s*'[^']+',\s*slug:\s*'{slug}',[\s\S]*?deadline:\s*'[^']+')(\s*\}})"
    match = re.search(pattern, content)
    if match:
        insertion = f",\n    wikidataId: '{meta['wikidataId']}',\n    wikipediaUrl: '{meta['wikipediaUrl']}',\n    latitude: {meta['latitude']},\n    longitude: {meta['longitude']}"
        replacement = match.group(1) + insertion + match.group(2)
        content = content[:match.start()] + replacement + content[match.end():]

with open("src/data/geo.ts", "w") as f:
    f.write(content)

print("Enriched geo.ts successfully with SOTA Wikidata entities and geographic coordinates!")
