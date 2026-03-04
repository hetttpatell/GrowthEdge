"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/content";

export default function Trust() {
  const { trust } = siteContent;

  return (
    <section className="relative bg-cream text-stone-800">
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
            Why Us
          </span>
        </div>

        {/* Centered heading */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-stone-800 text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {trust.headline}
        </h2>

        {/* Large lifestyle image */}
        <div className="relative w-full aspect-16/7 rounded-2xl overflow-hidden mb-12 sm:mb-16">
          <Image
            src={trust.image}
            alt="Families trusting Growth Edge"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Stats carousel / row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {trust.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-3xl sm:text-4xl md:text-5xl text-stone-800">
                {stat.value}
              </div>
              <div className="font-body text-sm text-muted mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
