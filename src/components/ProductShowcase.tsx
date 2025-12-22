"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    id: "noir-absolute",
    name: "Noir Absolute",
    collection: "Avangard",
    price: 295.00,
    image: "/products/noir-absolute.jpg",
    category: "İş Adamı",
  },
  {
    id: "silver-mist",
    name: "Silver Mist",
    collection: "Zarif",
    price: 245.00,
    image: "/products/silver-mist.jpg",
    category: "İş Adamı",
  },
  {
    id: "midnight-silk",
    name: "Midnight Silk",
    collection: "Klasik",
    price: 320.00,
    image: "/products/midnight-silk.jpg",
    category: "Akıllı Kadın",
  },
  {
    id: "white-obsession",
    name: "White Obsession",
    collection: "Sınırlı Üretim",
    price: 450.00,
    image: "/products/white-obsession.jpg",
    category: "Unisex",
  },
];

export default function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-[10px] tracking-ultrawide uppercase text-silver-dark mb-4">
            Seçkin Koleksiyon
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-black">
            İmza Kokular
          </h2>
          <p className="text-sm text-silver-dark font-light mt-4 max-w-lg mx-auto">
            Her koku bir şaheser, nadir malzemeler ve 
            ödünsüz detay özeniyle tasarlandı.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 lg:mt-24"
        >
          <Link href="/collections/businessman">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-12 py-4 border border-black/20 text-xs tracking-ultrawide uppercase font-light overflow-hidden transition-all duration-500 hover:border-black/40"
            >
              <span className="relative z-10 text-silver-dark group-hover:text-black transition-colors duration-300">
                Tüm Kokuları Keşfet
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
