import Navigation from "@/components/Navigation";
import VideoBackground from "@/components/VideoBackground";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TechnologySection from "@/components/TechnologySection";
import ContactSection from "@/components/ContactSection";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="relative bg-transparent min-h-screen">
      <SmoothScroll />
      {/* Cinematic cosmic video — fixed behind entire site, zooms on scroll */}
      <VideoBackground />
      <Navigation />
      <div className="relative z-10" style={{ textShadow: "0 2px 20px rgba(5,10,24,0.8)" }}>
        <HeroSection />
        <MarqueeTicker />
        <AboutSection />
        <PortfolioSection />
        <TechnologySection />
        <ContactSection />
      </div>
    </main>
  );
}
