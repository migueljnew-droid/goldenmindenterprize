import Navigation from "@/components/Navigation";
import VideoBackground from "@/components/VideoBackground";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TechnologySection from "@/components/TechnologySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <VideoBackground /><Navigation />
      <main id="main-content" tabIndex={-1} className="site-content">
        <HeroSection /><MarqueeTicker /><PortfolioSection /><AboutSection /><TechnologySection /><ContactSection />
      </main>
    </>
  );
}
