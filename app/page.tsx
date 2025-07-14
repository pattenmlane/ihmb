import Hero from "./components/Hero";
import CTAButtons from "./components/CTAButtons";
import ValueProps from "./components/ValueProps"; // Renamed from FeatureGrid

import HowItWorks from "./components/HowItWorks";
import AppMockupCarousel from "./components/AppMockupCarousel";
import TrustAndSafety from "./components/TrustAndSafety";
import SocialProof from "./components/SocialProof";
import FAQ from "./components/FAQ";
import Waitlist from "./components/Waitlist";
import PageFooter from "./components/PageFooter";
import TopNav from "./components/TopNav";

export default function LandingPage() {
  return (
    <>
      {/* The new nav goes outside the main container for full-width background */}
      <TopNav /> 
      <main className="container mx-auto px-4">
        <Hero />
        <CTAButtons />
        {/* This is the order from your checklist */}
        <ValueProps />
        <HowItWorks />
        <AppMockupCarousel />
        <TrustAndSafety />
        <SocialProof />
        {/* Pricing Teaser can be a simple component or part of another section */}
        <FAQ />
        <Waitlist />
      </main>
      <PageFooter />
    </>
  );
}
