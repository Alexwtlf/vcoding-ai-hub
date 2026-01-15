import { useRef } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WaitlistForm from "@/components/landing/WaitlistForm";
import SocialProof from "@/components/landing/SocialProof";
import FeaturesSection from "@/components/landing/FeaturesSection";
import MissionSection from "@/components/landing/MissionSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const waitlistRef = useRef<HTMLDivElement>(null);

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onJoinClick={scrollToWaitlist} />

      <main>
        {/* Hero + Waitlist Form combined in one visual section */}
        <div className="relative">
          <HeroSection />
          
          {/* Waitlist Form - positioned at bottom of hero */}
          <div 
            ref={waitlistRef}
            className="relative z-10 -mt-32 pb-8 px-4 sm:px-6 lg:px-8"
          >
            <WaitlistForm />
          </div>
        </div>

        <SocialProof />
        <FeaturesSection />
        <MissionSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
