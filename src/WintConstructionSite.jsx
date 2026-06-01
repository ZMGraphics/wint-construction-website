import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Scott's Landscape brand green palette
const ACCENT = "#1f8b2e";
const ACCENT_HOVER = "#177a25";
const DARK = "#1a1a1a";
const DARKER = "#111";
const LIGHT_BG = "#f5f5f5";
const WARM_GRAY = "#eaeaea";
const TEXT = "#2c2c2c";

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

const SERVICES = [
  {
    img: "/images/site/concrete-services.jpg",
    title: "Concrete Flatwork",
    desc: "Driveways, sidewalks, patios, pool surrounds, and garage pads. We pour thick, reinforced slabs with proper sub-base prep. Every pour uses wet concrete mix — never dry dumps into dry holes. Built to handle Rochester's freeze-thaw cycles without cracking.",
    tags: ["Driveways", "Patios", "Sidewalks", "Pool Surrounds"]
  },
  {
    img: "/images/site/concrete-patio.jpg",
    title: "Stamped & Decorative",
    desc: "Professional stamped patterns that mimic natural stone, brick, and slate. Brushed finishes for slip resistance around pools. Integral color options to match your home exterior. Custom decorative stone installations and pillars.",
    tags: ["Stamped", "Brushed", "Colored", "Stone"]
  },
  {
    img: "/images/site/inner-banner.jpg",
    title: "Excavation & Site Prep",
    desc: "Bobcat excavation, lot grading, and complete site prep for new builds and renovations. Pool removals, fill-ins, and re-seeding. We handle the dirt work so your concrete has a proper foundation underneath it.",
    tags: ["Bobcat", "Grading", "Pool Removal", "Fill-In"]
  }
];

export default function WintConstructionSite() {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [activeService, setActiveService] = useState(0);

  return (
    <div className={`min-h-screen bg-[${LIGHT_BG}] text-[${TEXT}] antialiased`} style={{ background: LIGHT_BG, color: TEXT }}>

      {/* ═══ TOP BAR ═══ */}
      <div className="w-full bg-[#1a1a1a] text-white/50 text-[10px] tracking-widest uppercase py-2 px-4 text-center hidden sm:block">
        Scott's Landscape & Fence Family of Companies &nbsp;•&nbsp; Serving Rochester & Western NY Since 1992 &nbsp;•&nbsp; Licensed & Insured
      </div>

      {/* ═══ HEADER ═══ */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-black/8 py-4 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 border-2 border-dashed border-[#d4a24e]/50 rounded-lg flex items-center justify-center text-[8px] text-[#d4a24e] font-bold">
            LOGO
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight block" style={{ color: DARK }}>WINT <span style={{ color: ACCENT }}>CONSTRUCTION</span></span>
            <span className="text-[9px] tracking-widest uppercase block -mt-0.5" style={{ color: `${TEXT}80` }}>Concrete & Excavation</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: `${TEXT}99` }}>
          <a href="#work" className="hover:text-[#d4a24e] transition-colors">Portfolio</a>
          <a href="#services" className="hover:text-[#d4a24e] transition-colors">Services</a>
          <a href="#reviews" className="hover:text-[#d4a24e] transition-colors">Reviews</a>
          <a href="#contact" className="text-white font-bold px-5 py-2.5 rounded-lg transition-all active:scale-95" style={{ background: ACCENT }}>
            Free Estimate
          </a>
        </nav>
        <a href="#contact" className="md:hidden text-xs font-bold px-3 py-1.5 rounded text-white" style={{ background: ACCENT }}>
          Get Quote
        </a>
      </header>

      {/* ═══ HERO — FULL BLEED CENTERED ═══ */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/site/concrete-1.jpg" alt="Wint Construction concrete work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs uppercase tracking-[0.25em] font-semibold mb-6 px-4 py-1.5 rounded-full border"
            style={{ color: ACCENT, borderColor: `${ACCENT}50`, background: `${ACCENT}15` }}
          >
            Rochester, NY &nbsp;•&nbsp; Est. 1992
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-white"
          >
            Heavy Concrete.<br />
            <span style={{ color: ACCENT }}>Done Right.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg mt-6 max-w-xl mx-auto leading-relaxed"
          >
            We pour thick slabs, stamp real patterns, and run Bobcat excavation across Western New York. Scott Blain and his crew have been setting heavy concrete flatwork that survives brutal freeze-thaw cycles since 1992.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a href={`tel:${BUSINESS_INFO.contacts.concrete.phone}`} className="text-white font-bold px-8 py-4 rounded-lg transition-all active:scale-95 text-base shadow-xl" style={{ background: ACCENT }}>
              Call Scott — {BUSINESS_INFO.contacts.concrete.phone}
            </a>
            <a href="#work" className="border border-white/25 bg-white/10 backdrop-blur-sm hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-lg transition-all text-base">
              See Our Work
            </a>
          </motion.div>
        </div>

        {/* Stats strip overlaying bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
            {[
              { num: "30+", label: "Years in Rochester" },
              { num: "500+", label: "Projects Completed" },
              { num: "100%", label: "Wet Concrete Mixes" },
              { num: "36\"", label: "Deep Frost-Line Posts" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="py-4 sm:py-5 text-center"
              >
                <span className="text-2xl sm:text-3xl font-bold block" style={{ color: ACCENT }}>{stat.num}</span>
                <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES — TABBED LAYOUT ═══ */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold block mb-2" style={{ color: ACCENT }}>What We Do</span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
            >
              Full Service, One Crew
            </motion.h2>
          </div>

          {/* Service tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {SERVICES.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeService === i
                    ? 'text-white shadow-lg'
                    : 'bg-black/5 hover:bg-black/10'
                }`}
                style={activeService === i ? { background: ACCENT, color: '#fff' } : {}}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Active service detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl border border-black/8"
            >
              <div className="h-64 lg:h-auto">
                <img src={SERVICES[activeService].img} alt={SERVICES[activeService].title} className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-8 sm:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-3">{SERVICES[activeService].title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: `${TEXT}99` }}>{SERVICES[activeService].desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {SERVICES[activeService].tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: `${ACCENT}15`, color: ACCENT }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="text-white font-bold px-6 py-3 rounded-lg text-sm inline-block self-start transition-all active:scale-95" style={{ background: ACCENT }}>
                  Get a Free Estimate
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══ PORTFOLIO — BENTO GRID ═══ */}
      <section id="work" className="py-20 px-4" style={{ background: WARM_GRAY }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold block mb-2" style={{ color: ACCENT }}>Portfolio</span>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="text-3xl sm:text-4xl font-bold tracking-tight"
              >
                Recent Concrete Work
              </motion.h2>
            </div>
            <p className="text-sm max-w-xs" style={{ color: `${TEXT}70` }}>
              Every photo is a real job by our crew across Monroe County. Tap to view full size.
            </p>
          </div>

          {/* Bento grid — 2 large + 4 small on first row, then 3+3 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY_PHOTOS.map((photo, idx) => {
              const isLarge = idx === 0 || idx === 3;
              return (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.05, 0.3) }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setLightboxIdx(idx)}
                  className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-sm ${
                    isLarge ? 'col-span-2 row-span-2 aspect-[4/3]' : 'aspect-square'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ LIGHTBOX ═══ */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxIdx(null)}
          >
            <motion.img
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              src={GALLERY_PHOTOS[lightboxIdx].src}
              alt={GALLERY_PHOTOS[lightboxIdx].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition-colors"
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % GALLERY_PHOTOS.length); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition-colors"
            >
              ›
            </button>
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center transition-colors"
            >
              ×
            </button>
            <div className="absolute bottom-4 text-center text-white/50 text-xs font-medium">
              {lightboxIdx + 1} / {GALLERY_PHOTOS.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ WHY US — HORIZONTAL FEATURES ═══ */}
      <section className="py-20 px-4" style={{ background: DARK, color: '#fff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold block mb-2" style={{ color: ACCENT }}>Why Wint Construction</span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
            >
              No Shortcuts, No Dry Mix
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Wet Concrete Only", desc: "We mix real wet concrete on every job. No dumping dry bags into dry holes and hoping for the best." },
              { title: "Frost-Line Depth", desc: "We dig to 36 inches minimum. Your slabs and footings won't heave when January hits Rochester." },
              { title: "Bobcat On-Site", desc: "Full excavation capability. We grade, dig, and prep your site — you don't need a separate contractor." },
              { title: "Owner-Operated", desc: "Scott oversees every pour. You talk to the guy doing the work, not a sales rep in another state." }
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-white/10 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold mb-4" style={{ background: `${ACCENT}20`, color: ACCENT }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-base mb-2">{feat.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REVIEWS — ALTERNATING LARGE QUOTES ═══ */}
      <section id="reviews" className="py-20 px-4" style={{ background: LIGHT_BG }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold block mb-2" style={{ color: ACCENT }}>Customer Reviews</span>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="text-3xl sm:text-4xl font-bold tracking-tight"
              >
                What People Say
              </motion.h2>
            </div>
            <div className="flex items-center gap-2 bg-white border border-black/8 rounded-full px-4 py-2 shadow-sm">
              <div className="flex text-lg" style={{ color: ACCENT }}>★★★★★</div>
              <span className="text-sm font-semibold">4.25 / 5</span>
              <span className="text-xs" style={{ color: `${TEXT}60` }}>• 53 reviews</span>
            </div>
          </div>

          <div className="space-y-4">
            {BUSINESS_INFO.testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white rounded-xl p-6 sm:p-8 border border-black/6 shadow-sm flex flex-col sm:flex-row gap-4 sm:gap-8 items-start"
              >
                <div className="flex-shrink-0 flex text-sm gap-0.5" style={{ color: ACCENT }}>
                  {Array.from({ length: t.stars }, (_, i) => <span key={i}>★</span>)}
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base leading-relaxed italic" style={{ color: `${TEXT}cc` }}>"{t.text}"</p>
                  <div className="mt-3 flex items-center gap-3 text-xs" style={{ color: `${TEXT}70` }}>
                    <span className="font-bold" style={{ color: TEXT }}>{t.author}</span>
                    <span>•</span>
                    <span>{t.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT — SPLIT LAYOUT ═══ */}
      <section id="contact" className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left — dark info panel */}
          <div className="p-10 sm:p-16 flex flex-col justify-center" style={{ background: DARK, color: '#fff' }}>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold block mb-3" style={{ color: ACCENT }}>Get Your Free Estimate</span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            >
              Talk to Scott Directly
            </motion.h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md">
              Every slab is different. We come out, look at your grade, check drainage, and give you an honest quote. No call centers, no automated systems — just the guy who'll oversee your pour.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: `${ACCENT}20`, color: ACCENT }}>SC</div>
                <div>
                  <span className="font-bold text-white block">{BUSINESS_INFO.contacts.concrete.name}</span>
                  <span className="text-xs text-white/40 block">Concrete, Flatwork & Excavation</span>
                  <a href={`tel:${BUSINESS_INFO.contacts.concrete.phone}`} className="text-sm font-semibold mt-1 block" style={{ color: ACCENT }}>{BUSINESS_INFO.contacts.concrete.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: `${ACCENT}20`, color: ACCENT }}>AR</div>
                <div>
                  <span className="font-bold text-white block">{BUSINESS_INFO.contacts.commercial.name}</span>
                  <span className="text-xs text-white/40 block">Commercial Contracting</span>
                  <a href={`tel:${BUSINESS_INFO.contacts.commercial.phone}`} className="text-sm font-semibold mt-1 block" style={{ color: ACCENT }}>{BUSINESS_INFO.contacts.commercial.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: `${ACCENT}20`, color: ACCENT }}>CJ</div>
                <div>
                  <span className="font-bold text-white block">{BUSINESS_INFO.contacts.residential.name}</span>
                  <span className="text-xs text-white/40 block">Residential & Scheduling</span>
                  <a href={`tel:${BUSINESS_INFO.contacts.residential.phone}`} className="text-sm font-semibold mt-1 block" style={{ color: ACCENT }}>{BUSINESS_INFO.contacts.residential.phone}</a>
                </div>
              </div>
            </div>

            <a href={`tel:${BUSINESS_INFO.contacts.concrete.phone}`} className="text-white font-bold px-8 py-4 rounded-lg transition-all active:scale-95 text-center text-base shadow-lg self-start" style={{ background: ACCENT }}>
              Call Now for Free Estimate
            </a>
          </div>

          {/* Right — image */}
          <div className="hidden lg:block relative">
            <img src="/images/site/concrete-3.jpg" alt="Wint Construction concrete project" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10" />
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-10 px-4 text-center" style={{ background: DARKER, color: 'rgba(255,255,255,0.3)' }}>
        <div className="flex justify-center mb-4">
          <div className="h-14 w-36 border-2 border-dashed rounded-lg flex items-center justify-center text-[10px] font-semibold tracking-wider uppercase" style={{ borderColor: `${ACCENT}40`, color: `${ACCENT}60` }}>
            LOGO GOES HERE
          </div>
        </div>
        <div className="text-xs space-y-1">
          <p>Wint Construction &nbsp;•&nbsp; w/ Scott's Landscape & Fence</p>
          <p>PO Box 60406 &nbsp;•&nbsp; Rochester, NY 14606</p>
          <p className="pt-2" style={{ color: 'rgba(255,255,255,0.15)' }}>Built by ZM Graphics</p>
        </div>
      </footer>

      {/* ═══ MOBILE BOTTOM NAV ═══ */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 backdrop-blur-md border-t border-white/10 px-4 py-3 z-50 flex gap-2 items-center pb-safe" style={{ background: 'rgba(26,26,26,0.97)' }}>
        <a
          href={`tel:${BUSINESS_INFO.contacts.concrete.phone}`}
          className="flex-1 border border-white/15 text-white rounded-xl py-3 px-2 text-center text-xs font-bold tracking-tight"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          Call Scott
        </a>
        <a
          href={`tel:${BUSINESS_INFO.contacts.commercial.phone}`}
          className="flex-1 border border-white/15 text-white rounded-xl py-3 px-2 text-center text-xs font-bold tracking-tight"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          Call Aaron
        </a>
        <a
          href="#contact"
          className="flex-1 text-white rounded-xl py-3 px-2 text-center text-xs font-bold tracking-tight shadow-md"
          style={{ background: ACCENT }}
        >
          Free Quote
        </a>
      </div>

    </div>
  );
}
