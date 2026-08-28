"use client";

import { motion } from "framer-motion";

const STEPS = [
  { num: "01", title: "Choose Your City", desc: "Select Makkah or Madinah for your stay." },
  { num: "02", title: "Select Your Hotel", desc: "Browse curated luxury accommodations." },
  { num: "03", title: "Confirm & Relax", desc: "Secure your booking instantly." }
];

export default function HowItWorks() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
  };

  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-luxury-black text-center mb-24">
          Book in 3 Simple Steps
        </h2>

        <motion.div 
          className="relative flex flex-col md:flex-row justify-between items-start max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Dashed line */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-luxury-gold/50 z-0" />

          {STEPS.map((step) => (
            <motion.div 
              key={step.num} 
              variants={item}
              className="relative z-10 bg-white px-4 md:px-8 text-center flex-1 flex flex-col items-center mb-16 md:mb-0"
            >
              <div className="text-6xl font-serif text-luxury-gold mb-6 leading-none">{step.num}</div>
              <h3 className="text-2xl font-serif text-luxury-black mb-3">{step.title}</h3>
              <p className="text-gray-500 uppercase tracking-widest text-xs leading-loose">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
