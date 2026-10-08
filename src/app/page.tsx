import { AboutSection } from "@/components/AboutSection";
import { CtaCommunitySection } from "@/components/CtaCommunitySection";
import { EventsSection } from "@/components/EventsSection";
import { Footer } from "@/components/Footer";
import { FoundersSection } from "@/components/FoundersSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <FoundersSection />
        <CtaCommunitySection />
      </main>
      <Footer />
    </div>
  );
}
