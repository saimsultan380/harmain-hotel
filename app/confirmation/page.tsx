"use client";

import Link from "next/link";
import { Check } from "lucide-react";

export default function ConfirmationPage() {
  return (
    <main className="bg-luxury-cream min-h-screen flex items-center justify-center py-32 px-6">
      <div className="bg-white border border-[#E0D5C0] p-12 md:p-16 max-w-2xl w-full text-center shadow-2xl relative">
        <div className="w-20 h-20 bg-luxury-black rounded-full flex items-center justify-center mx-auto mb-8 absolute -top-10 left-1/2 -translate-x-1/2">
          <Check size={40} className="text-luxury-gold" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-luxury-black mb-4 mt-4">Booking Confirmed</h1>
        <p className="text-gray-500 text-lg mb-8">Your reservation at Raffles Makkah Palace has been successfully processed.</p>
        
        <div className="bg-luxury-cream p-6 mb-12 flex flex-col md:flex-row justify-around items-center border border-luxury-gold/20 text-luxury-black">
          <div className="mb-4 md:mb-0">
            <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Confirmation Number</span>
            <span className="font-serif text-xl">HM-8X92VQ</span>
          </div>
          <div className="w-px h-12 bg-luxury-gold/30 hidden md:block" />
          <div>
            <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Check In</span>
            <span className="font-serif text-xl">Oct 15, 2026</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-12">
          We have sent a detailed confirmation email to your registered address. For any special arrangements, please contact our concierge service.
        </p>

        <Link 
          href="/"
          className="inline-block bg-luxury-black text-luxury-gold px-12 py-4 uppercase tracking-widest text-sm hover:bg-luxury-gold hover:text-luxury-black transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}
