import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { siteContent } from "@/data/content";

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer id="contact" className="relative bg-cream/95 text-stone-800">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl text-stone-800">
                Growth Edge
              </span>
            </Link>
            <p className="mt-4 font-body text-sm text-muted leading-relaxed max-w-sm">
              {footer.tagline}
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${footer.contactInfo.email}`}
                className="flex items-center gap-3 font-body text-sm text-muted hover:text-olive transition-colors"
              >
                <Mail size={16} className="shrink-0" />
                {footer.contactInfo.email}
              </a>
              <a
                href={`tel:${footer.contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 font-body text-sm text-muted hover:text-olive transition-colors"
              >
                <Phone size={16} className="shrink-0" />
                {footer.contactInfo.phone}
              </a>
              <span className="flex items-center gap-3 font-body text-sm text-muted">
                <MapPin size={16} className="shrink-0" />
                {footer.contactInfo.address}
              </span>
            </div>
          </div>

          {/* Link columns */}
          {footer.columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-body font-semibold text-sm text-stone-800 uppercase tracking-wider mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-muted hover:text-olive transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-edge">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted">
            {footer.copyright}
          </p>
          <div className="flex items-center gap-5">
            {footer.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                className="font-body text-xs text-muted hover:text-olive transition-colors capitalize"
                aria-label={social.platform}
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
