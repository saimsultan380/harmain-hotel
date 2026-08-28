"use client";

import { useState } from "react";
import { Calendar, Users, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookingBar() {
  const router = useRouter();
  const [destination, setDestination] = useState("makkah");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${destination}`);
  };

  return (
    <div className="bg-black/35 backdrop-blur-xl border border-white/10 p-6 md:p-8 w-full max-w-5xl mx-auto relative z-20 shadow-[0_32px_100px_rgba(0,0,0,0.6)]">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-6 md:gap-8">
        
        {/* Destination */}
        <div className="flex-1 border-b border-white/10 focus-within:border-luxury-gold transition-colors pb-3">
          <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-medium">Destination</label>
          <div className="flex items-center">
            <MapPin size={18} className="text-luxury-gold mr-3 shrink-0" />
            <select 
              className="w-full bg-transparent text-white font-serif text-lg focus:outline-none appearance-none cursor-pointer [&>option]:bg-luxury-black [&>option]:text-white"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="makkah">Makkah al-Mukarramah</option>
              <option value="madinah">Al-Madinah al-Munawwarah</option>
            </select>
          </div>
        </div>

        {/* Check In */}
        <div className="flex-1 border-b border-white/10 focus-within:border-luxury-gold transition-colors pb-3">
          <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-medium">Check In</label>
          <div className="flex items-center">
            <Calendar size={18} className="text-luxury-gold mr-3 shrink-0" />
            <input 
              type="date" 
              className="w-full bg-transparent text-white font-serif text-lg focus:outline-none cursor-pointer [color-scheme:dark]"
            />
          </div>
        </div>

        {/* Check Out */}
        <div className="flex-1 border-b border-white/10 focus-within:border-luxury-gold transition-colors pb-3">
          <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-medium">Check Out</label>
          <div className="flex items-center">
            <Calendar size={18} className="text-luxury-gold mr-3 shrink-0" />
            <input 
              type="date" 
              className="w-full bg-transparent text-white font-serif text-lg focus:outline-none cursor-pointer [color-scheme:dark]"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="flex-1 border-b border-white/10 focus-within:border-luxury-gold transition-colors pb-3">
          <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-medium">Guests</label>
          <div className="flex items-center">
            <Users size={18} className="text-luxury-gold mr-3 shrink-0" />
            <select className="w-full bg-transparent text-white font-serif text-lg focus:outline-none appearance-none cursor-pointer [&>option]:bg-luxury-black [&>option]:text-white">
              <option>1 Room, 2 Guests</option>
              <option>1 Room, 3 Guests</option>
              <option>2 Rooms, 4 Guests</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-end md:w-auto w-full pt-2 md:pt-0">
          <button 
            type="submit"
            className="w-full md:w-auto bg-luxury-gold text-luxury-black px-10 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-white hover:text-luxury-black transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.15)]"
          >
            Search Hotels
          </button>
        </div>
      </form>
    </div>
  );
}
