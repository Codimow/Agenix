import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { MouseTrail } from "@/components/ui/mouse-trail";
import { ParticlesEffect } from "@/components/ui/particles";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MouseTrail />
      <ParticlesEffect />
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}