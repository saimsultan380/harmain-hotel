import Hero from "@/components/sections/Hero";
import Destinations from "@/components/sections/Destinations";
import FeaturedHotels from "@/components/sections/FeaturedHotels";
import ProximityHighlight from "@/components/sections/ProximityHighlight";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-luxury-cream overflow-hidden">
      <Hero />
      <Destinations />
      <FeaturedHotels />
      <ProximityHighlight />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
