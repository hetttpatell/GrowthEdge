import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";
import { SITE_URL, SITE_NAME, organizationJsonLd } from "@/lib/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogLayout from "@/components/sections/BlogArticle";
import LifeCoverCalculator from "@/components/blog/LifeCoverCalculator";

const mdxComponents = {
  LifeCoverCalculator,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getPostBySlug(slug);

  if (!article) {
    return { title: "Article Not Found | Growth Edge" };
  }

  const ogImageUrl = `/og/blog?title=${encodeURIComponent(article.title)}&category=${encodeURIComponent(article.category)}&date=${encodeURIComponent(new Date(article.publishedDate).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" }))}`;

  return {
    title: `${article.title} | Growth Edge Insurance Advisory`,
    description: article.metaDescription,
    keywords: article.keywords,
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.publishedDate,
      authors: [article.author.name],
      section: article.category,
      tags: article.keywords,
      url: `${SITE_URL}/blog/${article.slug}`,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      images: [ogImageUrl],
      creator: "@growthedge",
      site: "@growthedge",
    },
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function BlogJsonLd({ slug }: { slug: string }) {
  const article = getPostBySlug(slug);
  if (!article) return null;

  const org = organizationJsonLd();
  const articleUrl = `${SITE_URL}/blog/${article.slug}`;

  const jsonLd = [
    // Article schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.metaDescription,
      image: article.image,
      datePublished: `${article.publishedDate}T08:00:00+05:30`,
      dateModified: `${article.publishedDate}T08:00:00+05:30`,
      author: {
        "@type": "Person",
        name: article.author.name,
        jobTitle: article.author.role,
        worksFor: { "@type": "Organization", name: SITE_NAME },
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/og/home`,
          width: 1200,
          height: 630,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": articleUrl,
      },
      keywords: article.keywords.join(", "),
      articleSection: article.category,
      inLanguage: "en-IN",
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
          name: "Blog",
          item: `${SITE_URL}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: articleUrl,
        },
      ],
    },
    // Organization (publisher identity)
    {
      "@context": "https://schema.org",
      ...org,
    },
  ];

  // Add FAQPage schema if FAQs exist
  if (article.faqs && article.faqs.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    } as never);
  }

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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = getPostBySlug(slug);

  if (!article) {
    notFound();
  }

  const { content, ...meta } = article;

  return (
    <>
      <BlogJsonLd slug={slug} />
      <Navbar />
      <BlogLayout article={meta}>
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </BlogLayout>
      <Footer />
    </>
  );
}
