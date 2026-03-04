import type { SiteContent } from "@/types/content";

export const siteContent: SiteContent = {
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
    { label: "Get Started", href: "#quote", isButton: true },
  ],

  hero: {
    headline: "Your Health\nDeserves The\nBest Protection",
    tagline: "Your health, your family, our commitment to care.",
    subheadline:
      "Expert insurance advisory services tailored to your life's needs. Let Growth Edge guide you to the right coverage.",
    primaryCTA: { label: "Get Your Quote", href: "#quote" },
    secondaryCTA: { label: "Our Services", href: "#services" },
    backgroundImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&q=80",
  },

  intro: {
    headline: "We believe everyone deserves access to quality healthcare coverage that truly protects what matters most — your family's health and peace of mind.",
    leftText: "Growth Edge was founded with a simple mission: to make insurance accessible, understandable, and genuinely helpful. We cut through the complexity to find the coverage that fits your life perfectly.",
    rightText: "Our team of experienced advisors works closely with every client, providing personalized guidance through every step — from choosing the right plan to seamless claims support when you need it most.",
  },

  services: [
    {
      title: "Family Health Plans",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
      href: "#",
      featured: true,
    },
    {
      title: "Individual Coverage",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      href: "#",
    },
    {
      title: "Senior Care Plans",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80",
      href: "#",
    },
    {
      title: "Corporate Wellness",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
      href: "#",
    },
    {
      title: "Critical Illness",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
      href: "#",
    },
  ],

  trust: {
    headline: "Why Thousands Trust Growth Edge For Their Health Protection",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=1200&q=80",
    stats: [
      { value: "1,000+", label: "Families Protected" },
      { value: "₹50Cr+", label: "Claims Settled" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "6+", label: "Years of Trust" },
    ],
  },

  expertTips: [
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      category: "Health",
      title: "5 Things to Check Before Renewing Your Health Insurance",
      excerpt:
        "Don't auto-renew without reviewing these crucial aspects of your health insurance policy.",
      href: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      category: "Life",
      title: "How to Choose the Right Life Insurance Plan in 2026",
      excerpt:
        "A comprehensive guide to selecting life insurance that truly matches your family's goals.",
      href: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      category: "Planning",
      title: "Understanding Motor Insurance: A Complete Guide",
      excerpt:
        "Everything you need to know about comprehensive vs third-party motor insurance coverage.",
      href: "#",
    },
  ],

  faqs: [
    {
      question: "What types of health insurance plans do you offer?",
      answer: "We offer a comprehensive range of plans including individual coverage, family floater plans, senior citizen plans, corporate group health insurance, and critical illness coverage. Each plan is customizable to fit your specific healthcare needs and budget.",
    },
    {
      question: "How do I choose the right insurance plan for my family?",
      answer: "Our expert advisors work closely with you to understand your family's health needs, budget, and preferences. We compare plans across multiple insurers to find the best coverage, considering factors like pre-existing conditions, hospital network, claim settlement ratio, and premium affordability.",
    },
    {
      question: "What is the claims process like?",
      answer: "We provide end-to-end claims support. For cashless claims, simply visit a network hospital and our team coordinates with the insurer. For reimbursement claims, submit your documents to us and we handle the entire process, ensuring quick and hassle-free settlement.",
    },
    {
      question: "Can I switch my existing insurance to a better plan?",
      answer: "Absolutely. We specialize in policy portability and can help you switch to a better plan without losing your accumulated benefits like waiting period credits. Our advisors will compare your current plan with alternatives and guide you through a seamless transition.",
    },
    {
      question: "Do you charge any advisory fees?",
      answer: "Our advisory services are completely free for clients. We earn our commission from insurance companies, so you get unbiased expert guidance at no extra cost. Our goal is to find you the best coverage, not to push specific products.",
    },
  ],

  cta: {
    headline: "Ready To Protect What Matters Most? Let's Get Started Today",
    description:
      "Get personalized insurance advice from our expert team. No obligations, just the clarity you need to make the right decision.",
    primaryCTA: { label: "Get Your Free Quote", href: "#quote" },
    secondaryCTA: { label: "Talk to an Advisor", href: "#contact" },
  },

  footer: {
    tagline:
      "Your trusted partner in insurance advisory. Protecting families and businesses with personalized solutions since 2020.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Family Health Plans", href: "#" },
          { label: "Individual Coverage", href: "#" },
          { label: "Senior Care Plans", href: "#" },
          { label: "Corporate Wellness", href: "#" },
          { label: "Critical Illness", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Expert Tips", href: "#blog" },
          { label: "Insurance Calculator", href: "#" },
          { label: "Claim Process", href: "#" },
          { label: "FAQs", href: "#faq" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "#about" },
          { label: "Our Team", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Contact", href: "#contact" },
        ],
      },
    ],
    contactInfo: {
      email: "hello@growthedge.in",
      phone: "+91 98765 43210",
      address: "Mumbai, Maharashtra, India",
    },
    socialLinks: [
      { platform: "Facebook", href: "#", icon: "Facebook" },
      { platform: "Twitter", href: "#", icon: "Twitter" },
      { platform: "Instagram", href: "#", icon: "Instagram" },
      { platform: "LinkedIn", href: "#", icon: "Linkedin" },
    ],
    copyright: "© 2026 Growth Edge Insurance Advisory. All rights reserved.",
  },
};
