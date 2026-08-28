"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

export default function Destinations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const makkahRef = useRef<HTMLAnchorElement>(null);
  const madinahRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !makkahRef.current || !madinahRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        once: true,
      }
    });

    tl.fromTo(makkahRef.current, 
      { x: -120, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    , 0);

    tl.fromTo(madinahRef.current, 
      { x: 120, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    , 0);

  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-luxury-cream overflow-hidden pt-24">
      <div className="absolute top-12 left-12 text-[150px] md:text-[200px] font-serif text-luxury-gold opacity-15 leading-none select-none z-0 pointer-events-none">
        02
      </div>
      
      <div className="w-full flex flex-col md:flex-row relative z-10">
        <Link 
          href="/makkah" 
          ref={makkahRef}
          className="group relative w-full md:w-1/2 h-[50vh] md:h-[80vh] overflow-hidden block"
        >
          <Image 
            src="/makkah.jpg"
            alt="Makkah al-Mukarramah"
            fill
            className="object-cover transform transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex justify-between items-end">
            <div>
              <p className="text-luxury-gold text-xs md:text-sm uppercase tracking-widest mb-3">47 Properties</p>
              <h2 className="text-3xl md:text-5xl font-serif text-white">Makkah <br/>al-Mukarramah</h2>
            </div>
            <ArrowRight className="text-white transform group-hover:translate-x-4 transition-transform duration-300" size={32} />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-luxury-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
        </Link>

        <Link 
          href="/madinah" 
          ref={madinahRef}
          className="group relative w-full md:w-1/2 h-[50vh] md:h-[80vh] overflow-hidden block"
        >
          <Image 
            src="/madinah.jpg"
            alt="Al-Madinah al-Munawwarah"
            fill
            className="object-cover transform transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex justify-between items-end">
            <div>
              <p className="text-luxury-gold text-xs md:text-sm uppercase tracking-widest mb-3">31 Properties</p>
              <h2 className="text-3xl md:text-5xl font-serif text-white">Al-Madinah <br/>al-Munawwarah</h2>
            </div>
            <ArrowRight className="text-white transform group-hover:translate-x-4 transition-transform duration-300" size={32} />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-luxury-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
        </Link>
      </div>
    </section>
  );
}
