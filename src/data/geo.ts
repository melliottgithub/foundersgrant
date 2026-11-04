export interface StateData {
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
}

export interface CityData {
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
}

export const STATES: StateData[] = [
  {
    slug: 'colorado',
    name: 'Colorado',
    code: 'CO',
    region: 'Mountain West',
    totalSmallBusinesses: '680,000+',
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026',
    awardedGrantsCount: 7,
    description: 'Founders Grant headquarters chapter. Prioritizing Front Range trades, independent craftspeople, outdoor innovators, and community ventures across Colorado.',
    highlightCities: ['Denver', 'Boulder', 'Colorado Springs', 'Fort Collins', 'Aurora', 'Lakewood', 'Littleton', 'Arvada']
  },
  {
    slug: 'texas',
    name: 'Texas',
    code: 'TX',
    region: 'Southwest',
    totalSmallBusinesses: '3.1 Million',
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026',
    awardedGrantsCount: 6,
    description: 'Empowering bootstrapped founders, trade service providers, and local innovators across the Lone Star State with modern digital infrastructure.',
    highlightCities: ['Austin', 'Dallas', 'Houston', 'San Antonio', 'Fort Worth']
  },
  {
    slug: 'california',
    name: 'California',
    code: 'CA',
    region: 'West Coast',
    totalSmallBusinesses: '4.2 Million',
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026',
    awardedGrantsCount: 8,
    description: 'Supporting Main Street businesses, boutique studios, wellness innovators, and grassroots creators throughout California.',
    highlightCities: ['Los Angeles', 'San Diego', 'San Francisco', 'San Jose', 'Sacramento']
  },
  {
    slug: 'florida',
    name: 'Florida',
    code: 'FL',
    region: 'Southeast',
    totalSmallBusinesses: '2.8 Million',
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026',
    awardedGrantsCount: 5,
    description: 'Awarding bilingual web portals, event directories, and automated operations engines to independent business owners across Florida.',
    highlightCities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale']
  },
  {
    slug: 'new-york',
    name: 'New York',
    code: 'NY',
    region: 'Northeast',
    totalSmallBusinesses: '2.3 Million',
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026',
    awardedGrantsCount: 7,
    description: 'Helping neighborhood businesses, creative agencies, and non-profit innovators in New York compete with enterprise conglomerates.',
    highlightCities: ['New York City', 'Brooklyn', 'Queens', 'Buffalo', 'Rochester']
  },
  {
    slug: 'illinois',
    name: 'Illinois',
    code: 'IL',
    region: 'Midwest',
    totalSmallBusinesses: '1.2 Million',
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026',
    awardedGrantsCount: 5,
    description: 'Delivering full-stack software and lead automations to family-owned trades, retail, and community startups across Cook County and Illinois.',
    highlightCities: ['Chicago', 'Naperville', 'Rockford', 'Aurora', 'Evanston']
  },
  {
    slug: 'georgia',
    name: 'Georgia',
    code: 'GA',
    region: 'Southeast',
    totalSmallBusinesses: '1.1 Million',
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026',
    awardedGrantsCount: 4,
    description: 'Supporting trade contractors, local logistics, and emerging startups across the greater Atlanta metro area and Georgia.',
    highlightCities: ['Atlanta', 'Savannah', 'Augusta', 'Alpharetta', 'Marietta']
  },
  {
    slug: 'washington',
    name: 'Washington',
    code: 'WA',
    region: 'Pacific Northwest',
    totalSmallBusinesses: '640,000+',
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026',
    awardedGrantsCount: 3,
    description: 'Bridging the engineering divide for Pacific Northwest creators, local shops, and non-profit organizations in Washington State.',
    highlightCities: ['Seattle', 'Bellevue', 'Tacoma', 'Spokane', 'Vancouver']
  },
  {
    slug: 'arizona',
    name: 'Arizona',
    code: 'AZ',
    region: 'Southwest',
    totalSmallBusinesses: '610,000+',
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026',
    awardedGrantsCount: 3,
    description: 'Modernizing Valley of the Sun trade services, solar consultants, and early ventures with high-converting web engines.',
    highlightCities: ['Phoenix', 'Scottsdale', 'Tucson', 'Mesa', 'Chandler']
  },
  {
    slug: 'tennessee',
    name: 'Tennessee',
    code: 'TN',
    region: 'Southeast',
    totalSmallBusinesses: '620,000+',
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026',
    awardedGrantsCount: 3,
    description: 'Fueling independent artisans, hospitality brands, musicians, and local trades across Middle and East Tennessee.',
    highlightCities: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Franklin']
  },
  {
    slug: 'north-carolina',
    name: 'North Carolina',
    code: 'NC',
    region: 'Southeast',
    totalSmallBusinesses: '960,000+',
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026',
    awardedGrantsCount: 4,
    description: 'Equipping Research Triangle and Charlotte small business founders with high-speed web apps and local Google Map domination.',
    highlightCities: ['Charlotte', 'Raleigh', 'Durham', 'Greensboro', 'Asheville']
  },
  {
    slug: 'massachusetts',
    name: 'Massachusetts',
    code: 'MA',
    region: 'Northeast',
    totalSmallBusinesses: '710,000+',
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026',
    awardedGrantsCount: 3,
    description: 'Providing elite full-stack engineering and search infrastructure grants to early Boston ventures with big community missions.',
    highlightCities: ['Boston', 'Cambridge', 'Worcester', 'Springfield', 'Somerville']
  }
];

export const CITIES_MATRIX: CityData[] = [
  // ================= COLORADO ANCHOR CLUSTER =================
  {
    stateSlug: 'colorado',
    slug: 'denver',
    name: 'Denver',
    stateName: 'Colorado',
    stateCode: 'CO',
    metroPopulation: '2.9 Million',
    focusTitle: 'Denver Independent Businesses, Artisans & Tech Founders',
    description: 'Founders Grant flagship chapter. Providing enterprise Next.js platforms, local SEO, and AI workflow automations to bootstrapped Denver and Front Range entrepreneurs.',
    priorityNeeds: ['Local Lead Generation', 'Missed-Call SMS Automations', 'High-Speed Web Portals'],
    keyIndustries: ['Custom Trades & Remodeling', 'Outdoor Lifestyle Brands', 'Specialty Craft Breweries & Food'],
    awardedGrantsCount: 4,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },
  {
    stateSlug: 'colorado',
    slug: 'boulder',
    name: 'Boulder',
    stateName: 'Colorado',
    stateCode: 'CO',
    metroPopulation: '330,000',
    focusTitle: 'Boulder Sustainable Ventures, Wellness & Research Founders',
    description: 'Empowering mission-driven Boulder innovators, wellness practitioners, and eco-conscious businesses with clean digital architecture.',
    priorityNeeds: ['Membership Platforms', 'Eco-Brand E-Commerce', 'Automated Event Calendars'],
    keyIndustries: ['Holistic Health & Wellness', 'CleanTech & Sustainability', 'Specialty Consumer Goods'],
    awardedGrantsCount: 2,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },
  {
    stateSlug: 'colorado',
    slug: 'colorado-springs',
    name: 'Colorado Springs',
    stateName: 'Colorado',
    stateCode: 'CO',
    metroPopulation: '760,000',
    focusTitle: 'Pikes Peak Region Contractors, Trades & Family Businesses',
    description: 'Equipping Colorado Springs home service contractors, veterans, and small shops with automated lead dispatch funnels.',
    priorityNeeds: ['Contractor Instant Quote Forms', 'Google Local Map Pack SEO', 'Automated Review Collection'],
    keyIndustries: ['Residential Contracting', 'Veteran-Owned Ventures', 'Automotive & Fleet Services'],
    awardedGrantsCount: 2,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },
  {
    stateSlug: 'colorado',
    slug: 'fort-collins',
    name: 'Fort Collins',
    stateName: 'Colorado',
    stateCode: 'CO',
    metroPopulation: '360,000',
    focusTitle: 'Northern Colorado AgTech, Independent Retail & Creators',
    description: 'Supporting Larimer County artisans, educational initiatives, and independent retailers with lightning-fast digital storefronts.',
    priorityNeeds: ['Local Storefront Catalog', 'Speed Optimization (100/100 Lighthouse)', 'Mobile Lead Intake'],
    keyIndustries: ['Craft Breweries', 'Agricultural Innovation', 'Independent Retail & Apparel'],
    awardedGrantsCount: 1,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },
  {
    stateSlug: 'colorado',
    slug: 'aurora',
    name: 'Aurora',
    stateName: 'Colorado',
    stateCode: 'CO',
    metroPopulation: '390,000',
    focusTitle: 'Aurora Diverse Entrepreneurs & Community Ventures',
    description: 'Awarding in-kind engineering to Aurora immigrant-owned culinary ventures, service trades, and local community organizations.',
    priorityNeeds: ['Multilingual Digital Menus', 'Automated SMS Order Updates', 'Local Map Citations'],
    keyIndustries: ['International Cuisine', 'Auto Repair & Trades', 'Healthcare & Home Aid'],
    awardedGrantsCount: 2,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },
  {
    stateSlug: 'colorado',
    slug: 'lakewood',
    name: 'Lakewood',
    stateName: 'Colorado',
    stateCode: 'CO',
    metroPopulation: '160,000',
    focusTitle: 'Lakewood & West Metro Trades, Healthcare & Services',
    description: 'Delivering modern lead-capture engines and appointment booking systems to Lakewood solo practitioners and local trades.',
    priorityNeeds: ['Automated Appointment Booking', 'Missed-Call Lead Recovery', 'Mobile Safe-Zone Layouts'],
    keyIndustries: ['Physical Therapy & Clinics', 'Home Plumbing & HVAC', 'Professional Consulting'],
    awardedGrantsCount: 1,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },

  // ================= TEXAS CHAPTER =================
  {
    stateSlug: 'texas',
    slug: 'austin',
    name: 'Austin',
    stateName: 'Texas',
    stateCode: 'TX',
    metroPopulation: '2.4 Million',
    focusTitle: 'Austin Bootstrapped Founders, Local Services & Creatives',
    description: 'Empowering early-stage Austin innovators and independent trades with custom digital infrastructure and automated customer booking engines.',
    priorityNeeds: ['Client Booking Engines', 'Search Engine Authority', 'Custom Client Portals'],
    keyIndustries: ['Bootstrapped Tech', 'Live Events & Music', 'Specialty Consumer Brands'],
    awardedGrantsCount: 3,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },
  {
    stateSlug: 'texas',
    slug: 'dallas',
    name: 'Dallas',
    stateName: 'Texas',
    stateCode: 'TX',
    metroPopulation: '7.9 Million',
    focusTitle: 'DFW Metroplex Trade Businesses & Logistics Founders',
    description: 'Awarding in-kind engineering grants to DFW local trades, family-owned services, and community innovators to modernize their operational software.',
    priorityNeeds: ['Automated Dispatch & Scheduling', 'Missed-Call Lead Recovery', 'Service Area Map SEO'],
    keyIndustries: ['Commercial Contracting', 'Logistics & Warehousing', 'Professional Services'],
    awardedGrantsCount: 3,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },
  {
    stateSlug: 'texas',
    slug: 'houston',
    name: 'Houston',
    stateName: 'Texas',
    stateCode: 'TX',
    metroPopulation: '7.3 Million',
    focusTitle: 'Houston Industrial Services, Medical Practices & Retail',
    description: 'Equipping Houston small enterprises and healthcare practices with sub-second Next.js web applications and automated client onboarding.',
    priorityNeeds: ['High-Volume Lead Intake', 'HIPAA-Compliant Contact Funnels', 'Google Map Domination'],
    keyIndustries: ['Energy Services', 'Medical & Healthcare Clinics', 'Industrial Equipment'],
    awardedGrantsCount: 2,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },

  // ================= CALIFORNIA CHAPTER =================
  {
    stateSlug: 'california',
    slug: 'los-angeles',
    name: 'Los Angeles',
    stateName: 'California',
    stateCode: 'CA',
    metroPopulation: '12.8 Million',
    focusTitle: 'Southern California Studios, Micro-Founders & Creators',
    description: 'Funding complete digital transformations for independent creators, wellness centers, and specialty craft businesses throughout Greater Los Angeles.',
    priorityNeeds: ['Media-Rich Portfolio Engines', 'Automated Client Onboarding', 'Fast Event Registration'],
    keyIndustries: ['Creative Studios', 'Wellness & Holistic Medicine', 'Apparel & Design'],
    awardedGrantsCount: 4,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },
  {
    stateSlug: 'california',
    slug: 'san-diego',
    name: 'San Diego',
    stateName: 'California',
    stateCode: 'CA',
    metroPopulation: '3.3 Million',
    focusTitle: 'San Diego Coastal Businesses, Fitness & Social Ventures',
    description: 'Equipping San Diego founders with custom web applications, automated scheduling, and high-visibility local search frameworks.',
    priorityNeeds: ['Membership & Class Portals', 'Automated SMS Alerts', 'Local SEO Citation Grids'],
    keyIndustries: ['Fitness & Outdoor Clubs', 'Marine & Eco-Tourism', 'Biotech Micro-Consulting'],
    awardedGrantsCount: 2,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },
  {
    stateSlug: 'california',
    slug: 'san-francisco',
    name: 'San Francisco',
    stateName: 'California',
    stateCode: 'CA',
    metroPopulation: '4.6 Million',
    focusTitle: 'Bay Area Non-Profits, Civic Innovators & Micro-Founders',
    description: 'Providing non-profit founders and grassroots Bay Area community leaders with enterprise-level open source web architecture.',
    priorityNeeds: ['Open Source Code Handover', 'Sub-Second Lighthouse Scores', 'Volunteer Intake Portals'],
    keyIndustries: ['Civic Technology', 'Community Non-Profits', 'Artisan Coffee & Food'],
    awardedGrantsCount: 2,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },

  // ================= FLORIDA CHAPTER =================
  {
    stateSlug: 'florida',
    slug: 'miami',
    name: 'Miami',
    stateName: 'Florida',
    stateCode: 'FL',
    metroPopulation: '6.1 Million',
    focusTitle: 'South Florida Local Ventures, Hospitality & Innovators',
    description: 'Equipping emerging Miami businesses, fitness studios, and service providers with bilingual lead funnels, social event portals, and automated CRM pipelines.',
    priorityNeeds: ['Bilingual Web Architecture', 'Event & Social Hubs', 'Instant WhatsApp/SMS Automations'],
    keyIndustries: ['Hospitality & Nightlife', 'Latin Dance & Fitness', 'Real Estate Micro-Agencies'],
    awardedGrantsCount: 3,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },
  {
    stateSlug: 'florida',
    slug: 'orlando',
    name: 'Orlando',
    stateName: 'Florida',
    stateCode: 'FL',
    metroPopulation: '2.7 Million',
    focusTitle: 'Central Florida Hospitality, Entertainment & Local Trades',
    description: 'Awarding fast booking funnels and local map ranking to Orlando family-owned services and creative studios.',
    priorityNeeds: ['Ticket & Booking Systems', 'Google Local Map SEO', 'Fast Mobile Safe-Zone Layouts'],
    keyIndustries: ['Family Entertainment', 'Trade Services & Roofing', 'Culinary & Catering'],
    awardedGrantsCount: 2,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },

  // ================= NEW YORK CHAPTER =================
  {
    stateSlug: 'new-york',
    slug: 'new-york-city',
    name: 'New York City',
    stateName: 'New York',
    stateCode: 'NY',
    metroPopulation: '19.5 Million',
    focusTitle: 'Tri-State Small Businesses, Creators & Cultural Ventures',
    description: 'Helping NYC founders compete against venture-backed conglomerates through ultra-fast, search-dominant web architecture and automated workflows.',
    priorityNeeds: ['Mobile Performance Optimization', 'High-Volume Lead Intake', 'Organic Search Dominance'],
    keyIndustries: ['Independent Retail & Fashion', 'Culinary & Specialty Dining', 'Professional Services'],
    awardedGrantsCount: 4,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },
  {
    stateSlug: 'new-york',
    slug: 'brooklyn',
    name: 'Brooklyn',
    stateName: 'New York',
    stateCode: 'NY',
    metroPopulation: '2.6 Million',
    focusTitle: 'Brooklyn Independent Artisans, Makers & Creative Studios',
    description: 'Equipping Brooklyn craftspeople, maker collectives, and micro-studios with custom portfolio engines and direct client booking.',
    priorityNeeds: ['Visual Portfolio Architecture', 'Sub-Second Load Times', 'Digital Invoicing Links'],
    keyIndustries: ['Artisan Woodcraft & Ceramics', 'Film & Photography Studios', 'Local Community Centers'],
    awardedGrantsCount: 3,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },

  // ================= ILLINOIS CHAPTER =================
  {
    stateSlug: 'illinois',
    slug: 'chicago',
    name: 'Chicago',
    stateName: 'Illinois',
    stateCode: 'IL',
    metroPopulation: '9.4 Million',
    focusTitle: 'Chicago Neighborhood Retail, Family Trades & STEM Startups',
    description: 'Supporting neighborhood business owners across Cook County with digital modernization, automated dispatching, and high-conversion landing pages.',
    priorityNeeds: ['E-Commerce & Menus', 'Automated Dispatch Forms', 'Local Google Maps SEO'],
    keyIndustries: ['Industrial Trades & HVAC', 'Community Non-Profits', 'Independent Hospitality'],
    awardedGrantsCount: 5,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },

  // ================= GEORGIA CHAPTER =================
  {
    stateSlug: 'georgia',
    slug: 'atlanta',
    name: 'Atlanta',
    stateName: 'Georgia',
    stateCode: 'GA',
    metroPopulation: '6.2 Million',
    focusTitle: 'Georgia Community Businesses, Contractors & Tech Founders',
    description: 'Delivering end-to-end digital infrastructure grants to Atlanta micro-businesses, trade contractors, and creative studios seeking sustainable growth.',
    priorityNeeds: ['Trade Contractor Lead Funnels', 'Google Local Service Setup', 'Automated Invoicing Integrations'],
    keyIndustries: ['Commercial Contracting', 'Creative Film & Audio', 'Local Logistics'],
    awardedGrantsCount: 4,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },

  // ================= WASHINGTON CHAPTER =================
  {
    stateSlug: 'washington',
    slug: 'seattle',
    name: 'Seattle',
    stateName: 'Washington',
    stateCode: 'WA',
    metroPopulation: '4.0 Million',
    focusTitle: 'Pacific Northwest Small Businesses & Indie Creators',
    description: 'Bridging the tech divide for non-tech Puget Sound small business owners with cutting-edge full-stack web applications and automated customer support.',
    priorityNeeds: ['Full-Stack Customer Portals', 'Automated Follow-ups', 'Speed & Accessibility Compliance'],
    keyIndustries: ['Coffee Roasters & Specialty Food', 'Outdoor Recreation', 'Custom Software Micro-Consulting'],
    awardedGrantsCount: 3,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },

  // ================= ARIZONA CHAPTER =================
  {
    stateSlug: 'arizona',
    slug: 'phoenix',
    name: 'Phoenix',
    stateName: 'Arizona',
    stateCode: 'AZ',
    metroPopulation: '5.0 Million',
    focusTitle: 'Valley of the Sun Service Founders & Early Ventures',
    description: 'Deploying high-impact web design, automated lead routing, and local map optimization grants to burgeoning Phoenix small businesses.',
    priorityNeeds: ['Rapid Quote Calculators', 'Local Map Domination', 'Automated Review Funnels'],
    keyIndustries: ['HVAC & Solar Contractors', 'Pool Maintenance & Trades', 'Real Estate Services'],
    awardedGrantsCount: 3,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },

  // ================= TENNESSEE CHAPTER =================
  {
    stateSlug: 'tennessee',
    slug: 'nashville',
    name: 'Nashville',
    stateName: 'Tennessee',
    stateCode: 'TN',
    metroPopulation: '2.0 Million',
    focusTitle: 'Nashville Music Venues, Creators & Specialty Trades',
    description: 'Supporting Middle Tennessee artisans, music scene creators, and trade contractors with lightning-fast portals and automated client booking.',
    priorityNeeds: ['Event Ticket Portals', 'Automated Invoicing Links', 'Mobile Fast-Action Layouts'],
    keyIndustries: ['Music & Production Studios', 'Hospitality & Dining', 'Construction & Trades'],
    awardedGrantsCount: 3,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },

  // ================= NORTH CAROLINA CHAPTER =================
  {
    stateSlug: 'north-carolina',
    slug: 'charlotte',
    name: 'Charlotte',
    stateName: 'North Carolina',
    stateCode: 'NC',
    metroPopulation: '2.7 Million',
    focusTitle: 'Charlotte Regional Business & Contractor Modernization',
    description: 'Awarding modern digital infrastructure and automated lead engines to Charlotte local service providers and independent ventures.',
    priorityNeeds: ['Service Dispatch Forms', 'Google Business Profile Map SEO', 'Sub-Second Lighthouse Load Times'],
    keyIndustries: ['Financial Micro-Advisors', 'Residential Home Services', 'Logistics'],
    awardedGrantsCount: 2,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  },

  // ================= MASSACHUSETTS CHAPTER =================
  {
    stateSlug: 'massachusetts',
    slug: 'boston',
    name: 'Boston',
    stateName: 'Massachusetts',
    stateCode: 'MA',
    metroPopulation: '4.9 Million',
    focusTitle: 'New England Independent Businesses & Academic Spin-outs',
    description: 'Providing elite full-stack engineering and search infrastructure grants to early Boston ventures with big community missions.',
    priorityNeeds: ['Research / Showcase Platforms', 'Accessibility Standards', 'CRM & Pipeline Automations'],
    keyIndustries: ['EdTech & Academic Spinoffs', 'Specialty Seafood & Dining', 'Professional Services'],
    awardedGrantsCount: 3,
    activeCycle: 'Q4 2026 / Q1 2027 Cycle',
    deadline: 'December 15, 2026'
  }
];

export function getState(slug: string): StateData | undefined {
  return STATES.find((s) => s.slug === slug);
}

export function getCitiesByState(stateSlug: string): CityData[] {
  return CITIES_MATRIX.filter((c) => c.stateSlug === stateSlug);
}

export function getCity(stateSlug: string, citySlug: string): CityData | undefined {
  return CITIES_MATRIX.find((c) => c.stateSlug === stateSlug && c.slug === citySlug);
}
