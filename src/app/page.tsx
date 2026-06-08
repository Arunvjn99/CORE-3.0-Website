"use client";

import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThemeTransition from "@/components/ThemeTransition";

const DashboardSection = dynamic(() => import("@/components/DashboardSection"), { ssr: false });
const AISection = dynamic(() => import("@/components/AISection"), { ssr: false });
const ReadinessSection = dynamic(() => import("@/components/ReadinessSection"), { ssr: false });
const EnrollmentSection = dynamic(() => import("@/components/EnrollmentSection"), { ssr: false });
const WhiteLabelSection = dynamic(() => import("@/components/WhiteLabelSection"), { ssr: false });
const TransactionsSection = dynamic(() => import("@/components/TransactionsSection"), { ssr: false });
const TrustSection = dynamic(() => import("@/components/TrustSection"), { ssr: false });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: false });

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <ThemeTransition>
        <HeroSection />
        <DashboardSection />
        <AISection />
        <ReadinessSection />
        <EnrollmentSection />
        <WhiteLabelSection />
        <TransactionsSection />
        <TrustSection />
        <CTASection />
      </ThemeTransition>
    </>
  );
}
