Build a luxury hotel booking website for Makkah and Madinah, Saudi Arabia.

══════════════════════════════════════════
TECH STACK
══════════════════════════════════════════
- Framework: Next.js 15 with App Router and TypeScript
- Styling: Tailwind CSS v4 (no arbitrary gradients anywhere)
- Animations: Framer Motion + GSAP with ScrollTrigger plugin
- Smooth Scroll: Lenis (wrap the app in a Lenis provider)
- State: Zustand for global booking state
- Forms: React Hook Form + Zod for validation
- Dates: date-fns for check-in/out logic
- Images: Next.js  with priority loading on hero
- Fonts: 'Playfair Display' (headings) + 'Inter' (body) via next/font

══════════════════════════════════════════
DESIGN PHILOSOPHY — READ CAREFULLY
══════════════════════════════════════════
- NO gradients anywhere. Use solid colors, blacks, whites, deep golds.
- NO generic AI-style UI (no blue CTA buttons, no card-heavy grids, no generic shadows)
- Palette: #0A0A0A (deep black), #FFFFFF (white), #C9A84C (gold accent), #1A1A1A (dark surface), #F5F0E8 (cream/warm off-white)
- Think: Aman Resorts meets Arabian luxury — editorial, spatial, minimal content, maximum visual weight
- Every section is FULL-SCREEN or near full-screen. Content is sparse. Images are everything.
- Typography is large, bold (Playfair Display), with editorial spacing
- Dark sections and light sections alternate for visual rhythm
- Horizontal rules and thin gold lines are used as elegant dividers
- NO decorative blobs, mesh gradients, glassmorphism, or frosted glass effects
- Inspired by: Four Seasons, Aman, Six Senses website aesthetic — NOT Booking.com

══════════════════════════════════════════
PAGES & ROUTES
══════════════════════════════════════════

1. / (Homepage)
2. /makkah (Makkah Hotels listing)
3. /madinah (Madinah Hotels listing)
4. /hotel/[slug] (Hotel detail page)
5. /booking (Booking form page)
6. /confirmation (Booking confirmed)

══════════════════════════════════════════
HOMEPAGE SECTIONS (in order)
══════════════════════════════════════════

[SECTION 1 — HERO: Full viewport]
- Full-bleed image background (Masjid al-Haram or aerial Makkah)
- Black overlay at 40% opacity
- Center: Large serif heading (Playfair Display, 96px desktop):
  "Where Faith Meets Comfort"
  Subheading (Inter, 18px, cream color): "Handpicked hotels steps from the Haramain"
- A minimal floating booking bar below the headline:
  • City selector (Makkah / Madinah) — pill toggle, gold underline style
  • Check-in date picker
  • Check-out date picker
  • Guests selector (Adults / Children)
  • CTA button: "Search Hotels" — solid black, gold text, 0 border-radius (sharp corners)
- ANIMATION: heading uses GSAP SplitText word-by-word reveal on load (stagger 0.08s, y: 60→0, opacity 0→1). Booking bar fades up after heading. Hero image uses Framer Motion scale(1.05→1) over 2s on mount.

[SECTION 2 — DESTINATIONS: Dark background #0A0A0A]
- Left: Large bold number "02" in gold (decorative, 200px, opacity 0.08)
- Two destination cards, side by side, each taking 50vw:
  • MAKKAH card: full-bleed image of Kaaba/Masjid al-Haram, title "Makkah al-Mukarramah", property count "47 Properties", CTA arrow →
  • MADINAH card: full-bleed image of Masjid an-Nabawi, title "Al-Madinah al-Munawwarah", property count "31 Properties", CTA arrow →
- Cards have NO border-radius. Sharp edges only.
- ANIMATION: On scroll, each card slides in from opposite sides (GSAP x: ±120→0). On hover: image scales 1.05 inside the card (overflow hidden), gold line appears at bottom.

[SECTION 3 — FEATURED HOTELS: Cream background #F5F0E8]
- Heading: "Curated for the Sacred Journey" (left-aligned, large serif)
- Horizontal scrolling hotel cards (snap scrolling) — NOT a grid:
  • Each card: tall portrait ratio (3:4), hotel image fills card
  • Card bottom: hotel name, distance to Haram, price per night, stars
  • Cards are separated by a thin 1px gold vertical line
- ANIMATION: Horizontal scroll section pinned with GSAP ScrollTrigger. Cards slide left as user scrolls down (classic horizontal scroll effect). On card hover: image scales up, title slides up slightly.

[SECTION 4 — PROXIMITY HIGHLIGHT: Full-bleed dark image section]
- Background: aerial photo of Makkah skyline
- Overlay: solid black at 60%
- Content centered:
  "Steps from Al-Masjid Al-Haram"
  Large gold number: "280m" (distance stat)
  Thin description (max 20 words): "Our closest properties place the Haram within a gentle walk."
- 3 minimal stat boxes in a row: "280m Closest Hotel" | "47 Makkah Properties" | "31 Madinah Properties"
  Each separated by a vertical gold 1px rule. Dark glass background (rgba(0,0,0,0.5)), NO blur.
- ANIMATION: Stats count up with GSAP when section enters viewport (0 → final number, 1.5s ease-out).

[SECTION 5 — HOW IT WORKS: White background]
- Heading: "Book in 3 Simple Steps"
- Three steps in a horizontal row — minimal, typographic only:
  01. Choose Your City
  02. Select Your Hotel  
  03. Confirm & Relax
- Each step: large gold number, step title (serif), one-line description
- Steps connected by a thin horizontal dashed gold line
- ANIMATION: Steps animate in sequentially with Framer Motion (stagger 0.2s, fadeUp)

[SECTION 6 — TESTIMONIALS: Dark #1A1A1A background]
- Large serif quote displayed one at a time (auto-cycle every 5s)
- Quote text in white, 36px, Playfair Display italic
- Attribution: Name, City — small, gold
- Minimal left/right navigation arrows (thin, no buttons, just arrow SVGs)
- ANIMATION: Quotes cross-fade with Framer Motion AnimatePresence (opacity 0→1, x: 30→0)

[SECTION 7 — CTA BANNER: Full-bleed gold #C9A84C background]
- Black text: "Ready for Your Sacred Journey?"
- Subtext: "Book your Makkah or Madinah hotel today."
- Two CTA links: "Explore Makkah" | "Explore Madinah" — minimal, underline style, black text
- ANIMATION: Section slides up from below with Framer Motion on scroll

[FOOTER]
- Black background, white text
- Logo left, nav links center, social icons right
- Bottom row: © 2025 · Privacy · Terms
- Thin gold 1px line at the very top of the footer

══════════════════════════════════════════
HOTEL LISTING PAGE (/makkah or /madinah)
══════════════════════════════════════════
- Top: Full-bleed hero image (city-specific), 60vh, with city name overlaid in large serif
- Below hero: filter bar (star rating, price range, distance to Haram, amenities)
- Hotels displayed in a 2-column editorial grid (NOT 3-column, NOT card-heavy)
  • Each item: wide image left (60%), details right (40%)
  • Hotel name, star count (dots or minimal stars), distance, price, short tagline
  • "View Hotel" → underline link style, NOT a button
- Alternating items flip image left/right for editorial rhythm
- Pagination: minimal numbered pages, gold underline on active
- ANIMATION: Each hotel row fades + slides up on scroll (Framer Motion viewport)

══════════════════════════════════════════
HOTEL DETAIL PAGE (/hotel/[slug])
══════════════════════════════════════════
- Full-bleed hero image (100vh) with hotel name in large serif, bottom-left aligned
- Scroll indicator: thin animated line scrolling down
- Image gallery: horizontal strip of 5 thumbnails below hero (click to expand lightbox)
- Content split: Left 65% for details, Right 35% sticky booking panel
  • Left: About section, Key Features (minimal icon + label rows), Location map embed, Reviews
  • Right sticky panel: Price/night, date pickers, guests, "Reserve Now" CTA (black, gold text, sharp corners)
- Amenities: icon grid — use simple thin SVG icons (no emoji, no filled icons)
- Nearby: "280m to Masjid al-Haram" — displayed as a bold visual callout
- ANIMATION: Hero parallax (GSAP ScrollTrigger, y: 0→-150px). Gallery thumbnails scale on hover. Sticky panel fades in on scroll past hero.

══════════════════════════════════════════
GLOBAL ANIMATIONS CONFIG
══════════════════════════════════════════
- Install Lenis and initialize in a client provider component. Register it with GSAP ticker:
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
- All GSAP ScrollTrigger animations: start "top 85%", scrub false, once true
- Framer Motion: define a shared variants object for reuse:
  fadeUp: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }
- Page transitions: Framer Motion AnimatePresence on layout.tsx with opacity 0→1, 0.4s
- Cursor: Custom cursor component — small black dot that scales on hover over links/cards (desktop only)
- Loading screen: Minimal black screen with gold logo mark, fades out after 1.2s

══════════════════════════════════════════
SEO CONFIGURATION
══════════════════════════════════════════
- Use Next.js Metadata API (generateMetadata) for all pages
- Homepage title: "Makkah & Madinah Hotel Booking | Luxury Hotels Near Haram"
- Homepage description: "Book premium hotels in Makkah and Madinah, steps from Masjid al-Haram and Masjid an-Nabawi. Curated accommodations for Hajj, Umrah, and Ziyarah."
- Makkah page title: "Hotels in Makkah Near Masjid al-Haram | Book Online"
- Madinah page title: "Hotels in Madinah Near Masjid an-Nabawi | Book Online"
- Hotel detail: "[Hotel Name] — [Distance] from Haram | Book Now"
- Add JSON-LD structured data (Hotel schema + BreadcrumbList) on listing and detail pages
- OpenGraph images: 1200×630 with city imagery and site branding
- robots.txt and sitemap.xml via Next.js built-in route handlers
- Use semantic HTML: 
, 
, 
, 
, 
, 

- Alt text on all images (descriptive, keyword-rich)
- Canonical tags on all pages
- Arabic language support: add lang="ar" toggle and dir="rtl" layout switch

══════════════════════════════════════════
FOLDER STRUCTURE
══════════════════════════════════════════
app/
  layout.tsx           — Root layout with Lenis provider, custom cursor, page transition
  page.tsx             — Homepage
  makkah/page.tsx      — Makkah listing
  madinah/page.tsx     — Madinah listing
  hotel/[slug]/page.tsx — Hotel detail
  booking/page.tsx     — Booking form
  confirmation/page.tsx — Confirmation

components/
  layout/Navbar.tsx    — Fixed top, transparent → black on scroll
  layout/Footer.tsx
  ui/BookingBar.tsx    — The main search form
  ui/HotelCard.tsx     — Listing card component
  ui/HotelGallery.tsx  — Lightbox image gallery
  ui/DatePicker.tsx    — Custom date range picker
  ui/CustomCursor.tsx  — Cursor follower
  sections/Hero.tsx
  sections/Destinations.tsx
  sections/FeaturedHotels.tsx
  sections/Testimonials.tsx

lib/
  animations.ts        — Shared Framer Motion variants
  gsap.ts              — GSAP + ScrollTrigger init
  lenis.ts             — Lenis smooth scroll setup
  hotels.ts            — Mock hotel data (or API calls)

══════════════════════════════════════════
NAVBAR BEHAVIOR
══════════════════════════════════════════
- Transparent on load, transitions to solid black after 80px scroll
- Logo: wordmark in gold (left-aligned)
- Nav links: "Makkah" | "Madinah" | "About" | "Contact"
- Right: "Book Now" — black pill button with gold text
- Mobile: hamburger menu → full-screen black overlay with large serif links
- ANIMATION: Navbar background transition uses Framer Motion (backgroundColor: transparent → #0A0A0A, 0.3s ease)

══════════════════════════════════════════
BOOKING BAR DETAILS
══════════════════════════════════════════
- Floating card: white background, 1px border (#E0D5C0), sharp corners, padding 1.5rem
- Fields: Destination (dropdown) | Check-in | Check-out | Guests
- Each field has a thin gold bottom border when focused
- Submit: full-width black button "Search Available Hotels" with gold text
- On mobile: fields stack vertically, full-width

══════════════════════════════════════════
IMPORTANT NOTES FOR DEVELOPER
══════════════════════════════════════════
1. All images are provided by the client — use Next.js  with proper fill/sizes props
2. Zero gradients — if you feel like adding a gradient, use a solid color instead
3. Sharp corners everywhere (border-radius: 0) except pill buttons (border-radius: 999px) and nothing else
4. Gold (#C9A84C) is used ONLY as an accent — never as a background fill for large areas
5. Every animation must respect prefers-reduced-motion media query
6. The site must score 90+ on Lighthouse for SEO and Performance
7. Use ISR (revalidate: 3600) on hotel listing and detail pages
8. All Arabic content uses the Noto Naskh Arabic font (load via next/font)