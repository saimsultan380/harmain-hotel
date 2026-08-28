"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HotelCard from "@/components/ui/HotelCard";

const HOTELS = [
  {
    id: "oberoi-madinah",
    name: "The Oberoi Madinah",
    distance: "10m to Masjid an-Nabawi",
    price: "From $900",
    stars: 5,
    tagline: "Steps away from the Prophet's Mosque with unparalleled service.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200"
  },
  {
    id: "dar-al-taqwa",
    name: "Dar Al Taqwa Hotel",
    distance: "50m to Masjid an-Nabawi",
    price: "From $550",
    stars: 5,
    tagline: "Authentic Madinah hospitality right at the Haram courtyard.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200"
  }
];

export default function MadinahPage() {
  return (
    <main className="bg-luxury-cream min-h-screen pb-32">
      {/* Hero */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <Image 
          src="https://images.unsplash.com/photo-1591508212170-4fc75d507b9a?q=80&w=2940&auto=format&fit=crop"
          alt="Madinah"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-6xl md:text-8xl font-serif text-white">Madinah</h1>
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
        </div>
      </section>
    </main>
  );
}
