/* ─── Central SEO configuration for Growth Edge ─── */

export const SITE_URL = "https://growthedge.in";
export const SITE_NAME = "Growth Edge";
export const SITE_TAGLINE = "Insurance Advisory";

export const seo = {
  title: "Growth Edge — Insurance Advisory in India | Health, Life & Motor Insurance",
  description:
    "Expert insurance advisory services in Ahmedabad, India. Compare and buy the best health insurance, life insurance, and motor insurance plans. Free consultation from IRDAI-certified advisors. 400+ families protected.",
  keywords: [
    // Primary — brand
    "Growth Edge",
    "Growth Edge insurance",
    "insurance advisor India",
    "insurance advisory services",

    // Health insurance — India-specific
    "health insurance India",
    "best health insurance plan India 2026",
    "family health insurance India",
    "family floater plan India",
    "mediclaim policy India",
    "cashless hospitalisation",
    "health insurance renewal",
    "senior citizen health insurance India",
    "super top-up health insurance",
    "health insurance comparison India",
    "IRDAI health insurance",
    "health insurance claim process",
    "corporate health insurance India",
    "group mediclaim policy",

    // Life insurance — India-specific
    "life insurance India",
    "best term insurance plan India 2026",
    "term insurance vs ULIP",
    "life insurance for family",
    "life insurance tax benefits Section 80C",
    "term plan India",
    "life cover calculator India",
    "whole life insurance India",
    "endowment plan India",

    // Motor insurance — India-specific
    "motor insurance India",
    "car insurance India",
    "bike insurance India",
    "two wheeler insurance",
    "comprehensive motor insurance",
    "third party insurance India",
    "vehicle insurance renewal",
    "zero depreciation car insurance",
    "motor insurance claim",

    // Critical illness
    "critical illness insurance India",
    "cancer insurance India",

    // Location-based
    "insurance advisor Ahmedabad",
    "insurance consultant Gujarat",
    "insurance broker Ahmedabad",

    // Long-tail / intent
    "how to choose health insurance India",
    "best insurance advisor near me",
    "free insurance consultation online",
    "insurance advisor for family",
    "no claim bonus health insurance",
    "sum insured calculator",
  ],
} as const;

/** Reusable Organization JSON-LD (publisher / author on every page) */
export function organizationJsonLd() {
  return {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    description: seo.description,
    foundingDate: "2020",
    founders: [{ "@type": "Person", name: "Sarthak Shukla" }],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+91-83069-34343",
      email: "info.growthedgeinvestment@gmail.com",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    sameAs: [
      "https://www.facebook.com/growthedge",
      "https://www.instagram.com/growthedge",
      "https://www.linkedin.com/company/growthedge",
      "https://twitter.com/growthedge",
    ],
  };
}
