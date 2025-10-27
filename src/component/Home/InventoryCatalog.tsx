"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Product data derived from provided image list
// Each product has 4-5 placeholder images for the explore slider
const PRODUCTS = [
  {
    title: "Cables",
    desc: "Industrial-grade electrical and signal cables for oil & gas applications.",
    cover: "/cable.jpg",
    images: ["/cable.jpg", "/Slider/banner_4.jpg", "/banner-contact.jpg", "/bg-about.jpg"],
  },
  {
    title: "Valves",
    desc: "Gate, globe, check, ball and control valves — surplus and new-old-stock.",
    cover: "/vavle.webp",
    images: ["/vavle.webp", "/Slider/banner_3.jpg", "/banner-contact.jpg", "/bg-about.jpg"],
  },
  {
    title: "Pipes",
    desc: "Carbon and stainless pipes in various schedules and diameters.",
    cover: "/globe.svg",
    images: ["/pip.jpg", "/Slider/banner_3.jpg", "/Slider/banner_4.jpg", "/bg-about.jpg"],
  },
  {
    title: "Pipe Fittings & Flanges",
    desc: "Butt-weld fittings, forged fittings, and flanges in common ratings.",
    cover: "/fit.jpg",
    images: ["/fit.jpg", "/Slider/banner_4.jpg", "/Slider/banner_3.jpg", "/banner-contact.jpg"],
  },
  {
    title: "Fasteners",
    desc: "Stud bolts, nuts, washers — coated and uncoated options.",
    cover: "/file.svg",
    images: ["/Slider/banner_3.jpg", "/banner-contact.jpg", "/bg-about.jpg", "/Slider/banner_4.jpg"],
  },
  {
    title: "E & I Material",
    desc: "Electrical and instrumentation components and accessories.",
    cover: "/globe.svg",
    images: ["/bg-about.jpg", "/Slider/banner_3.jpg", "/Slider/banner_4.jpg", "/banner-contact.jpg"],
  },
  {
    title: "Gaskets",
    desc: "Spiral wound, ring type joints, and sheet gaskets.",
    cover: "/window.svg",
    images: ["/Slider/banner_4.jpg", "/bg-about.jpg", "/Slider/banner_3.jpg", "/banner-contact.jpg"],
  },
  {
    title: "Structural Material",
    desc: "Beams, channels, angles, and plates for structural applications.",
    cover: "/file.svg",
    images: ["/bg-about.jpg", "/banner-contact.jpg", "/Slider/banner_3.jpg", "/Slider/banner_4.jpg"],
  },
  {
    title: "Plates, Sheets, Coils",
    desc: "Carbon and stainless plates, sheets, and coils in common grades.",
    cover: "/globe.svg",
    images: ["/banner-contact.jpg", "/bg-about.jpg", "/Slider/banner_3.jpg", "/Slider/banner_4.jpg"],
  },
];

const bannerStyles = "relative w-full overflow-hidden bg-white";

const InventoryCatalog: React.FC = () => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <section className="w-full bg-white">
      {/* Banner */}
      <div className={bannerStyles}>
        <div className="relative h-[28vh] sm:h-[36vh] md:h-[44vh]">
          <Image src="/pip.jpg" alt="Inventory banner" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <motion.h1
                initial={{ y: 18, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
              >
                INVENTORY
              </motion.h1>
              <motion.p
                initial={{ y: 14, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mt-2 max-w-2xl text-white/90"
              >
                Explore oil & gas surplus categories. Images are placeholders — real product galleries coming soon.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="container mx-auto px-4 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PRODUCTS.map((p, idx) => (
            <article key={p.title} className="rounded-md border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="relative h-48">
                <Image src={p.images[0] || p.cover} alt={p.title} fill className="object-cover" sizes="(min-width: 1024px) 400px, 100vw" />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold text-gray-900">{p.title}</h2>
                <p className="mt-2 text-sm text-gray-700 min-h-[40px]">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => setOpenIdx(idx)}
                    className="inline-flex items-center justify-center rounded-md bg-[#2474A5] px-4 py-2 text-white text-sm font-semibold hover:bg-[#1f6792]"
                  >
                    Explore
                  </button>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>

      {/* Explore modal slider */}
      <AnimatePresence>
        {openIdx !== null && (
          <Modal onClose={() => setOpenIdx(null)}>
            <Gallery images={PRODUCTS[openIdx].images} title={PRODUCTS[openIdx].title} />
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InventoryCatalog;

// Modal
const Modal: React.FC<{ onClose: () => void; children: React.ReactNode }> = ({ onClose, children }) => {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-5xl rounded-xl bg-white/95 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded hover:bg-gray-100"
        >
          <RxCross2 className="text-xl" />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

// Gallery slider inside modal
const Gallery: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
  const [index, setIndex] = React.useState(0);

  const goTo = (i: number) => setIndex(((i % images.length) + images.length) % images.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // keyboard navigation
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  return (
    <div className="p-4 pt-12">
      <h3 className="px-1 text-lg font-bold text-gray-900">{title}</h3>
      <div className="mt-3 relative h-[52vh] rounded-xl overflow-hidden bg-gray-100">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragElastic={0.04}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) next();
              if (info.offset.x > 80) prev();
            }}
            initial={{ opacity: 0.15, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.15, scale: 1.02 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image src={images[index]} alt={`${title} ${index + 1}`} fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              aria-label="Previous"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/80 backdrop-blur text-gray-900 shadow-md hover:bg-white"
            >
              <FiChevronLeft className="text-2xl" />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/80 backdrop-blur text-gray-900 shadow-md hover:bg-white"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 flex items-center gap-3 overflow-x-auto px-1 pb-1">
          {images.map((img, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border ${active ? "border-[#2474A5] ring-2 ring-[#2474A5]/60" : "border-gray-200"}`}
              >
                <Image src={img} alt={`thumb ${i + 1}`} fill className="object-cover" sizes="200px" />
              </button>
            );
          })}
        </div>
      )}

      {/* Fraction indicator + CTA */}
      <div className="mt-2 flex items-center justify-between px-1 pb-4">
        <div className="text-sm text-gray-600">{index + 1} / {images.length}</div>
        <Link href="/contact-us" className="inline-flex items-center justify-center rounded-md bg-[#2474A5] px-4 py-2 text-white text-sm font-semibold shadow hover:bg-[#1f6792]">
          Contact Us
        </Link>
      </div>
    </div>
  );
};
