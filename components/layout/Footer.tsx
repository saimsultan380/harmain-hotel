import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] text-[#0A0A0A] border-t border-[#E0D5C0] pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Column 1: Brand & Narrative */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="text-3xl font-serif text-luxury-gold tracking-wide">
              Haramain<span className="text-luxury-black">Hotels</span>
            </Link>
            <p className="text-black/60 text-xs md:text-sm leading-relaxed font-light pr-4">
              Curating ultra-luxury retreats and peaceful sanctuaries in Makkah and Madinah. Elevating your spiritual journey with elegant proximity, bespoke butler services, and modern comfort.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-9 h-9 rounded-full border border-black/10 hover:border-luxury-gold hover:text-luxury-gold flex items-center justify-center text-black/70 transition-all duration-300">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-black/10 hover:border-luxury-gold hover:text-luxury-gold flex items-center justify-center text-black/70 transition-all duration-300">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-black/10 hover:border-luxury-gold hover:text-luxury-gold flex items-center justify-center text-black/70 transition-all duration-300">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 2c1.86 0 3.6.53 5.09 1.44-.94 1.15-2.02 2.21-3.23 3.17C12.7 7.55 11.4 8.41 10.02 9.2c.45-1.52.8-3.08 1.05-4.66.31-.17.62-.35.93-.54zm-2.12.38c-.28 1.58-.65 3.14-1.12 4.67C7.38 7.73 6.07 8.35 4.7 8.86 5.88 6.18 7.68 3.89 9.88 2.38zM2.87 10.74c1.28-.5 2.6-.97 3.96-1.39C7.45 10.9 8.21 12.44 9 14c-1.38.79-2.69 1.65-3.87 2.61-1.21-.96-2.28-2.02-3.23-3.17.31-.19.62-.37.93-.56zm-.49 4.88c.95-1.15 2.02-2.21 3.23-3.17C6.76 11.49 8.06 10.63 9.44 9.84c-.45 1.52-.8 3.08-1.05 4.66-.31.17-.62.35-.93.54-1.86 0-3.6-.53-5.09-1.44zM12 22c-1.86 0-3.6-.53-5.09-1.44.94-1.15 2.02-2.21 3.23-3.17.15-.12.31-.24.46-.35a39.4 39.4 0 011.02-4.66c.31.17.62.35.93.54 1.86 0 3.6.53 5.09 1.44-.95 1.15-2.02 2.21-3.23 3.17-.31.17-.62.35-.93.54-.15.12-.31.24-.46.35-.31.17-.62.35-.93.54zm2.12-.38c.28-1.58.65-3.14 1.12-4.67 1.38-.68 2.69-1.3 4.06-1.81-1.18 2.68-2.98 4.97-5.18 6.48zm5.01-8.36c-1.28.5-2.6.97-3.96 1.39-.62-1.55-1.38-3.09-2.17-4.65 1.38-.79 2.69-1.65 3.87-2.61 1.21.96 2.28 2.02 3.23 3.17-.31.19-.62.37-.93.56z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Destinations */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold">Destinations</h4>
            <ul className="flex flex-col space-y-3 text-xs md:text-sm text-black/60 font-medium">
              <li>
                <Link href="/makkah" className="hover:text-luxury-gold transition-colors">Makkah Collection</Link>
              </li>
              <li>
                <Link href="/madinah" className="hover:text-luxury-gold transition-colors">Madinah Collection</Link>
              </li>
              <li>
                <Link href="/makkah" className="hover:text-luxury-gold transition-colors">Haram Proximity Hotels</Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-luxury-gold transition-colors">Luxury Suites</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Spiritual Concierge */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold">Concierge</h4>
            <ul className="flex flex-col space-y-3 text-xs md:text-sm text-black/60 font-medium">
              <li>
                <Link href="/booking" className="hover:text-luxury-gold transition-colors">Bespoke Bookings</Link>
              </li>
              <li>
                <a href="#" className="hover:text-luxury-gold transition-colors">Umrah VIP Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-luxury-gold transition-colors">Ziyarah Private Tours</a>
              </li>
              <li>
                <a href="#" className="hover:text-luxury-gold transition-colors">Special Requests</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold">The Journal</h4>
            <p className="text-black/60 text-xs md:text-sm leading-relaxed font-light">
              Subscribe to receive curated travel guides, historical sights updates, and exclusive seasonal retreats.
            </p>
            <form className="relative flex items-center border-b border-black/20 focus-within:border-luxury-gold transition-colors duration-300 pb-2">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="w-full bg-transparent text-xs text-[#0A0A0A] placeholder-black/35 tracking-widest uppercase focus:outline-none pr-8 font-semibold"
                required
              />
              <button 
                type="submit" 
                className="absolute right-0 text-black/60 hover:text-luxury-gold transition-colors duration-300"
                aria-label="Subscribe"
              >
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            </form>
          </div>

        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-black/10 mb-8" />

        {/* Bottom Bar: Copyright & Legals */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-black/40 tracking-widest font-semibold uppercase gap-4">
          <p>© {new Date().getFullYear()} Haramain Hotels. All rights reserved.</p>
          <div className="flex space-x-8 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-[#0A0A0A] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#0A0A0A] transition-colors">Terms of Service</Link>
            <span className="text-luxury-gold/70 tracking-[0.15em] hidden lg:inline">Crafted for Devotion & Luxury</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
