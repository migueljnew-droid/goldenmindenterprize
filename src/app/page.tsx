import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TechnologySection from "@/components/TechnologySection";
import ContactSection from "@/components/ContactSection";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="relative bg-[#050a18] min-h-screen">
      <SmoothScroll />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <TechnologySection />
      <ContactSection />
    </main>
  );
}
