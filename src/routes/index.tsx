import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AISection from "@/components/landing/AISection";
import ScreenshotsSection from "@/components/landing/ScreenshotsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import MetricsSection from "@/components/landing/MetricsSection";
import TrustSection from "@/components/landing/TrustSection";
import DownloadSection from "@/components/landing/DownloadSection";
import Footer from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AISection />
      <ScreenshotsSection />
      <HowItWorksSection />
      <MetricsSection />
      <TrustSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
