import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Scott's Landscape brand colors (matching AA Fencing)
// Primary green: #1f8b2e
// Dark bg: #000000 / #111111
// Light text: #ffffff
// Content text: #1c1c1c

const BUSINESS_INFO = {
  established: 1992,
  owners: "Scott Blain & Aaron Reese",
  contacts: {
    concrete: { name: "Scott Blain", phone: "585-746-0776", email: "scottslandscapingny@gmail.com" },
    commercial: { name: "Aaron Reese", phone: "585-503-4199", email: "aafencingllc@gmail.com" },
    residential: { name: "CJ", phone: "585-329-6533" }
  },
  testimonials: [
    { text: "You can't even tell where the pool was. They filled in the spot, seeded it, and sent me progress pictures. I checked other places — their prices were higher. I highly recommend them.", author: "Robert P.", location: "Rochester, NY", stars: 5 },
    { text: "They did a great job with a concrete patio and landscaping on my backyard.", author: "Jake C.", location: "Spencerport, NY", stars: 5 },
    { text: "The process was smooth, the price was fair, and the work was excellent!", author: "Ken M.", location: "Spencerport, NY", stars: 5 },
    { text: "Scott's Landscape did exactly what we needed, when we needed it. Highly recommended.", author: "Matt M.", location: "Spencerport, NY", stars: 5 },
    { text: "Scott, CJ, and his team were efficient, friendly, on time, did excellent work, and cleaned up after themselves well. CJ kept in communication with me frequently updating me on the status of our job.", author: "Verified Customer", location: "Monroe County, NY", stars: 5 },
    { text: "Couldn't be happier with how everything turned out! Even better than we hoped!", author: "Rebecca B.", location: "Chili, NY", stars: 5 }
  ]
};

const GALLERY_PHOTOS = [
  { src: "/images/site/concrete-1.jpg", alt: "Concrete flatwork project — Wint Construction, Rochester NY" },
  { src: "/images/site/concrete-2.jpg", alt: "Stamped concrete patio — Wint Construction, Rochester NY" },
  { src: "/images/site/concrete-3.jpg", alt: "Concrete driveway pour — Wint Construction, Rochester NY" },
  { src: "/images/site/concrete-4.jpg", alt: "Brushed concrete sidewalk — Wint Construction, Rochester NY" },
  { src: "/images/site/concrete-5.jpg", alt: "Pool surround concrete — Wint Construction, Rochester NY" },
  { src: "/images/site/concrete-6.jpg", alt: "Decorative concrete work — Wint Construction, Rochester NY" },
  { src: "/images/site/concrete-7.jpg", alt: "Residential concrete pad — Wint Construction, Rochester NY" },
  { src: "/images/site/concrete-8.jpg", alt: "Concrete walkway installation — Wint Construction, Rochester NY" },
  { src: "/images/site/concrete-9.jpg", alt: "Stamped pattern concrete — Wint Construction, Rochester NY" },
  { src: "/images/site/concrete-10.jpg", alt: "Concrete slab project — Wint Construction, Rochester NY" }
];

export default function WintConstructionSite() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const handleMove = (clientX, currentTarget) => {
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1c1c1c] antialiased selection:bg-[#1f8b2e] selection:text-white pb-24 lg:pb-0">

      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-md border-b border-white/10 py-4 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-10 w-28 border-2 border-dashed border-[#1f8b2e]/60 rounded flex items-center justify-center text-[10px] text-[#1f8b2e] font-semibold tracking-wider uppercase">
            LOGO GOES HERE
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white block">WINT <span className="text-[#1f8b2e]">CONSTRUCTION</span></span>
            <span className="text-[10px] text-white/50 tracking-widest uppercase block -mt-1">w/ Scott's Landscape & Fence</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-6 items-center text-sm font-medium text-white/80">
          <a href="#gallery" className="hover:text-[#1f8b2e] transition-colors">Our Work</a>
          <a href="#reviews" className="hover:text-[#1f8b2e] transition-colors">Reviews</a>
          <a href="#services" className="hover:text-[#1f8b2e] transition-colors">Services</a>
          <a href="#contact" className="bg-[#1f8b2e] hover:bg-[#177a25] text-white px-4 py-2 rounded font-bold transition-all transform active:scale-95 shadow-lg shadow-[#1f8b2e]/20">
            Get an Estimate
          </a>
        </div>
        <div className="md:hidden text-xs bg-white/10 text-white/70 px-2.5 py-1 rounded border border-white/15">
          Est. 1992
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="/images/site/hero-slider.png"
            alt="Wint Construction concrete work in Rochester, NY"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
        </div>

        <div className="relative py-16 px-4 sm:px-8 lg:py-28">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-[#1f8b2e]/10 border border-[#1f8b2e]/30 text-[#1f8b2e] px-3 py-1 rounded-full text-xs tracking-wide"
              >
                <span>Monroe County & All of Western NY</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none text-white"
              >
                Concrete That Handles <br />
                <span className="text-[#1f8b2e]">
                  Rochester Winters.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed"
              >
                We pour thick slabs, stamp real patterns, and run Bobcat excavation across Western New York. No dry-mix dumps into dry dirt. Scott Blain and his crew have been setting heavy concrete flatwork, grading lots, and building out hardscapes that survive brutal freeze-thaw cycles since 1992.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-2 flex flex-col sm:flex-row gap-4"
              >
                <a href="#contact" className="bg-[#1f8b2e] hover:bg-[#177a25] text-white text-center font-bold px-6 py-3.5 rounded-lg transition-all shadow-xl shadow-[#1f8b2e]/30 transform active:scale-95">
                  Request a Free Quote
                </a>
                <a href={`tel:${BUSINESS_INFO.contacts.concrete.phone}`} className="border border-white/20 bg-white/5 hover:bg-white/10 text-white text-center font-semibold px-6 py-3.5 rounded-lg transition-all">
                  Call Scott Directly
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1f8b2e]/20 to-transparent rounded-2xl blur-2xl" />
              <div className="relative border border-white/10 bg-black/60 p-6 rounded-2xl shadow-2xl backdrop-blur-sm">
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
                  <span className="text-xs text-white/40">WHO TO CALL DIRECTLY</span>
                  <span className="h-2 w-2 rounded-full bg-[#1f8b2e] animate-pulse" />
                </div>
                <div className="space-y-4 text-sm">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-xs text-[#1f8b2e] block">CONCRETE, FLATWORK & EXCAVATION</span>
                    <span className="font-bold text-white block text-base mt-0.5">{BUSINESS_INFO.contacts.concrete.name}</span>
                    <a href={`tel:${BUSINESS_INFO.contacts.concrete.phone}`} className="text-white/50 hover:text-white text-xs underline block mt-1">{BUSINESS_INFO.contacts.concrete.phone}</a>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-xs text-[#1f8b2e] block">COMMERCIAL CONTRACTING</span>
                    <span className="font-bold text-white block text-base mt-0.5">{BUSINESS_INFO.contacts.commercial.name}</span>
                    <a href={`tel:${BUSINESS_INFO.contacts.commercial.phone}`} className="text-white/50 hover:text-white text-xs underline block mt-1">{BUSINESS_INFO.contacts.commercial.phone}</a>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-xs text-[#1f8b2e] block">RESIDENTIAL & SCHEDULING</span>
                    <span className="font-bold text-white block text-base mt-0.5">Call {BUSINESS_INFO.contacts.residential.name}</span>
                    <a href={`tel:${BUSINESS_INFO.contacts.residential.phone}`} className="text-white/50 hover:text-white text-xs underline block mt-1">{BUSINESS_INFO.contacts.residential.phone}</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* TICKER */}
        <div className="relative bg-black/80 border-t border-white/10 py-3 overflow-hidden select-none whitespace-nowrap">
          <div className="inline-block animate-marquee text-xs tracking-widest text-white/40 uppercase">
            WET CONCRETE MIXES ONLY • BOBCAT EXCAVATION & GRADING • STAMPED & BRUSHED FINISHES • FREEZE-THAW RATED SLABS • POOL SURROUNDS • DRIVEWAYS • PATIOS • SIDEWALKS • 30+ YEARS IN ROCHESTER • LICENSED & INSURED •&nbsp;
          </div>
          <div className="inline-block animate-marquee text-xs tracking-widest text-white/40 uppercase">
            WET CONCRETE MIXES ONLY • BOBCAT EXCAVATION & GRADING • STAMPED & BRUSHED FINISHES • FREEZE-THAW RATED SLABS • POOL SURROUNDS • DRIVEWAYS • PATIOS • SIDEWALKS • 30+ YEARS IN ROCHESTER • LICENSED & INSURED •&nbsp;
          </div>
        </div>
      </section>

      {/* CONCRETE GALLERY */}
      <section id="gallery" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[#1f8b2e] text-xs uppercase tracking-wider block mb-1">Real Jobs, Real Rochester Properties</span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold tracking-tight"
          >
            Our Concrete Work
          </motion.h2>
          <p className="text-[#1c1c1c]/60 text-sm mt-2">
            Every photo here is a real job completed by our crew across Monroe County and Western NY. Tap any image to see full size.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3, delay: Math.min(idx * 0.05, 0.4) }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setLightboxIdx(idx)}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group border border-black/10 shadow-sm"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </motion.button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxIdx(null)}
          >
            <motion.img
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              src={GALLERY_PHOTOS[lightboxIdx].src}
              alt={GALLERY_PHOTOS[lightboxIdx].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition-colors"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % GALLERY_PHOTOS.length); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition-colors"
              aria-label="Next photo"
            >
              ›
            </button>
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            <div className="absolute bottom-4 text-center text-white/60 text-xs">
              {lightboxIdx + 1} / {GALLERY_PHOTOS.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BEFORE/AFTER SLIDER */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-bold tracking-tight mb-2"
        >
          See the Transformation
        </motion.h2>
        <p className="text-[#1c1c1c]/60 text-sm max-w-md mx-auto mb-8">
          Drag the center bar to see how a bare lot transforms with professional concrete flatwork from our crew.
        </p>

        <div
          className="relative h-64 sm:h-96 w-full rounded-xl overflow-hidden select-none cursor-ew-resize shadow-2xl border border-black/10"
          onMouseMove={(e) => { if(e.buttons === 1 || isDragging) handleMove(e.clientX, e.currentTarget) }}
          onTouchMove={(e) => { handleMove(e.touches[0].clientX, e.currentTarget) }}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* Before */}
          <div className="absolute inset-0">
            <img src="/images/site/landscape.png" alt="Before — bare yard" className="w-full h-full object-cover brightness-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute bottom-4 right-4 text-xs uppercase tracking-widest font-bold bg-black/50 text-white px-2 py-0.5 rounded">Before</span>
          </div>

          {/* After */}
          <div
            className="absolute inset-y-0 left-0 right-0 overflow-hidden pointer-events-none"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img src="/images/site/concrete-1.jpg" alt="After — completed concrete flatwork" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest font-bold bg-[#1f8b2e] text-white px-2 py-0.5 rounded">After</span>
          </div>

          {/* Divider */}
          <div
            className="absolute inset-y-0 w-1 bg-[#1f8b2e] cursor-ew-resize shadow-[0_0_15px_rgba(31,139,46,0.6)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1f8b2e] border-2 border-white shadow-xl flex items-center justify-center text-white font-bold text-sm select-none">
              ↔
            </div>
          </div>
        </div>
      </section>

      {/* FREE ESTIMATE CTA */}
      <section className="py-16 px-4 bg-black text-white border-y border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold tracking-tight"
          >
            Request a Free Quote Today
          </motion.h2>
          <p className="text-white/50 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Every slab is different. We don't throw numbers at you over the phone — we come out, look at your grade, check drainage, and give you a real quote based on what your lot actually needs. No hidden fees since 1992.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <span className="text-[#1f8b2e] text-xs uppercase tracking-wider block mb-2">Step 1</span>
              <span className="font-bold text-white block">Call or Text Scott</span>
              <span className="text-white/40 text-xs block mt-1">Talk directly to the guy running your pour — no call centers</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <span className="text-[#1f8b2e] text-xs uppercase tracking-wider block mb-2">Step 2</span>
              <span className="font-bold text-white block">Free Site Walkthrough</span>
              <span className="text-white/40 text-xs block mt-1">We check grade, drainage, access, and measure everything on-site</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <span className="text-[#1f8b2e] text-xs uppercase tracking-wider block mb-2">Step 3</span>
              <span className="font-bold text-white block">Get Your Quote</span>
              <span className="text-white/40 text-xs block mt-1">Transparent pricing for labor, material, excavation — no surprises</span>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS_INFO.contacts.concrete.phone}`} className="bg-[#1f8b2e] hover:bg-[#177a25] text-white font-bold px-8 py-3.5 rounded-lg transition-all shadow-xl shadow-[#1f8b2e]/30 transform active:scale-95">
              Call Scott — {BUSINESS_INFO.contacts.concrete.phone}
            </a>
            <a href={`tel:${BUSINESS_INFO.contacts.commercial.phone}`} className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-lg transition-all">
              Call Aaron — {BUSINESS_INFO.contacts.commercial.phone}
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[#1f8b2e] text-xs uppercase tracking-wider block mb-1">Full Service Concrete & Excavation</span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold tracking-tight"
          >
            More Than Just a Concrete Pour
          </motion.h2>
          <p className="text-[#1c1c1c]/60 text-sm mt-1">
            Scott and the crew handle the full scope — excavation to finish — so you don't need to wrangle 4 different contractors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              img: "/images/site/concrete-services.jpg",
              title: "Concrete Flatwork",
              desc: "Driveways, sidewalks, patios, pool surrounds, and garage pads. We pour thick, reinforced slabs with proper sub-base prep. Every pour uses wet concrete mix — never dry dumps into dry holes. Built to handle Rochester's freeze-thaw cycles without cracking."
            },
            {
              img: "/images/site/concrete-patio.jpg",
              title: "Stamped & Decorative Concrete",
              desc: "Professional stamped patterns that mimic natural stone, brick, and slate. Brushed finishes for slip resistance around pools. Integral color options to match your home exterior. Custom decorative stone installations and pillars."
            },
            {
              img: "/images/site/inner-banner.jpg",
              title: "Excavation & Site Prep",
              desc: "Bobcat excavation, lot grading, and complete site prep for new builds and renovations. Pool removals, fill-ins, and re-seeding. We handle the dirt work so your concrete has a proper foundation underneath it."
            }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-black/10 rounded-2xl shadow-sm overflow-hidden"
            >
              <img src={service.img} alt={service.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                <p className="text-[#1c1c1c]/60 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-16 px-4 bg-[#eee] border-t border-black/10 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#1f8b2e] text-xs uppercase tracking-wider block mb-1">Real Reviews From Real Customers</span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="text-2xl sm:text-3xl font-bold tracking-tight"
            >
              Backed by Genuine Local Reputation
            </motion.h2>
            <div className="mt-3 inline-flex items-center gap-2 bg-white border border-black/10 rounded-full px-4 py-2 shadow-sm">
              <div className="flex text-[#1f8b2e] text-lg">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <span className="text-sm font-semibold text-[#1c1c1c]">4.25 / 5</span>
              <span className="text-xs text-[#1c1c1c]/50">from 53 reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BUSINESS_INFO.testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-xl border border-black/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-[#1f8b2e] text-sm mb-3">
                    {Array.from({ length: t.stars }, (_, i) => <span key={i}>★</span>)}
                  </div>
                  <p className="text-[#1c1c1c]/80 italic text-sm leading-relaxed">"{t.text}"</p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/5 flex justify-between items-center text-xs text-[#1c1c1c]/50">
                  <span className="font-bold text-[#1c1c1c]">{t.author}</span>
                  <span>{t.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <span className="text-[#1f8b2e] text-xs uppercase tracking-wider block mb-1">Call Us for Free Estimates</span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold tracking-tight mb-2"
        >
          Speak Directly With Scott
        </motion.h2>
        <p className="text-[#1c1c1c]/60 text-sm max-w-md mx-auto mb-10">
          No automated phone trees, no sales reps. Tap below to talk directly with the person who'll oversee your pour.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-black text-white p-6 rounded-xl border border-white/10 shadow-md"
          >
            <span className="text-xs text-[#1f8b2e] uppercase tracking-widest block mb-1">Concrete, Flatwork & Excavation</span>
            <h3 className="text-xl font-bold">{BUSINESS_INFO.contacts.concrete.name}</h3>
            <p className="text-xs text-white/50 mt-1 mb-4">Driveways, patios, pool surrounds, stamped concrete, Bobcat grading, and full site prep.</p>
            <a href={`tel:${BUSINESS_INFO.contacts.concrete.phone}`} className="inline-block w-full text-center bg-[#1f8b2e] hover:bg-[#177a25] text-white font-bold py-2.5 rounded-lg text-sm transition-colors">
              Call {BUSINESS_INFO.contacts.concrete.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white border border-black/10 p-6 rounded-xl shadow-md"
          >
            <span className="text-xs text-[#1f8b2e] uppercase tracking-widest block mb-1">Commercial Contracting</span>
            <h3 className="text-xl font-bold text-[#1c1c1c]">{BUSINESS_INFO.contacts.commercial.name}</h3>
            <p className="text-xs text-[#1c1c1c]/50 mt-1 mb-4">Commercial concrete pads, structural flatwork, municipal projects, and large-scale site work.</p>
            <a href={`tel:${BUSINESS_INFO.contacts.commercial.phone}`} className="inline-block w-full text-center bg-black hover:bg-[#111] text-white font-bold py-2.5 rounded-lg text-sm transition-colors">
              Call {BUSINESS_INFO.contacts.commercial.phone}
            </a>
          </motion.div>
        </div>

        {/* Footer logo placeholder */}
        <div className="mt-10 flex justify-center">
          <div className="h-16 w-40 border-2 border-dashed border-[#1f8b2e]/40 rounded-lg flex items-center justify-center text-xs text-[#1f8b2e]/60 font-semibold tracking-wider uppercase">
            LOGO GOES HERE
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-[#1c1c1c]/40">
          Wint Construction • w/ Scott's Landscape & Fence • PO Box 60406 • Rochester, NY 14606
        </div>
      </section>

      {/* MOBILE BOTTOM NAV */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-3 z-50 flex gap-3 items-center pb-safe">
        <a
          href={`tel:${BUSINESS_INFO.contacts.concrete.phone}`}
          className="flex-1 bg-white/10 border border-white/15 text-white rounded-xl py-3 px-2 text-center text-xs font-bold tracking-tight flex items-center justify-center gap-1.5"
        >
          Scott (Concrete)
        </a>
        <a
          href={`tel:${BUSINESS_INFO.contacts.commercial.phone}`}
          className="flex-1 bg-white/10 border border-white/15 text-white rounded-xl py-3 px-2 text-center text-xs font-bold tracking-tight flex items-center justify-center gap-1.5"
        >
          Aaron (Comm)
        </a>
        <a
          href="#contact"
          className="flex-1 bg-[#1f8b2e] text-white rounded-xl py-3 px-2 text-center text-xs font-bold tracking-tight shadow-md shadow-[#1f8b2e]/40"
        >
          Free Quote
        </a>
      </div>

    </div>
  );
}
