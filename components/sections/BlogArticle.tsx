"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import type { BlogPostMeta } from "@/lib/mdx";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogLayout({
  article,
  children,
}: {
  article: BlogPostMeta;
  children: React.ReactNode;
}) {
  return (
    <article className="relative bg-cream text-stone-800">
      {/* Back navigation */}
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-14 pt-28 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-olive transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            Back to Articles
          </Link>
        </motion.div>
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-14 pt-8 pb-8"
      >
        {/* Category badge */}
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-olive" />
          <span className="font-body text-xs font-semibold text-olive uppercase tracking-[0.2em]">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-800 leading-tight mb-6">
          {article.title}
        </h1>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-muted font-body text-sm">
          <span className="inline-flex items-center gap-1.5">
            <User size={14} />
            {article.author.name}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} />
            {formatDate(article.publishedDate)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} />
            {article.readTime}
          </span>
        </div>
      </motion.header>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-14 mb-10 sm:mb-12"
      >
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-edge">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
          />
        </div>
      </motion.div>

      {/* Article body — MDX content rendered as children */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-14 pb-12"
      >
        <div className="article-content max-w-none">
          {children}
        </div>
      </motion.div>

      {/* FAQ Section with Schema */}
      {article.faqs.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-14 pb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl text-stone-800 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {article.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="faq-item group rounded-xl border border-edge bg-white overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 sm:px-6 py-4 font-body font-medium text-stone-800 text-sm sm:text-base select-none">
                  <span className="pr-4">{faq.question}</span>
                  <span className="faq-icon text-olive text-xl transition-transform duration-300 shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 pt-0">
                  <p className="font-body text-sm text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </motion.section>
      )}

      {/* CTA section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-14 pb-20"
      >
        <div className="bg-charcoal rounded-2xl p-6 sm:p-8 md:p-10 text-center">
          <h3 className="font-heading text-xl sm:text-2xl text-white mb-3">
            Need Help Choosing the Right Insurance?
          </h3>
          <p className="font-body text-sm text-white/70 mb-6 max-w-lg mx-auto">
            Our expert advisors can help you find the perfect coverage for your
            needs. Get a free, no-obligation consultation.
          </p>
          <Link
            href="/#quote"
            className="inline-flex items-center justify-center font-body font-semibold rounded-full px-7 py-3 text-sm bg-cream text-charcoal hover:bg-white transition-all duration-300"
          >
            Get Your Free Quote
          </Link>
        </div>
      </motion.div>

      {/* JSON-LD Schema for Article, FAQPage, and BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: article.title,
                description: article.metaDescription,
                image: article.image,
                author: {
                  "@type": "Organization",
                  name: article.author.name,
                },
                publisher: {
                  "@type": "Organization",
                  name: "Growth Edge Insurance Advisory",
                  url: "https://growthedge.in",
                },
                datePublished: article.publishedDate,
                dateModified: article.publishedDate,
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://growthedge.in/blog/${article.slug}`,
                },
              },
              ...(article.faqs.length > 0
                ? [
                    {
                      "@type": "FAQPage",
                      mainEntity: article.faqs.map((faq) => ({
                        "@type": "Question",
                        name: faq.question,
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: faq.answer,
                        },
                      })),
                    },
                  ]
                : []),
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://growthedge.in",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: "https://growthedge.in/#blog",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: article.title,
                    item: `https://growthedge.in/blog/${article.slug}`,
                  },
                ],
              },
            ],
          }),
        }}
      />
    </article>
  );
}
