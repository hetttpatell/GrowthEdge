"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Cal, { getCalApi } from "@calcom/embed-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <>
      <Navbar />

      <main className="bg-cream/95 min-h-screen pt-24 sm:pt-28 pb-16">
        {/* Back link */}
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-stone-800 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* Advisor intro section */}
        <section className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start"
          >
            {/* Left — Portrait photo */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[3/4] rounded-2xl overflow-hidden border border-edge shadow-sm">
                <Image
                  src="/sarthak_shukla.png"
                  alt="Sarthak Shukla — Insurance Advisor & Founder, Growth Edge"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 360px, 320px"
                  priority
                />
              </div>
            </div>

            {/* Right — Identity + contact + details */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-stone-800">
                Sarthak Shukla
              </h1>

              <p className="mt-2 font-body text-sm font-semibold text-olive uppercase tracking-wider">
                Insurance Advisor · Founder, Growth Edge
              </p>

              <p className="mt-5 font-body text-base sm:text-lg text-muted leading-relaxed max-w-lg">
                Sarthak helps individuals and families navigate the complex world of insurance — making it simple, transparent, and stress-free. With hands-on experience across life, health, and motor insurance, he provides honest, jargon-free advice so you can protect what matters most.
              </p>

              {/* Contact details */}
              <div className="mt-8 space-y-3.5 w-full max-w-sm">
                <a
                  href="mailto:info.growthedgeinvestment@gmail.com"
                  className="flex items-center gap-3 font-body text-sm text-muted hover:text-olive transition-colors"
                >
                  <Mail size={16} className="shrink-0 text-olive" />
                  info.growthedgeinvestment@gmail.com
                </a>
                <a
                  href="tel:+918306934343"
                  className="flex items-center gap-3 font-body text-sm text-muted hover:text-olive transition-colors"
                >
                  <Phone size={16} className="shrink-0 text-olive" />
                  +91 83069 34343
                </a>
                <span className="flex items-center gap-3 font-body text-sm text-muted">
                  <MapPin size={16} className="shrink-0 text-olive" />
                  Ahmedabad, Gujarat, India
                </span>
              </div>

              {/* Inline CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="#schedule"
                  className="inline-flex items-center justify-center font-body font-semibold text-sm px-7 py-3 rounded-full bg-charcoal text-white hover:bg-dark transition-colors"
                >
                  Book a Free Consultation
                </a>
                <a
                  href="tel:+918306934343"
                  className="inline-flex items-center justify-center font-body font-semibold text-sm px-7 py-3 rounded-full border-2 border-charcoal/20 text-stone-800 hover:border-charcoal hover:bg-charcoal/5 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Calendar embed section */}
        <section id="schedule" className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 mt-16 sm:mt-20 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl border border-edge p-6 sm:p-10 shadow-sm"
          >
            <h2 className="font-heading text-2xl sm:text-3xl text-stone-800">
              Schedule a Conversation
            </h2>
            <p className="mt-3 font-body text-sm text-muted leading-relaxed max-w-xl">
              Pick a time that works for you. No obligations — just a
              friendly conversation about your insurance needs.
            </p>

            <div className="mt-8 rounded-xl overflow-hidden border border-edge min-h-[480px]">
              <Cal
                namespace="30min"
                calLink="nityam-dixit-opchjp/30min"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "light" }}
              />
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
