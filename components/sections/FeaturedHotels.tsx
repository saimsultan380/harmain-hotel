"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import HotelCard from "@/components/ui/HotelCard";

const FEATURED_HOTELS = [
  {
    id: "raffles-makkah",
    name: "Raffles Makkah Palace",
    distance: "50m to Haram",
    price: "From $850",
    stars: 5,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200"
  },
  {
    id: "fairmont-makkah",
    name: "Makkah Clock Royal Tower",
    distance: "100m to Haram",
    price: "From $650",
    stars: 5,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200"
  },
  {
    id: "oberoi-madinah",
    name: "The Oberoi Madinah",
    distance: "10m to Masjid an-Nabawi",
    price: "From $900",
    stars: 5,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200"
  },
  {
    id: "dar-al-tawqid",
    name: "Dar Al Tawhid InterContinental",
    distance: "20m to Haram",
    price: "From $750",
    stars: 5,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200"
  }
];

export default function FeaturedHotels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setProgress(0);
      return;
    }
    setProgress(scrollLeft / maxScroll);
  };

  const slide = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    
    // Find the first slide element to get its exact width
    const firstSlide = containerRef.current.querySelector(".hotel-slide");
    if (!firstSlide) return;
    
    const slideWidth = (firstSlide as HTMLElement).offsetWidth;
    const gap = 32; // gap-8 in Tailwind is 2rem = 32px
    
    const scrollAmount = direction === "left" ? -(slideWidth + gap) : (slideWidth + gap);
    containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <section className="bg-luxury-cream py-24 overflow-hidden border-t border-[#E0D5C0]">
      {/* Header with Navigation Controls */}
      <div className="container mx-auto px-6 mb-16 flex flex-row items-end justify-between gap-6">
        <div>
          <span className="block text-xs uppercase tracking-widest text-luxury-gold mb-3 font-semibold tracking-[0.2em]">Selected Collections</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-luxury-black">
            Curated for the Sacred Journey
          </h2>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-4">
          <button 
            onClick={() => slide("left")} 
            className="w-12 h-12 rounded-full border border-luxury-black/10 hover:border-luxury-gold flex items-center justify-center text-luxury-black hover:text-luxury-gold transition-all duration-300 hover:scale-105"
            aria-label="Previous Hotel"
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => slide("right")} 
            className="w-12 h-12 rounded-full border border-luxury-black/10 hover:border-luxury-gold flex items-center justify-center text-luxury-black hover:text-luxury-gold transition-all duration-300 hover:scale-105"
            aria-label="Next Hotel"
          >
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Snap Scroll Snap-Mandatory Container */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar px-6 md:px-12 pb-4"
      >
        {FEATURED_HOTELS.map((hotel) => (
          <div 
            key={hotel.id} 
            className="hotel-slide snap-start snap-always flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[32vw] h-[500px] md:h-[600px]"
          >
            <div className="w-full h-full">
              <HotelCard hotel={hotel} layout="vertical" />
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Scroll Progress Bar */}
      <div className="container mx-auto px-6 mt-16 max-w-5xl">
        <div className="relative w-full h-[1px] bg-luxury-black/15">
          <div 
            className="absolute top-[-1px] left-0 h-[3px] bg-luxury-gold origin-left transition-all duration-300"
            style={{ width: `${Math.max(10, progress * 100)}%` }} // Minimum 10% width for visual weight on start
          />
        </div>
        <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-luxury-black/50 mt-3 font-semibold">
          <span>01 / Begin Selection</span>
          <span>04 / Complete View</span>
        </div>
      </div>
    </section>
  );
}
