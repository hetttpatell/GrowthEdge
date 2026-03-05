import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { SITE_URL, SITE_NAME, seo } from "@/lib/seo";
import SmoothAnchorScroll from "@/components/SmoothAnchorScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4A5D4A",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: seo.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: "Sarthak Shukla", url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: "/og/home",
        width: 1200,
        height: 630,
        alt: "Growth Edge — Insurance Advisory in India",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/og/home"],
    creator: "@growthedge",
    site: "@growthedge",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  category: "Insurance",

  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "geo.position": "23.0225;72.5714",
    ICBM: "23.0225, 72.5714",
    "content-language": "en-IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${poppins.variable} antialiased`}>
        <SmoothAnchorScroll />
        {children}
        {/* Auto-show / auto-hide scrollbar on scroll */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t;function h(){document.body.classList.add('is-scrolling');clearTimeout(t);t=setTimeout(function(){document.body.classList.remove('is-scrolling')},1200)}window.addEventListener('scroll',h,{passive:true});document.addEventListener('scroll',h,{passive:true,capture:true})})();`,
          }}
        />
      </body>
    </html>
  );
}
