import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Sarthak Shukla — Free Insurance Consultation | Growth Edge",
  description:
    "Book a free insurance consultation with Sarthak Shukla, founder of Growth Edge. Expert advice on health, life, and motor insurance in India. No obligations — just honest, jargon-free guidance.",
  keywords: [
    "contact insurance advisor",
    "free insurance consultation India",
    "insurance advisor Ahmedabad",
    "book insurance consultation",
    "Sarthak Shukla insurance",
    "Growth Edge contact",
    "insurance help India",
    "free health insurance advice",
    "insurance consultant Gujarat",
  ],
  openGraph: {
    title: "Contact Sarthak Shukla — Free Insurance Consultation",
    description:
      "Book a free consultation with an expert insurance advisor. Health, life & motor insurance guidance — no obligations.",
    type: "website",
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    locale: "en_IN",
    images: [
      {
        url: "/og/contact",
        width: 1200,
        height: 630,
        alt: "Contact Growth Edge — Free Insurance Consultation",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sarthak Shukla — Free Insurance Consultation",
    description: "Book a free consultation. Expert insurance advice — no obligations.",
    images: ["/og/contact"],
    creator: "@growthedge",
    site: "@growthedge",
  },
  alternates: {
    canonical: "/contact",
  },
};

function ContactJsonLd() {
  const org = organizationJsonLd();

  const jsonLd = [
    // Person schema for Sarthak Shukla
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sarthak Shukla",
      jobTitle: "Insurance Advisor & Founder",
      worksFor: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      url: `${SITE_URL}/contact`,
      email: "hello@growthedge.in",
      telephone: "+91-83069-34343",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Health Insurance",
        "Life Insurance",
        "Motor Insurance",
        "Critical Illness Insurance",
        "Corporate Health Insurance",
        "Insurance Advisory",
      ],
    },
    // ContactPage
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Growth Edge",
      description: "Book a free insurance consultation with Sarthak Shukla.",
      url: `${SITE_URL}/contact`,
      mainEntity: {
        "@type": "Organization",
        name: SITE_NAME,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+91-83069-34343",
          email: "hello@growthedge.in",
          availableLanguage: ["English", "Hindi", "Gujarati"],
          areaServed: { "@type": "Country", name: "India" },
        },
      },
    },
    // BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: `${SITE_URL}/contact`,
        },
      ],
    },
    // Organization
    {
      "@context": "https://schema.org",
      ...org,
    },
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ContactJsonLd />
      {children}
    </>
  );
}
