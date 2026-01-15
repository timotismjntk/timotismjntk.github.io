export const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const footerLinks = {
  services: [
    { href: '/services#websites', label: 'Websites' },
    { href: '/services#seo', label: 'SEO' },
    { href: '/services#paid-ads', label: 'Paid Ads' },
    { href: '/services#crm', label: 'CRM' },
    { href: '/services#automations', label: 'Automations' },
  ],
  company: [
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ],
} as const;

export const socialLinks = [
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://instagram.com', label: 'Instagram', icon: 'instagram' },
  { href: 'https://facebook.com', label: 'Facebook', icon: 'facebook' },
] as const;
