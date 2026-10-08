import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
