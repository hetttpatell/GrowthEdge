"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/content";
import Button from "@/components/ui/Button";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section id="home" className="p-2">
      <div className="relative min-h-[92vh] sm:min-h-[95vh] md:min-h-[96vh] lg:min-h-[97vh] flex items-end overflow-hidden rounded-lg sm:rounded-lg border border-charcoal/8">
        {/* Full-width background image */}
        <div className="absolute inset-0">
          <Image
            src={hero.backgroundImage}
            alt="Family enjoying life together"
            fill
            className="object-cover object-[65%_20%] sm:object-[60%_25%] md:object-center"
            priority
            sizes="100vw"
          />
          {/* Subtle top gradient for nav readability */}
          {/* Mobile: full-width soft vignette at top */}
          <div className="absolute inset-x-0 top-0 h-48 md:hidden pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.34) 0%, rgba(0,0,0,0.18) 25%, rgba(0,0,0,0.07) 55%, transparent 100%)' }} />
          {/* Desktop: right-biased gradient where nav actions sit */}
          <div className="absolute top-0 right-0 h-44 w-[70%] hidden md:block pointer-events-none" style={{ background: 'radial-gradient(ellipse 120% 100% at 90% 0%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.10) 40%, transparent 80%)' }} />
        </div>

        {/* Content — left-aligned text overlay */}
        <div className="relative z-10 px-4 sm:px-8 lg:px-12 pt-28 pb-10 sm:pb-14 w-full">
          <div className="max-w-2xl">
            {/* Tagline pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="mb-6 sm:mb-8"
            >
              <span className="inline-flex items-center gap-2 font-body text-xs sm:text-sm text-cream-dark bg-neutral-800/30 backdrop-blur-sm rounded-full px-4 py-2 border border-charcoal/8">
                {hero.tagline}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight"
            >
              {hero.headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < hero.headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* Primary CTA — styled with arrow circle to match reference */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-block"
              >
                {hero.primaryCTA.href.startsWith("http") ? (
                  <a
                    href={hero.primaryCTA.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 font-body font-semibold text-sm sm:text-base bg-white text-stone-800 rounded-full pl-6 sm:pl-8 pr-1.5 sm:pr-2 py-1.5 sm:py-2 transition-colors duration-300"
                  >
                    {hero.primaryCTA.label}
                    <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-charcoal/80">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </span>
                  </a>
                ) : (
                  <Link
                    href={hero.primaryCTA.href}
                    className="inline-flex items-center gap-2.5 font-body font-semibold text-sm sm:text-base bg-white text-stone-800 rounded-full pl-6 sm:pl-8 pr-1.5 sm:pr-2 py-1.5 sm:py-2 transition-colors duration-300"
                  >
                    {hero.primaryCTA.label}
                    <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-charcoal/80">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </span>
                  </Link>
                )}
              </motion.div>

              {/* Secondary CTA */}
              <Button variant="outline" size="lg" href={hero.secondaryCTA.href} className="text-white border-white border-[1px] hover:bg-white/10 hover:border-white/10">
                {hero.secondaryCTA.label}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
