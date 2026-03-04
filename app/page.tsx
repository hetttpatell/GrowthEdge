import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Benefits";
import Services from "@/components/sections/Services";
import Trust from "@/components/sections/Trust";
import ExpertTips from "@/components/sections/ExpertTips";
import FAQ from "@/components/sections/FAQ";
import CTABlock from "@/components/sections/CTABlock";
import Footer from "@/components/layout/Footer";
import { siteContent } from "@/data/content";
import { SITE_URL, SITE_NAME, seo, organizationJsonLd } from "@/lib/seo";

function HomeJsonLd() {
  const org = organizationJsonLd();

  const jsonLd = [
    // 1. Organization
    {
      "@context": "https://schema.org",
      ...org,
    },
    // 2. WebSite with SearchAction
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description: seo.description,
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      inLanguage: "en-IN",
    },
    // 3. InsuranceAgency (LocalBusiness subtype)
    {
      "@context": "https://schema.org",
      "@type": "InsuranceAgency",
      name: SITE_NAME,
      description: seo.description,
      url: SITE_URL,
      image: `${SITE_URL}/og/home`,
      telephone: "+91-83069-34343",
      email: "hello@growthedge.in",
      priceRange: "Free Consultation",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380015",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.0225,
        longitude: 72.5714,
      },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "State", name: "Gujarat" },
        { "@type": "City", name: "Ahmedabad" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      sameAs: org.sameAs,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "400",
        bestRating: "5",
        worstRating: "1",
      },
    },
    // 4. Service offerings
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Insurance Advisory",
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      areaServed: { "@type": "Country", name: "India" },
      description:
        "Comprehensive insurance advisory services covering health insurance, life insurance, motor insurance, critical illness, and corporate wellness plans in India.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Insurance Services",
        itemListElement: siteContent.services.map((service, i) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
          position: i + 1,
        })),
      },
    },
    // 5. FAQPage schema (+40% AI visibility)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: siteContent.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    // 6. BreadcrumbList
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
      ],
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

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <Trust />
      <ExpertTips />
      <FAQ />
      <CTABlock />
      <Footer />
    </>
  );
}
