"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HotelCard from "@/components/ui/HotelCard";

const HOTELS = [
  {
    id: "raffles-makkah",
    name: "Raffles Makkah Palace",
    distance: "50m to Haram",
    price: "From $850",
    stars: 5,
    tagline: "An exclusive all-suite hotel with breathtaking views of the Grand Mosque.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200"
  },
  {
    id: "fairmont-makkah",
    name: "Makkah Clock Royal Tower",
    distance: "100m to Haram",
    price: "From $650",
    stars: 5,
    tagline: "Iconic luxury situated within the Abraj Al Bait complex.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200"
  },
  {
    id: "swissotel-makkah",
    name: "Swissôtel Makkah",
    distance: "150m to Haram",
    price: "From $450",
    stars: 5,
    tagline: "Contemporary Swiss design blending with Arabian hospitality.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200"
  }
];

export default function MakkahPage() {
  return (
    <main className="bg-luxury-cream min-h-screen pb-32">
      {/* Hero */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <Image 
          src="https://images.unsplash.com/photo-1565552645632-d725e8bfc16a?q=80&w=2070&auto=format&fit=crop"
          alt="Makkah"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-6xl md:text-8xl font-serif text-white">Makkah</h1>
      </section>

      {/* Filter Bar */}
      <div className="border-b border-luxury-gold/30 bg-white sticky top-[80px] md:top-[88px] z-30">
        <div className="container mx-auto px-6 py-4 flex flex-wrap gap-8 items-center text-xs md:text-sm uppercase tracking-widest text-luxury-black">
          <button className="hover:text-luxury-gold transition-colors">Star Rating</button>
          <button className="hover:text-luxury-gold transition-colors">Price Range</button>
          <button className="hover:text-luxury-gold transition-colors">Distance to Haram</button>
          <button className="hover:text-luxury-gold transition-colors">Amenities</button>
        </div>
      </div>

      {/* Listings */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col space-y-32">
          {HOTELS.map((hotel, index) => (
            <motion.div 
              key={hotel.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <HotelCard 
                hotel={hotel} 
                layout="horizontal" 
                reverse={index % 2 !== 0} 
              />
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-32 space-x-6 text-lg font-serif">
          <span className="border-b border-luxury-gold text-luxury-black pb-1 px-2 cursor-pointer">1</span>
          <span className="text-gray-400 hover:text-luxury-black transition-colors px-2 cursor-pointer">2</span>
          <span className="text-gray-400 hover:text-luxury-black transition-colors px-2 cursor-pointer">3</span>
        </div>
      </section>
    </main>
  );
}
