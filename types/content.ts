export interface NavLink {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface HeroContent {
  headline: string;
  tagline: string;
  subheadline: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  backgroundImage: string;
}

export interface IntroContent {
  headline: string;
  leftText: string;
  rightText: string;
}

export interface ServiceItem {
  title: string;
  image: string;
  href: string;
  featured?: boolean;
  description: string;
  highlights: string[];
}

export interface TrustContent {
  headline: string;
  image: string;
  stats: { value: string; label: string }[];
}

export interface TipItem {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CTAContent {
  headline: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterContent {
  tagline: string;
  columns: FooterColumn[];
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  socialLinks: { platform: string; href: string; icon: string }[];
  copyright: string;
}

export interface SiteContent {
  navLinks: NavLink[];
  hero: HeroContent;
  intro: IntroContent;
  services: ServiceItem[];
  trust: TrustContent;
  expertTips: TipItem[];
  faqs: FAQItem[];
  cta: CTAContent;
  footer: FooterContent;
}
