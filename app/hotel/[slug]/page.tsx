"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MapPin, Wifi, Coffee } from "lucide-react";

const HOTEL_DETAILS = {
  name: "Raffles Makkah Palace",
  distance: "50m to Masjid al-Haram",
  price: "$850",
  stars: 5,
  description: "Raffles Makkah Palace is an exclusive all-suite hotel with breathtaking views of the Grand Mosque and the Kaaba, offering 24-hour butler service for every suite. Drawing inspiration from the heritage and culture of the region, it provides a luxurious sanctuary for pilgrims.",
  heroImage: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2000",
  gallery: [
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200",
  ]
};

export default function HotelDetailPage() {
  const params = useParams();
  const heroImageRef = useRef<HTMLImageElement>(null);
  const stickyPanelRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          y: -150,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      }
      
      if (stickyPanelRef.current) {
        gsap.fromTo(stickyPanelRef.current, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            scrollTrigger: {
              trigger: ".content-section",
              start: "top 80%",
            }
          }
        );
      }
    }
  }, []);

  return (
    <main className="bg-luxury-cream min-h-screen">
      {/* Hero */}
      <section className="hero-section relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            ref={heroImageRef}
            src={HOTEL_DETAILS.heroImage}
            alt={HOTEL_DETAILS.name}
            fill
            className="object-cover scale-110 origin-top"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="absolute bottom-0 left-0 w-full p-12 md:p-24 z-20">
          <div className="flex space-x-1 mb-4">
            {[...Array(HOTEL_DETAILS.stars)].map((_, i) => (
              <span key={i} className="w-2 h-2 bg-luxury-gold rounded-full inline-block"></span>
            ))}
          </div>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8">{HOTEL_DETAILS.name}</h1>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 right-12 z-20 flex flex-col items-center">
          <span className="text-white text-xs uppercase tracking-widest mb-4 rotate-90 origin-right translate-x-[20px]">Scroll</span>
          <div className="w-[1px] h-24 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-luxury-gold animate-[scrollDown_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="w-full bg-luxury-black overflow-x-auto hide-scrollbar border-b border-luxury-gold/20">
        <div className="flex w-max">
          {HOTEL_DETAILS.gallery.map((img, i) => (
            <div 
              key={i} 
              className="relative w-[25vw] h-[25vw] md:w-[20vw] md:h-[20vw] min-w-[150px] min-h-[150px] cursor-pointer group"
              onClick={() => setActiveImage(img)}
            >
              <Image 
                src={img} 
                alt="Gallery image" 
                fill 
                className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Content Split */}
      <section className="content-section container mx-auto px-6 py-24 flex flex-col lg:flex-row gap-16 relative">
        
        {/* Left 65% */}
        <div className="w-full lg:w-[65%]">
          
          <div className="mb-16 border-l-4 border-luxury-gold pl-8 py-2">
            <p className="text-2xl font-serif text-luxury-black mb-2">{HOTEL_DETAILS.distance}</p>
            <p className="text-gray-500 uppercase tracking-widest text-sm">Proximity Highlight</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-serif text-luxury-black mb-8">About the Hotel</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {HOTEL_DETAILS.description}
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-serif text-luxury-black mb-8">Key Features</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <Wifi size={24} className="text-luxury-gold stroke-[1.5]" />
                <span className="uppercase tracking-widest text-sm text-luxury-black">High-Speed WiFi</span>
              </div>
              <div className="flex items-center space-x-4">
                <Coffee size={24} className="text-luxury-gold stroke-[1.5]" />
                <span className="uppercase tracking-widest text-sm text-luxury-black">24/7 Room Service</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin size={24} className="text-luxury-gold stroke-[1.5]" />
                <span className="uppercase tracking-widest text-sm text-luxury-black">Haram View</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right 35% Sticky Booking Panel */}
        <div className="w-full lg:w-[35%] relative">
          <div 
            ref={stickyPanelRef}
            className="sticky top-[120px] bg-white border border-[#E0D5C0] p-8 shadow-2xl"
          >
            <div className="flex justify-between items-baseline border-b border-luxury-gold/30 pb-6 mb-6">
              <span className="text-4xl font-serif text-luxury-black">{HOTEL_DETAILS.price}</span>
              <span className="uppercase tracking-widest text-xs text-gray-400">per night</span>
            </div>

            <div className="space-y-6 mb-8">
              <div className="border-b border-gray-200 pb-2 focus-within:border-luxury-gold transition-colors">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Check In - Check Out</label>
                <div className="flex justify-between items-center text-luxury-black font-serif text-lg">
                  <input type="date" className="bg-transparent focus:outline-none cursor-pointer w-[45%]" />
                  <span className="text-luxury-gold">-</span>
                  <input type="date" className="bg-transparent focus:outline-none cursor-pointer w-[45%] text-right" />
                </div>
              </div>

              <div className="border-b border-gray-200 pb-2 focus-within:border-luxury-gold transition-colors">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Guests</label>
                <select className="w-full bg-transparent text-luxury-black font-serif text-lg focus:outline-none cursor-pointer appearance-none">
                  <option>1 Room, 2 Adults</option>
                  <option>1 Room, 3 Adults</option>
                  <option>2 Rooms, 4 Adults</option>
                </select>
              </div>
            </div>

            <Link 
              href="/booking"
              className="block w-full text-center bg-luxury-black text-luxury-gold py-5 uppercase tracking-widest text-sm hover:bg-luxury-gold hover:text-luxury-black transition-colors"
            >
              Reserve Now
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center cursor-zoom-out"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-[90vw] h-[90vh]">
            <Image src={activeImage} alt="Enlarged gallery view" fill className="object-contain" />
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}} />
    </main>
  );
}
