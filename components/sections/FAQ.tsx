"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { siteContent } from "@/data/content";

export default function FAQ() {
  const { faqs } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-cream text-stone-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32"
      >
        {/* Eyebrow label */}
        <div className="flex items-center gap-2 justify-center mb-4">
          <span className="w-2 h-2 rounded-full bg-olive" />
          <span className="font-body text-xs font-semibold text-olive uppercase tracking-[0.2em]">
            FAQ
          </span>
        </div>

        {/* Section heading */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-stone-800 text-center mb-12 sm:mb-16 max-w-2xl mx-auto leading-snug">
          Everything You Need to Know About Health Insurance
        </h2>

        {/* Accordion items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-edge">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
              >
                <span className="font-body text-base sm:text-lg font-medium text-stone-800 pr-8 group-hover:text-olive transition-colors">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full border border-edge flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-charcoal text-white border-charcoal rotate-45"
                      : "bg-transparent text-stone-800"
                  }`}
                >
                  <Plus size={16} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-sm sm:text-base text-muted leading-relaxed pb-6 pr-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
