"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import Image from "next/image";

const bookingSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  specialRequests: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema)
  });

  const onSubmit = async (data: BookingFormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    router.push("/confirmation");
  };

  return (
    <main className="bg-luxury-cream min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col-reverse lg:flex-row gap-16">
        
        {/* Left Form */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl md:text-5xl font-serif text-luxury-black mb-12">Complete Your Booking</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            <div>
              <h2 className="text-xl font-serif text-luxury-black mb-6 border-b border-luxury-gold/30 pb-2">Guest Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b border-gray-300 focus-within:border-luxury-gold transition-colors pb-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                  <input 
                    {...register("firstName")}
                    className="w-full bg-transparent text-luxury-black font-serif text-lg focus:outline-none"
                    placeholder="John"
                  />
                  {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName.message}</span>}
                </div>
                <div className="border-b border-gray-300 focus-within:border-luxury-gold transition-colors pb-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                  <input 
                    {...register("lastName")}
                    className="w-full bg-transparent text-luxury-black font-serif text-lg focus:outline-none"
                    placeholder="Doe"
                  />
                  {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName.message}</span>}
                </div>
                <div className="border-b border-gray-300 focus-within:border-luxury-gold transition-colors pb-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                  <input 
                    type="email"
                    {...register("email")}
                    className="w-full bg-transparent text-luxury-black font-serif text-lg focus:outline-none"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                </div>
                <div className="border-b border-gray-300 focus-within:border-luxury-gold transition-colors pb-2">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    {...register("phone")}
                    className="w-full bg-transparent text-luxury-black font-serif text-lg focus:outline-none"
                    placeholder="+1 234 567 890"
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif text-luxury-black mb-6 border-b border-luxury-gold/30 pb-2">Special Requests</h2>
              <div className="border-b border-gray-300 focus-within:border-luxury-gold transition-colors pb-2">
                <textarea 
                  {...register("specialRequests")}
                  className="w-full bg-transparent text-luxury-black font-serif text-lg focus:outline-none min-h-[100px] resize-none"
                  placeholder="Any special requests or accessibility needs..."
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-luxury-black text-luxury-gold py-5 uppercase tracking-widest text-sm hover:bg-luxury-gold hover:text-luxury-black transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Confirm & Pay"}
            </button>
          </form>
        </div>

        {/* Right Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white border border-[#E0D5C0] p-8 sticky top-[120px]">
            <h2 className="text-xl font-serif text-luxury-black mb-6 border-b border-luxury-gold/30 pb-2">Reservation Summary</h2>
            
            <div className="flex gap-4 mb-8">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image 
                  src="https://images.unsplash.com/photo-1542314831-c6a420325142?q=80&w=2070&auto=format&fit=crop"
                  alt="Hotel"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-luxury-black text-lg">Raffles Makkah Palace</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Signature Suite</p>
              </div>
            </div>

            <div className="space-y-4 mb-8 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Check In</span>
                <span className="text-luxury-black font-serif">Oct 15, 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Check Out</span>
                <span className="text-luxury-black font-serif">Oct 20, 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Guests</span>
                <span className="text-luxury-black font-serif">2 Adults</span>
              </div>
            </div>

            <div className="border-t border-luxury-gold/30 pt-4 space-y-4 text-sm mb-8">
              <div className="flex justify-between">
                <span className="text-gray-500">5 Nights ($850/night)</span>
                <span className="text-luxury-black font-serif">$4,250</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Taxes & Fees</span>
                <span className="text-luxury-black font-serif">$637</span>
              </div>
            </div>

            <div className="border-t border-luxury-black pt-4 flex justify-between items-baseline">
              <span className="uppercase tracking-widest text-sm text-luxury-black">Total</span>
              <span className="text-3xl font-serif text-luxury-black">$4,887</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
