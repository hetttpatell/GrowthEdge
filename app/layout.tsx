import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, Inter, Poppins } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Growth Edge | Insurance Advisory",
  description:
    "Expert insurance advisory services by Sarthak Shukla. Personalized coverage for life, health, motor, home, and business insurance.",
  keywords: ["insurance", "advisory", "life insurance", "health insurance", "Growth Edge", "Sarthak Shukla"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${dmSerif.variable} ${dmSans.variable} ${inter.variable} ${poppins.variable} antialiased`}>
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
