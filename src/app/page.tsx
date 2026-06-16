"use client";

import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/new/Hero";
import DarkFeatures from "@/components/new/DarkFeatures";
import FeatureGrid from "@/components/new/FeatureGrid";
import MobileSection from "@/components/new/MobileSection";
import TrustSection from "@/components/new/TrustSection";
import CTASection from "@/components/new/CTASection";
import Footer from "@/components/new/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <main>
        <Hero />
        <DarkFeatures />
        <FeatureGrid />
        <MobileSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
