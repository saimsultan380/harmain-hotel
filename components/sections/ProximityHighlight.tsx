"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ProximityHighlight() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const makkahPropRef = useRef<HTMLSpanElement>(null);
  const madinahPropRef = useRef<HTMLSpanElement>(null);
  const distanceRef = useRef<HTMLSpanElement>(null);
  const distanceRef2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 75%",
      once: true,
      onEnter: () => {
        gsap.to([distanceRef.current, distanceRef2.current], {
          innerHTML: 280,
          duration: 1.5,
          snap: { innerHTML: 1 },
          ease: "power2.out"
        });
        
        gsap.to(makkahPropRef.current, {
          innerHTML: 47,
          duration: 1.5,
          snap: { innerHTML: 1 },
          ease: "power2.out"
        });
        
        gsap.to(madinahPropRef.current, {
          innerHTML: 31,
          duration: 1.5,
          snap: { innerHTML: 1 },
          ease: "power2.out"
        });
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-32 flex flex-col items-center justify-center overflow-hidden bg-luxury-black">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1565552645632-d725e8bfc16a?q=80&w=2070&auto=format&fit=crop"
          alt="Aerial Makkah Skyline"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center w-full">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
          Steps from Al-Masjid Al-Haram
        </h2>
        
        <div className="text-[100px] md:text-[150px] font-serif text-luxury-gold leading-none mb-6 flex items-baseline justify-center">
          <span ref={distanceRef}>0</span><span className="text-[60px] md:text-[80px]">m</span>
        </div>
        
        <p className="text-luxury-cream text-sm md:text-base uppercase tracking-widest leading-loose max-w-[24rem] mx-auto mb-20">
          Our closest properties place the Haram within a gentle walk.
        </p>

        <div className="flex flex-col md:flex-row bg-[rgba(0,0,0,0.5)] border border-luxury-gold/20 w-full">
          <div className="flex-1 p-8 md:border-r border-b md:border-b-0 border-luxury-gold/30 flex flex-col items-center justify-center">
            <span className="text-3xl font-serif text-white mb-2"><span ref={distanceRef2}>0</span>m</span>
            <span className="text-xs uppercase tracking-widest text-luxury-gold">Closest Hotel</span>
          </div>
          <div className="flex-1 p-8 md:border-r border-b md:border-b-0 border-luxury-gold/30 flex flex-col items-center justify-center">
            <span className="text-3xl font-serif text-white mb-2"><span ref={makkahPropRef}>0</span></span>
            <span className="text-xs uppercase tracking-widest text-luxury-gold">Makkah Properties</span>
          </div>
          <div className="flex-1 p-8 flex flex-col items-center justify-center">
            <span className="text-3xl font-serif text-white mb-2"><span ref={madinahPropRef}>0</span></span>
            <span className="text-xs uppercase tracking-widest text-luxury-gold">Madinah Properties</span>
          </div>
        </div>
      </div>
    </section>
  );
}
