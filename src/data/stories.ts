export interface ImpactStory {
  id: string;
  slug: string;
  businessName: string;
  founderName: string;
  city: string;
  state: string;
  category: string;
  awardedPackage: string;
  inKindValue: string;
  challenge: string;
  solutionBuilt: string;
  impactMetric: string;
  quote: string;
  reviewVideoUrl?: string;
}

export const IMPACT_STORIES: ImpactStory[] = [
  {
    id: 'story-1',
    slug: 'denver-custom-woodcraft',
    businessName: 'Mile High Custom Woodcraft',
    founderName: 'Carlos Ramirez',
    city: 'Denver',
    state: 'CO',
    category: 'Local Trades & Woodworking',
    awardedPackage: 'The High-Speed Digital Front Door + Local SEO',
    inKindValue: '$8,500',
    challenge: 'Carlos was relying solely on word of mouth and an outdated Facebook page. Potential clients looking for custom dining tables couldn’t find his portfolio or request quotes easily.',
    solutionBuilt: 'Built a 100/100 Lighthouse Next.js portfolio with a live dimension and timber quote calculator, plus Google Business Profile local schema optimization.',
    impactMetric: '+310% increase in qualified custom quote requests in the first 45 days.',
    quote: 'Founders Grant didn’t just give me a website — they built a professional business asset that made high-budget clients take me seriously. It transformed my entire pipeline.'
  },
  {
    id: 'story-2',
    slug: 'austin-holistic-wellness',
    businessName: 'Sol Wellness Studio',
    founderName: 'Maya Patel',
    city: 'Austin',
    state: 'TX',
    category: 'Health & Wellness',
    awardedPackage: 'Autonomous Operations & Lead Flow Engine',
    inKindValue: '$4,000',
    challenge: 'Maya was losing 4 to 6 new consultation calls every week because she was in session with clients and couldn’t answer the phone.',
    solutionBuilt: 'Implemented an instant missed-call SMS text-back engine paired with automated booking calendar links and SMS appointment reminders.',
    impactMetric: 'Recovered 23 new clients in month one; zero missed inquiries.',
    quote: 'The automated text-back system saved my studio. When I step out of a session, the client has already booked their assessment without me lifting a finger.'
  },
  {
    id: 'story-3',
    slug: 'chicago-youth-mentorship',
    businessName: 'Southside Tech Explorers',
    founderName: 'Marcus Washington',
    city: 'Chicago',
    state: 'IL',
    category: 'Community Education & STEM',
    awardedPackage: 'Custom Web Application & Client Portal',
    inKindValue: '$8,500',
    challenge: 'A grassroots non-profit initiative teaching robotics to teens needed a portal to manage volunteer registrations, parent consent forms, and class schedules.',
    solutionBuilt: 'Created a secure portal with parent login, automated digital consent signatures, and real-time class attendance roster management.',
    impactMetric: 'Over 140 students enrolled in week one with zero paper forms.',
    quote: 'We had zero budget for software developers. The Founders Grant team treated our community initiative like an enterprise tech project. Truly life-changing.'
  }
];
