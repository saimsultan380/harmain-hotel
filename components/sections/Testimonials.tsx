"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    quote: "An incredibly serene experience. Being just steps away from the Haram allowed us to focus entirely on our worship. The service was impeccable.",
    author: "Omar Al-Fayed",
    location: "Dubai, UAE",
    rating: 5,
    date: "3 days ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
  },
  {
    quote: "The level of luxury and attention to detail was exceptional. The perfect sanctuary after a long day of Umrah. The 24/7 butler service exceeded all expectations.",
    author: "Aisha Rahman",
    location: "London, UK",
    rating: 5,
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
  },
  {
    quote: "Unmatched convenience and elegance. We will certainly be booking through Haramain Hotels for our next Ziyarah. Highly recommended for international families!",
    author: "Tariq Mahmood",
    location: "Toronto, Canada",
    rating: 5,
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="bg-luxury-cream border-t border-[#E0D5C0] py-32 overflow-hidden flex flex-col items-center justify-center min-h-[650px] relative">
      <div className="container mx-auto px-6 max-w-4xl text-center relative">
        <div className="h-[380px] md:h-[320px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="absolute w-full flex flex-col items-center"
            >
              {/* Google Review Card Avatar & Stamp */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-luxury-gold shadow-md relative">
                  <Image 
                    src={TESTIMONIALS[currentIndex].avatar}
                    alt={TESTIMONIALS[currentIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Google Small Badge */}
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow border border-gray-100">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-2.3-4.53-6.16-4.53z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>
              </div>

              {/* Gold Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-luxury-gold text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl font-serif italic text-luxury-black leading-relaxed mb-6 max-w-2xl">
                "{TESTIMONIALS[currentIndex].quote}"
              </p>

              {/* Author & Verification Info */}
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-luxury-black/70 flex flex-col items-center">
                <span className="font-bold text-sm text-luxury-black mb-1">{TESTIMONIALS[currentIndex].author}</span>
                <div className="flex items-center space-x-2 text-[10px] text-gray-500">
                  <span>{TESTIMONIALS[currentIndex].location}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="text-luxury-gold">{TESTIMONIALS[currentIndex].date}</span>
                </div>
                <span className="text-[9px] text-[#4285F4] font-bold mt-2 tracking-[0.25em]">Verified Google Review</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-12 gap-8">
          <button 
            onClick={prev} 
            className="w-12 h-12 rounded-full border border-luxury-black/10 hover:border-luxury-gold flex items-center justify-center text-luxury-black hover:text-luxury-gold transition-all duration-300 hover:scale-105"
            aria-label="Previous Review"
          >
            <ArrowLeft size={18} strokeWidth={1.5} />
          </button>
          <button 
            onClick={next} 
            className="w-12 h-12 rounded-full border border-luxury-black/10 hover:border-luxury-gold flex items-center justify-center text-luxury-black hover:text-luxury-gold transition-all duration-300 hover:scale-105"
            aria-label="Next Review"
          >
            <ArrowRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
