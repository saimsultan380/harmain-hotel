"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ backgroundColor: "transparent" }}
        animate={{ backgroundColor: scrolled ? "#FFFFFF" : "transparent" }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-colors duration-300",
          scrolled ? "py-4 border-b border-[#E0D5C0] shadow-sm" : "py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif text-luxury-gold tracking-wide">
            Haramain<span className={scrolled ? "text-luxury-black" : "text-white"}>Hotels</span>
          </Link>

          {/* Desktop Nav */}
          <div className={cn(
            "hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium",
            scrolled ? "text-luxury-black" : "text-white"
          )}>
            <Link href="/makkah" className="hover:text-luxury-gold transition-colors">Makkah</Link>
            <Link href="/madinah" className="hover:text-luxury-gold transition-colors">Madinah</Link>
            <Link href="/about" className="hover:text-luxury-gold transition-colors">About</Link>
            <Link href="/contact" className="hover:text-luxury-gold transition-colors">Contact</Link>
          </div>

          <div className="hidden md:block">
            <Link 
              href="/booking" 
              className="pill-button bg-luxury-black border border-luxury-gold text-luxury-gold px-6 py-2.5 text-sm uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-black transition-colors inline-block"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={cn("md:hidden transition-colors", scrolled ? "text-luxury-black" : "text-white")}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-luxury-black flex flex-col justify-center items-center"
          >
            <button 
              className="absolute top-6 right-6 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-8 text-center text-3xl font-serif">
              <Link href="/makkah" onClick={() => setMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors">Makkah</Link>
              <Link href="/madinah" onClick={() => setMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors">Madinah</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors">About</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors">Contact</Link>
              <Link href="/booking" onClick={() => setMobileMenuOpen(false)} className="text-luxury-gold mt-8">Book Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
