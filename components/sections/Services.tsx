"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/content";
import Button from "@/components/ui/Button";
import ServiceDrawer from "@/components/sections/ServiceDrawer";
import type { ServiceItem } from "@/types/content";

export default function Services() {
  const { services } = siteContent;
  const featured = services.find((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = (service: ServiceItem) => {
    setActiveService(service);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setActiveService(null);
  };

  return (
    <section id="services" className="relative bg-cream text-stone-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="px-6 sm:px-10 lg:px-14 py-16 sm:py-24 lg:py-32"
      >
        {/* Eyebrow label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-olive" />
          <span className="font-body text-xs font-semibold text-olive uppercase tracking-[0.2em]">
            Our Services
          </span>
        </div>

        {/* Section heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-stone-800 max-w-lg">
            Coverage That Works For You
          </h2>
        </div>

        {/* Photo-driven masonry grid */}
        {/* Top row: featured (2/3) + first two small cards stacked (1/3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Featured large card */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => openDrawer(featured)}
              className="group relative md:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden h-[300px] md:h-[400px] lg:h-full lg:min-h-[520px] cursor-pointer"
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="font-heading text-2xl sm:text-3xl text-white mb-4">
                  {featured.title}
                </h3>
                <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-white/90 bg-olive px-5 py-2.5 rounded-full group-hover:bg-olive-dark transition-colors">
                  Learn More <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          )}

          {/* First two small cards — stack beside featured on lg */}
          {rest.slice(0, 2).map((service, index) => (
            <div
              key={service.title}
              onClick={() => openDrawer(service)}
              className="group relative rounded-2xl overflow-hidden h-[240px] sm:h-[280px] lg:h-auto cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-lg sm:text-xl text-white mb-1">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 font-body text-sm text-white/80 group-hover:text-white transition-colors">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom row: remaining cards evenly distributed */}
        {rest.length > 2 && (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 mt-5`}>
            {rest.slice(2).map((service, index) => (
              <div
                key={service.title}
                onClick={() => openDrawer(service)}
                className="group relative rounded-2xl overflow-hidden h-[240px] sm:h-[280px] cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 2) * 0.1, duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading text-lg sm:text-xl text-white mb-1">
                      {service.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 font-body text-sm text-white/80 group-hover:text-white transition-colors">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Service detail drawer */}
      <ServiceDrawer
        service={activeService}
        open={drawerOpen}
        onClose={closeDrawer}
      />
    </section>
  );
}
