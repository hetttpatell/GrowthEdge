"use client";

import { useEffect, useState } from "react";
import { Drawer } from "vaul";
import Image from "next/image";
import { Check } from "lucide-react";
import type { ServiceItem } from "@/types/content";
import Button from "@/components/ui/Button";

interface ServiceDrawerProps {
  service: ServiceItem | null;
  open: boolean;
  onClose: () => void;
}

function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [breakpoint]);
  return isDesktop;
}

export default function ServiceDrawer({
  service,
  open,
  onClose,
}: ServiceDrawerProps) {
  const isDesktop = useIsDesktop();

  if (!service) return null;

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(o) => !o && onClose()}
      direction={isDesktop ? "right" : "bottom"}
    >
      <Drawer.Portal>
        <Drawer.Overlay
          className="fixed inset-0 bg-black/50 z-50"
          onClick={onClose}
        />
        <Drawer.Content
          className={
            isDesktop
              ? "fixed top-0 right-0 bottom-0 z-50 outline-none w-full max-w-lg"
              : "fixed bottom-0 left-0 right-0 z-50 outline-none"
          }
        >
          <div
            className={
              isDesktop
                ? "h-full bg-cream overflow-hidden flex flex-col shadow-2xl"
                : "mx-auto max-w-2xl rounded-t-2xl bg-cream overflow-hidden max-h-[85vh] flex flex-col"
            }
          >
            {/* Drag handle — only on mobile */}
            {!isDesktop && (
              <div className="flex justify-center pt-4 pb-2 shrink-0">
                <div className="w-10 h-1 rounded-full bg-stone-300" />
              </div>
            )}

            {/* Scrollable content */}
            <div className={`overflow-y-auto px-6 sm:px-8 flex-1 ${isDesktop ? "pt-6" : ""}`}>
              {/* Hero image */}
              <div
                className={`relative w-full rounded-xl overflow-hidden mb-6 ${
                  isDesktop ? "h-56" : "h-48 sm:h-56"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 672px) 100vw, 672px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>

              {/* Title */}
              <Drawer.Title className="font-heading text-2xl sm:text-3xl text-stone-800 mb-3">
                {service.title}
              </Drawer.Title>

              {/* Description */}
              <Drawer.Description className="font-body text-base text-muted leading-relaxed mb-6">
                {service.description}
              </Drawer.Description>

              {/* Highlights */}
              <div className="space-y-3 mb-4">
                <span className="font-body text-xs font-semibold text-olive uppercase tracking-[0.15em]">
                  What's included
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-body text-sm text-stone-700"
                    >
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-olive/10 flex items-center justify-center">
                        <Check size={12} className="text-olive" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky bottom CTA */}
            <div className="shrink-0 px-6 sm:px-8 py-5 border-t border-edge bg-cream">
              <div className="flex items-center gap-4">
                <Button variant="primary" size="md" href="#quote">
                  Get a Free Quote
                </Button>
                <button
                  onClick={onClose}
                  className="font-body text-sm text-muted hover:text-charcoal transition-colors cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
