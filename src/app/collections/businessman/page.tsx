"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";

const businessmanProducts = [
  {
    id: "noir-absolute",
    name: "Noir Absolute",
    collection: "Avant-Garde",
    price: 8850,
    image: "/products/noir-absolute.jpg",
    category: "Avant-Garde",
  },
  {
    id: "silver-knight",
    name: "Silver Knight",
    collection: "Klasik",
    price: 7350,
    image: "/products/silver-knight.jpg",
    category: "Klasik",
  },
  {
    id: "urban-legend",
    name: "Urban Legend",
    collection: "Hafta Sonu",
    price: 5550,
    image: "/products/urban-legend.jpg",
    category: "Hafta Sonu",
  },
  {
    id: "boardroom",
    name: "Boardroom",
    collection: "Zarif",
    price: 9600,
    image: "/products/boardroom.jpg",
    category: "Zarif",
  },
  {
    id: "winter-solstice",
    name: "Winter Solstice",
    collection: "Tatil",
    price: 8250,
    image: "/products/winter-solstice.jpg",
    category: "Tatil",
  },
  {
    id: "midnight-deal",
    name: "Midnight Deal",
    collection: "Avant-Garde",
    price: 10500,
    image: "/products/midnight-deal.jpg",
    category: "Avant-Garde",
  },
  {
    id: "grey-flannel",
    name: "Grey Flannel",
    collection: "Klasik",
    price: 6750,
    image: "/products/grey-flannel.jpg",
    category: "Klasik",
  },
  {
    id: "weekend-escape",
    name: "Weekend Escape",
    collection: "Hafta Sonu",
    price: 5850,
    image: "/products/weekend-escape.jpg",
    category: "Hafta Sonu",
  },
];

export default function BusinessmanCollectionPage() {
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
            İş Adamı
          </h1>
          <p className="text-lg text-silver-dark font-light mt-4 max-w-xl mx-auto">
            Erkekliğin cesur ifadeleri. Dikkat çeken ve kalıcı izlenimler 
            bırakan kokular.
          </p>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {["Tümü", "Avant-Garde", "Klasik", "Zarif", "Tatil", "Hafta Sonu"].map(
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
              {businessmanProducts.length} Ürün
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {businessmanProducts.map((product, index) => (
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
              İş Adamı Felsefesi
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-black mb-8 leading-tight">
              &ldquo;Başarının bir kokusu var. Tek kelime etmeden önce 
              giydiğiniz özgüven o.&rdquo;
            </h2>
            <p className="text-silver-dark font-light leading-relaxed">
              İş Adamı koleksiyonu, ilk izlenimlerin önemini anlayan erkekler 
              için tasarlandı. Bu koleksiyondaki her koku, otorite, 
              sofistike ve unutulmaz bir varlık yansıtmak için tasarlandı.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
