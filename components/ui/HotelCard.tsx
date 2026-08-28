import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface HotelProps {
  id: string;
  name: string;
  distance: string;
  price: string;
  stars: number;
  image: string;
  tagline?: string;
}

export default function HotelCard({
  hotel,
  layout = "vertical",
  reverse = false,
}: {
  hotel: HotelProps;
  layout?: "vertical" | "horizontal";
  reverse?: boolean;
}) {
  if (layout === "horizontal") {
    return (
      <div className={cn("flex flex-col md:flex-row gap-8 lg:gap-16 items-center", reverse && "md:flex-row-reverse")}>
        <div className="w-full md:w-[60%] overflow-hidden group">
          <div className="relative aspect-[4/3] w-full transform transition-transform duration-700 group-hover:scale-105">
            <Image 
              src={hotel.image}
              alt={hotel.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </div>
        <div className="w-full md:w-[40%] flex flex-col justify-center">
          <div className="flex space-x-1 mb-4">
            {[...Array(hotel.stars)].map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 bg-luxury-gold rounded-full inline-block"></span>
            ))}
          </div>
          <h3 className="text-3xl lg:text-4xl font-serif text-luxury-black mb-4">{hotel.name}</h3>
          {hotel.tagline && <p className="text-gray-500 mb-6 leading-relaxed">{hotel.tagline}</p>}
          <div className="flex flex-col space-y-2 mb-8 text-sm uppercase tracking-widest text-gray-400">
            <span>{hotel.distance}</span>
            <span>{hotel.price} / night</span>
          </div>
          <Link 
            href={`/hotel/${hotel.id}`} 
            className="inline-block uppercase tracking-widest text-sm text-luxury-black border-b border-luxury-gold pb-1 w-max hover:text-luxury-gold transition-colors"
          >
            View Hotel
          </Link>
        </div>
      </div>
    );
  }

  // Vertical (Portrait) Layout for Homepage (NO gradients allowed)
  return (
    <Link href={`/hotel/${hotel.id}`} className="group block w-full h-[500px] md:h-[600px] relative overflow-hidden bg-luxury-black">
      <div className="absolute inset-0 transform transition-transform duration-700 group-hover:scale-105">
        <Image 
          src={hotel.image}
          alt={hotel.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      {/* Solid dark overlay instead of gradient */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-full p-8 text-white transform transition-transform duration-500 group-hover:-translate-y-2 z-10">
        <div className="flex space-x-1 mb-3">
          {[...Array(hotel.stars)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 bg-luxury-gold rounded-full inline-block"></span>
          ))}
        </div>
        <h3 className="text-2xl font-serif mb-2">{hotel.name}</h3>
        <div className="flex justify-between items-center text-sm uppercase tracking-widest text-gray-300 border-t border-white/20 pt-4 mt-4">
          <span>{hotel.distance}</span>
          <span>{hotel.price}</span>
        </div>
      </div>
    </Link>
  );
}
