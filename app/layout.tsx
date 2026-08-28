import type { Metadata } from "next";
import { Quicksand, Poppins, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-naskh",
});

export const metadata: Metadata = {
  title: "Makkah & Madinah Hotel Booking | Luxury Hotels Near Haram",
  description: "Book premium hotels in Makkah and Madinah, steps from Masjid al-Haram and Masjid an-Nabawi. Curated accommodations for Hajj, Umrah, and Ziyarah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} ${poppins.variable} ${notoNaskh.variable}`}>
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)]">
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
