"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-40 px-6">
      {/* Immersive background image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/cta-bg.jpg"
          alt="Luxury Sanctuary Sunset"
          fill
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />
      </div>

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 p-10 md:p-20 text-center shadow-[0_32px_100px_rgba(0,0,0,0.6)]"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      >
        <span className="block text-xs uppercase tracking-widest text-luxury-gold mb-4 font-semibold tracking-[0.25em]">Your Sacred Sanctuary Awaits</span>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight font-semibold">
          Ready for Your <br className="hidden md:block" /> Sacred Journey?
        </h2>
        
        <p className="text-white/70 text-xs md:text-sm max-w-xl mx-auto mb-10 leading-relaxed uppercase tracking-[0.15em] font-medium">
          Experience ultimate peace, elegant design, and immediate proximity to the Haramain. Secure your tailored luxury stay today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link 
            href="/makkah"
            className="w-full sm:w-auto bg-luxury-gold text-luxury-black border border-luxury-gold px-12 py-4.5 uppercase tracking-widest text-xs font-bold hover:bg-white hover:border-white hover:text-luxury-black transition-all duration-300 shadow-[0_4px_25px_rgba(201,168,76,0.25)]"
          >
            Explore Makkah
          </Link>
          <Link 
            href="/madinah"
            className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-12 py-4.5 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-luxury-black transition-all duration-300 backdrop-blur-sm"
          >
            Explore Madinah
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
