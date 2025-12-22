"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";

const smartwomanProducts = [
  {
    id: "midnight-silk",
    name: "Midnight Silk",
    collection: "İmza",
    price: 9600,
    image: "/products/midnight-silk.jpg",
    category: "İmza",
  },
  {
    id: "velvet-rose",
    name: "Velvet Rose",
    collection: "Çiçeksi",
    price: 8250,
    image: "/products/velvet-rose.jpg",
    category: "Çiçeksi",
  },
  {
    id: "pearl-essence",
    name: "Pearl Essence",
    collection: "Taze",
    price: 7350,
    image: "/products/pearl-essence.jpg",
    category: "Taze",
  },
  {
    id: "noir-femme",
    name: "Noir Femme",
    collection: "Yoğun",
    price: 10500,
    image: "/products/noir-femme.jpg",
    category: "Yoğun",
  },
  {
    id: "crystal-dawn",
    name: "Crystal Dawn",
    collection: "Taze",
    price: 6750,
    image: "/products/crystal-dawn.jpg",
    category: "Taze",
  },
  {
    id: "satin-nights",
    name: "Satin Nights",
    collection: "İmza",
    price: 8850,
    image: "/products/satin-nights.jpg",
    category: "İmza",
  },
  {
    id: "ivory-musk",
    name: "Ivory Musk",
    collection: "Duygusal",
    price: 8550,
    image: "/products/ivory-musk.jpg",
    category: "Duygusal",
  },
  {
    id: "silver-moon",
    name: "Silver Moon",
    collection: "Çiçeksi",
    price: 7950,
    image: "/products/silver-moon.jpg",
    category: "Çiçeksi",
  },
];

export default function SmartwomanCollectionPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-white" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-[10px] tracking-ultrawide uppercase text-silver-dark mb-4">
            Koleksiyon
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-black">
            SMARTWOMAN
          </h1>
          <p className="text-lg text-silver-dark font-light mt-4 max-w-xl mx-auto">
            Her notada zarif özgüven. Kendi kaderini şekillendiren kadınlar 
            için tasarlanmış kokular.
          </p>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {["Tümü", "İmza", "Çiçeksi", "Taze", "Yoğun", "Duygusal"].map(
                (filter) => (
                  <button
                    key={filter}
                    className={`text-xs tracking-ultrawide uppercase py-2 px-4 border transition-all duration-300 ${
                      filter === "Tümü"
                        ? "border-black text-black"
                        : "border-black/20 text-silver-dark hover:border-black/40 hover:text-black"
                    }`}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>
            <p className="text-xs text-silver-dark">
              {smartwomanProducts.length} Ürün
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {smartwomanProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Collection Story */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <p className="text-[10px] tracking-ultrawide uppercase text-silver-dark mb-6">
              SMARTWOMAN Felsefesi
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-black mb-8 leading-tight">
              &ldquo;Güç gürültülü değildir. Odadan ayrıldıktan çok sonra 
              bile kalıcı olan sessiz özgüventir.&rdquo;
            </h2>
            <p className="text-silver-dark font-light leading-relaxed">
              SMARTWOMAN koleksiyonu, modern kadınlığın çok yönlü doğasını 
              kutlar. Toplantı odalarından gala gecelerine, bu kokular 
              güçlendirmek ve ilham vermek için tasarlandı.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
