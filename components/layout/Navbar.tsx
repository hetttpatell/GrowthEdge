"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { siteContent } from "@/data/content";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { navLinks } = siteContent;
  const regularLinks = navLinks.filter((link) => !link.isButton);
  const ctaLink = navLinks.find((link) => link.isButton);

  const resolveHref = (href: string) => {
    if (!isHome && href.startsWith("#")) {
      return `/${href}`;
    }
    return href;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const handleMobileLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    closeMobileMenu();

    const isAnchor = href.startsWith("#");
    const targetId = isAnchor ? href.replace("#", "") : null;

    // Give the menu time to unmount before scrolling or navigating
    setTimeout(() => {
      if (isAnchor) {
        if (pathname === "/") {
          document.getElementById(targetId!)?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = `/${href}`;
        }
      } else {
        window.location.href = href;
      }
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync body overflow with menu state
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 animate-nav-slide-down ${isScrolled || !isHome ? "top-0 bg-cream/60 backdrop-blur-md shadow-sm" : "top-2 bg-transparent"}`}
      >
        <div className="px-6 sm:px-10 lg:px-14">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 relative z-10">
              <Image src="/Growth Edge logo.png" alt="Growth Edge Logo" width={50} height={50} className="rounded-md" priority />
              <span className={`font-heading text-xl sm:text-2xl transition-colors duration-300 ${isScrolled || !isHome ? "text-stone-800" : "text-white"}`}>Growth Edge</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {regularLinks.map((link) => (
                <Link
                  key={link.label}
                  href={resolveHref(link.href)}
                  className={`font-body text-sm font-medium transition-colors duration-300 ${isScrolled || !isHome ? "text-stone-800/70 hover:text-stone-800" : "text-white/80 hover:text-white"}`}
                >
                  {link.label}
                </Link>
              ))}
              {ctaLink && (
                <Link
                  href={resolveHref(ctaLink.href)}
                  className={`font-body text-sm font-semibold px-6 py-2.5 rounded-full border-2 transition-all duration-300 ${isScrolled || !isHome ? "border-charcoal/20 text-stone-800 hover:border-charcoal hover:bg-charcoal hover:text-white" : "border-white/40 text-white hover:border-white hover:bg-white hover:text-stone-800"}`}
                >
                  {ctaLink.label}
                </Link>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 transition-colors relative z-10 ${isScrolled || !isHome ? "text-stone-800" : "text-white"}`}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              // pointer-events:none during exit so it can't block clicks/scrolls
              style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
              className="fixed inset-0 bg-black/30 z-60 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-75 bg-cream z-70 lg:hidden shadow-2xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-2 -ml-1.5">
                    <Image src="/Growth Edge logo.png" alt="Growth Edge Logo" width={50} height={50} className="rounded-md" priority />
                    <span className="font-heading text-xl text-stone-800">Growth Edge</span>
                  </div>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-stone-800 hover:text-olive transition-colors" aria-label="Close menu">
                    <X size={24} />
                  </button>
                </div>
                <nav className="flex flex-col gap-1">
                  {regularLinks.map((link, index) => (
                    <motion.div key={link.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * index + 0.1 }}>
                      <button
                        onClick={(e) => handleMobileLinkClick(e, link.href)}
                        className="w-full text-left font-body text-base font-medium text-stone-800 hover:text-olive transition-colors py-3 border-b border-edge"
                      >
                        {link.label}
                      </button>
                    </motion.div>
                  ))}
                  {ctaLink && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-6">
                      <button
                        onClick={(e) => handleMobileLinkClick(e, ctaLink.href)}
                        className="block w-full text-center font-body text-sm font-semibold px-6 py-3 rounded-full bg-charcoal text-white"
                      >
                        {ctaLink.label}
                      </button>
                    </motion.div>
                  )}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
