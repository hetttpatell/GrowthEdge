"use client";

import { useEffect } from "react";

/**
 * Intercepts clicks on hash-only anchor links and applies smooth scrolling.
 * This replaces global `scroll-behavior: smooth` which caused jarring
 * scroll animations on route changes (Next.js scrolls to top on navigation).
 *
 * Uses the CAPTURE phase so the handler fires before Next.js <Link> processes
 * the click (React delegates events on the root container in the bubble phase).
 */
export default function SmoothAnchorScroll() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Only handle same-page hash links like "#blog" or "/#blog"
      const isHashOnly = href.startsWith("#");
      const isSlashHash =
        href.startsWith("/#") && window.location.pathname === "/";

      if (!isHashOnly && !isSlashHash) return;

      const hash = isHashOnly ? href : href.slice(1); // "#blog"
      const target = document.querySelector(hash);
      if (!target) return;

      // Stop the event so Next.js <Link> doesn't also handle it
      e.preventDefault();
      e.stopPropagation();

      target.scrollIntoView({ behavior: "smooth" });

      // Update URL hash without triggering a scroll
      window.history.pushState(null, "", hash);
    }

    // Capture phase runs before React's bubble-phase delegation
    document.addEventListener("click", handleClick, { capture: true });
    return () =>
      document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
