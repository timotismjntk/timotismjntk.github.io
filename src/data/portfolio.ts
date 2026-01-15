export const portfolioProjects = [
  {
    id: 'lusso-mtm',
    title: 'Lusso MTM',
    category: 'Website & Branding',
    description: 'Luxury made-to-measure tailoring company with a premium digital presence.',
    longDescription: 'We created a sophisticated website for Lusso MTM that reflects their commitment to luxury and craftsmanship. The site features custom animations, a booking system, and a gallery showcasing their bespoke creations.',
    image: '/portfolio/lusso-mtm.jpg',
    services: ['Website Design', 'Branding', 'SEO'],
    results: {
      traffic: '+180%',
      leads: '+95%',
      conversion: '3.2%',
    },
  },
  {
    id: 'ten23-films',
    title: 'Ten23 Films',
    category: 'Website & SEO',
    description: 'Houston-based film production company showcasing their creative work.',
    longDescription: 'Ten23 Films needed a portfolio website that would showcase their video production work and attract new clients. We built a cinematic website with video integration and optimized it for local Houston searches.',
    image: '/portfolio/ten23-films.jpg',
    services: ['Website Design', 'Video Integration', 'Local SEO'],
    results: {
      traffic: '+240%',
      leads: '+120%',
      conversion: '4.1%',
    },
  },
  {
    id: 'garden-montessori',
    title: 'Garden Montessori',
    category: 'Full Digital Strategy',
    description: 'Early childhood education center reaching more Houston families.',
    longDescription: 'Garden Montessori wanted to increase enrollment and build trust with parents. We developed a comprehensive digital strategy including website redesign, local SEO, and paid advertising.',
    image: '/portfolio/garden-montessori.jpg',
    services: ['Website Design', 'Local SEO', 'Google Ads', 'CRM Setup'],
    results: {
      traffic: '+320%',
      leads: '+200%',
      conversion: '5.8%',
    },
  },
] as const;

export type PortfolioProject = typeof portfolioProjects[number];
