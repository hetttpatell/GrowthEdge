import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Benefits";
import Services from "@/components/sections/Services";
import Trust from "@/components/sections/Trust";
import ExpertTips from "@/components/sections/ExpertTips";
import FAQ from "@/components/sections/FAQ";
import CTABlock from "@/components/sections/CTABlock";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <Trust />
      <ExpertTips />
      <FAQ />
      <CTABlock />
      <Footer />
    </>
  );
}
