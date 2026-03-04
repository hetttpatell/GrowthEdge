"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

export default function Intro() {
  const { intro } = siteContent;

  return (
    <section id="about" className="relative bg-cream text-stone-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 lg:py-36"
      >
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-olive" />
          <span className="font-body text-xs font-semibold text-olive uppercase tracking-[0.2em]">
            Why We Exist
          </span>
        </motion.div>

        {/* Large left-aligned headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-body text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-stone-800 text-left max-w-5xl leading-snug"
        >
          {intro.headline}
        </motion.h2>

        {/* Two-column body text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl"
        >
          <p className="font-body text-base text-muted leading-relaxed">
            {intro.leftText}
          </p>
          <p className="font-body text-base text-muted leading-relaxed">
            {intro.rightText}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
