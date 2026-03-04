"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import Button from "@/components/ui/Button";

/*
 * Responsive pixelated dissolve borders — 3 rows each.
 * Columns: 10 (mobile) → 14 (sm/md tablet) → 21 (lg+)
 * Row 1 (edge): sparse  |  Row 2: medium  |  Row 3 (center-adjacent): dense
 */

// ── Large (20 cols) ──
const lgTop = [
  [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0],
  [1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
];
const lgBottom = [
  [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
];

// ── Tablet (14 cols) ──
const mdTop = [
  [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
  [0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
];
const mdBottom = [
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
  [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
];

// ── Mobile (10 cols) ──
const smTop = [
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
  [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
];
const smBottom = [
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
];

function PixelBorder({ sm, md, lg }: { sm: { cols: number; pattern: number[][] }; md: { cols: number; pattern: number[][] }; lg: { cols: number; pattern: number[][] } }) {
  return (
    <>
      {/* Mobile */}
      <div className="grid w-full sm:hidden" style={{ gridTemplateColumns: `repeat(${sm.cols}, 1fr)` }} aria-hidden="true">
        {sm.pattern.flat().map((cell, i) => (
          <div key={i} className={`aspect-square ${cell ? "bg-[#3c3933]" : "bg-cream/95"}`} />
        ))}
      </div>
      {/* Tablet */}
      <div className="hidden sm:grid lg:hidden w-full" style={{ gridTemplateColumns: `repeat(${md.cols}, 1fr)` }} aria-hidden="true">
        {md.pattern.flat().map((cell, i) => (
          <div key={i} className={`aspect-square ${cell ? "bg-[#3c3933]" : "bg-cream/95"}`} />
        ))}
      </div>
      {/* Desktop */}
      <div className="hidden lg:grid w-full" style={{ gridTemplateColumns: `repeat(${lg.cols}, 1fr)` }} aria-hidden="true">
        {lg.pattern.flat().map((cell, i) => (
          <div key={i} className={`aspect-square ${cell ? "bg-[#3c3933]" : "bg-cream/95"}`} />
        ))}
      </div>
    </>
  );
}

export default function CTABlock() {
  const { cta } = siteContent;

  return (
    <section id="quote" className="bg-cream/95 px-4 sm:px-5 lg:px-6">
      {/* Top pixel dissolve border */}
      <div className="rounded-t-lg overflow-hidden">
        <PixelBorder sm={{ cols: 10, pattern: smTop }} md={{ cols: 14, pattern: mdTop }} lg={{ cols: 20, pattern: lgTop }} />
      </div>

      {/* Dark content area */}
      <div className="bg-[#3c3933] py-20 sm:py-28 lg:py-36">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl text-cream leading-tight"
          >
            {cta.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 font-body text-base sm:text-lg text-cream/70 max-w-xl mx-auto leading-relaxed"
          >
            {cta.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg" href={cta.primaryCTA.href} dark>
              {cta.primaryCTA.label}
            </Button>
            <Button variant="outline" size="lg" href={cta.secondaryCTA.href} dark>
              {cta.secondaryCTA.label}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom pixel dissolve border */}
      <div className="rounded-b-lg overflow-hidden">
        <PixelBorder sm={{ cols: 10, pattern: smBottom }} md={{ cols: 14, pattern: mdBottom }} lg={{ cols: 20, pattern: lgBottom }} />
      </div>
    </section>
  );
}
