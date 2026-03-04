"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/content";
import Button from "@/components/ui/Button";

export default function ExpertTips() {
  const { expertTips } = siteContent;

  return (
    <section id="blog" className="relative bg-cream text-stone-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32"
      >
        {/* Eyebrow label */}
        <div className="flex items-center gap-2 justify-center mb-4">
          <span className="w-2 h-2 rounded-full bg-olive" />
          <span className="font-body text-xs font-semibold text-olive uppercase tracking-[0.2em]">
            Blog Posts
          </span>
        </div>

        {/* Section heading */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-stone-800 text-center mb-12 sm:mb-16">
          Expert Tips & Insights
        </h2>

        {/* Blog cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {expertTips.map((tip, index) => (
            <motion.article
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group"
            >
              <Link href={tip.href} className="block">
                {/* Image */}
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-5 border border-edge">
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Category badge */}
                <span className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-olive uppercase tracking-wider mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive" />
                  {tip.category}
                </span>

                {/* Title */}
                <h3 className="font-heading text-lg sm:text-xl text-stone-800 mb-2 group-hover:text-olive transition-colors duration-300 leading-snug">
                  {tip.title}
                </h3>

                {/* Excerpt */}
                <p className="font-body text-sm text-muted leading-relaxed mb-3">
                  {tip.excerpt}
                </p>

                {/* Read more */}
                <span className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-stone-800 group-hover:gap-2.5 transition-all duration-300">
                  Read More <ArrowRight size={14} />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Button variant="outline" href="#blog">
            View More Blog
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
