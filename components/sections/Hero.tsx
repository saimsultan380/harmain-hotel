"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BookingBar from "@/components/ui/BookingBar";

export default function Hero() {
  const headingText = "Where Faith Meets Comfort";
  const words = headingText.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 60
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center mt-20">
        <motion.div
          className="overflow-hidden mb-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[96px] font-serif text-white leading-tight">
            {words.map((word, index) => (
              <motion.span 
                key={index} 
                variants={child}
                className="inline-block mr-4 md:mr-6 last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>
        
        <motion.p 
          className="text-luxury-cream text-lg md:text-xl font-sans mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Handpicked hotels steps from the Haramain
        </motion.p>

        <motion.div
          className="w-full max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <BookingBar />
        </motion.div>
      </div>
    </section>
  );
}
