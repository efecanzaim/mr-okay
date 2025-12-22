"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";

const categoryInfo: Record<string, { title: string; description: string }> = {
  "avant-garde": {
    title: "Avant-Garde",
    description:
      "Cesur. Alışılmadık. Unutulmaz. Kalıpları kırmaya cesaret edenler için.",
  },
  klasik: {
    title: "Klasik",
    description:
      "Modern erkek için zamansız sofistike. Asla modası geçmeyen kokular.",
  },
  zarif: {
    title: "Zarif",
    description:
      "Lüksün rafine özü. İncelik ve sofistikenin buluşması.",
  },
  tatil: {
    title: "Tatil",
    description:
      "Sezonluk özel üretimler. Kutlamanın büyüsünü yakalayın.",
  },
  "hafta-sonu": {
    title: "Hafta Sonu",
    description:
      "Gündelik zarafet. Rahat sofistike anlar için.",
  },
};

const categoryProducts: Record<string, Array<{
  id: string;
  name: string;
  collection: string;
  price: number;
  image: string;
  category: string;
}>> = {
  "avant-garde": [
    { id: "noir-absolute", name: "Noir Absolute", collection: "Avant-Garde", price: 8850, image: "", category: "Avant-Garde" },
    { id: "midnight-deal", name: "Midnight Deal", collection: "Avant-Garde", price: 10500, image: "", category: "Avant-Garde" },
    { id: "dark-matter", name: "Dark Matter", collection: "Avant-Garde", price: 11550, image: "", category: "Avant-Garde" },
  ],
  klasik: [
    { id: "silver-knight", name: "Silver Knight", collection: "Klasik", price: 7350, image: "", category: "Klasik" },
    { id: "grey-flannel", name: "Grey Flannel", collection: "Klasik", price: 6750, image: "", category: "Klasik" },
    { id: "timeless", name: "Timeless", collection: "Klasik", price: 7950, image: "", category: "Klasik" },
  ],
  zarif: [
    { id: "boardroom", name: "Boardroom", collection: "Zarif", price: 9600, image: "", category: "Zarif" },
    { id: "silk-tie", name: "Silk Tie", collection: "Zarif", price: 8550, image: "", category: "Zarif" },
  ],
  tatil: [
    { id: "winter-solstice", name: "Winter Solstice", collection: "Tatil", price: 8250, image: "", category: "Tatil" },
    { id: "festive-noir", name: "Festive Noir", collection: "Tatil", price: 8850, image: "", category: "Tatil" },
  ],
  "hafta-sonu": [
    { id: "urban-legend", name: "Urban Legend", collection: "Hafta Sonu", price: 5550, image: "", category: "Hafta Sonu" },
    { id: "weekend-escape", name: "Weekend Escape", collection: "Hafta Sonu", price: 5850, image: "", category: "Hafta Sonu" },
  ],
};

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const info = categoryInfo[category] || { title: "Koleksiyon", description: "" };
  const products = categoryProducts[category] || [];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-white" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-[10px] tracking-ultrawide uppercase text-silver-dark mb-4">
            İş Adamı
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-black">
            {info.title}
          </h1>
          <p className="text-lg text-silver-dark font-light mt-4 max-w-xl mx-auto">
            {info.description}
          </p>
        </motion.div>
      </section>

      {/* Product Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <p className="text-xs text-silver-dark">
              {products.length} {products.length === 1 ? "Ürün" : "Ürün"}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
