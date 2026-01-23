export const portfolioProjects = [
  {
    id: 'egov-labura',
    title: 'eGov Labura',
    category: 'Android App',
    description: 'A government employee application for North Labuhanbatu Regency, which was created using the React Native framework.',
    image: '/portfolio/egov.jpg',
    url: 'https://play.google.com/store/apps/details?id=com.egovlabura&pcampaignid=web_share',
    results: {
      ulasan: '4.6',
      download: '10K+',
    },
  },
  {
    id: 'mylabura',
    title: 'myLabura',
    category: 'Android App',
    description: 'myLabura is a public service information portal application for North Labuhanbatu Regency, which was created using the React Native framework.',
    image: '/portfolio/mylabura.jpg',
    url: 'https://play.google.com/store/apps/details?id=com.mylabura&pcampaignid=web_share',
    results: {
      ulasan: '4.9',
      download: '1K+',
    },
  },
  {
    id: 'aioclass',
    title: 'AIO Class',
    category: 'Android & IOS App',
    description: 'This app was developed to support teachers in managing classroom administration digitally in an easy, efficient, and organized manner. It simplifies various administrative tasks, allowing teachers to focus more on learning. Built using React Native, the app is available for Android and iOS.',
    image: '/portfolio/aioclass.jpg',
    url: 'https://s.id/aioclass',
    results: {
      ulasan: '4.7',
      download: '10K+',
    },
  },
  {
    id: 'sekolahdigital',
    title: 'Sekolah Digital',
    category: 'Android & IOS App',
    description: 'This app was developed to support teachers in managing classroom administration digitally in an easy, efficient, and organized manner. It simplifies various administrative tasks, allowing teachers to focus more on learning. Built using React Native, the app is available for Android and iOS.',
    image: '/portfolio/aioclass.jpg',
    url: 'https://s.id/sekolah-digital-android',
    results: {
      ulasan: '4.7',
      download: '10K+',
    },
  },
] as const;

export type PortfolioProject = typeof portfolioProjects[number];
