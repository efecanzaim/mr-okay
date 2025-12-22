"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Minus, Plus, Heart, Share2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import ProductCard from "@/components/ProductCard";

// Sample product data - in real app, this would come from API
const products: Record<string, {
  id: string;
  name: string;
  collection: string;
  price: number;
  description: string;
  notes: { top: string[]; heart: string[]; base: string[] };
  sizes: { ml: number; price: number }[];
}> = {
  "noir-absolute": {
    id: "noir-absolute",
    name: "Noir Absolute",
    collection: "Avant-Garde",
    price: 8850,
    description:
      "Modern erkekliğin cesur bir beyanı. Noir Absolute, elektrikli bir karabiber ve bergamot patlamasıyla açılır, dumanlı ud ve deri kalbine evrilir. Taban sıcak amber ve sandal ağacını ortaya çıkararak unutulmaz bir iz bırakır.",
    notes: {
      top: ["Karabiber", "Bergamot", "Pembe Biber"],
      heart: ["Ud", "Deri", "Safran"],
      base: ["Amber", "Sandal Ağacı", "Misk"],
    },
    sizes: [
      { ml: 30, price: 4350 },
      { ml: 50, price: 6450 },
      { ml: 100, price: 8850 },
    ],
  },
};

const relatedProducts = [
  { id: "midnight-deal", name: "Midnight Deal", collection: "Avant-Garde", price: 10500, image: "", category: "Avant-Garde" },
  { id: "silver-knight", name: "Silver Knight", collection: "Klasik", price: 7350, image: "", category: "Klasik" },
  { id: "boardroom", name: "Boardroom", collection: "Zarif", price: 9600, image: "", category: "Zarif" },
  { id: "urban-legend", name: "Urban Legend", collection: "Hafta Sonu", price: 5550, image: "", category: "Hafta Sonu" },
];

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products[productId] || products["noir-absolute"];
  
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Product Detail */}
      <section className="py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative aspect-[3/4] bg-gray-100 sticky top-32">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-32 h-48 bg-gradient-to-b from-silver-dark/20 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <p className="text-[10px] tracking-ultrawide uppercase text-silver-dark mb-2">
                  {product.collection}
                </p>
                <h1 className="font-serif text-4xl lg:text-5xl text-black mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl text-silver font-light">
                  ₺{selectedSize.price.toLocaleString('tr-TR')}
                </p>
              </div>

              <p className="text-silver-dark font-light leading-relaxed">
                {product.description}
              </p>

              {/* Size Selection */}
              <div>
                <p className="text-xs tracking-ultrawide uppercase text-silver mb-4">
                  Boyut
                </p>
                <div className="flex gap-4">
                  {product.sizes.map((size) => (
                    <button
                      key={size.ml}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 border text-sm transition-all duration-300 ${
                        selectedSize.ml === size.ml
                          ? "border-black text-black"
                          : "border-black/20 text-silver-dark hover:border-black/40"
                      }`}
                    >
                      {size.ml}ml
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <p className="text-xs tracking-ultrawide uppercase text-silver mb-4">
                  Adet
                </p>
                <div className="flex items-center border border-black/20 w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-silver hover:text-black transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-black">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-silver hover:text-black transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <MagneticButton variant="primary" size="lg" className="flex-1">
                  Sepete Ekle
                </MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 border border-black/20 hover:border-black/40 transition-colors"
                >
                  <Heart size={20} strokeWidth={1} className="text-silver" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 border border-black/20 hover:border-black/40 transition-colors"
                >
                  <Share2 size={20} strokeWidth={1} className="text-silver" />
                </motion.button>
              </div>

              {/* Fragrance Notes */}
              <div className="pt-8 border-t border-black/10">
                <p className="text-xs tracking-ultrawide uppercase text-silver mb-6">
                  Koku Notaları
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-[10px] tracking-ultrawide uppercase text-silver-dark mb-3">
                      Üst
                    </p>
                    <div className="space-y-2">
                      {product.notes.top.map((note) => (
                        <p key={note} className="text-sm text-black font-light">
                          {note}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-ultrawide uppercase text-silver-dark mb-3">
                      Kalp
                    </p>
                    <div className="space-y-2">
                      {product.notes.heart.map((note) => (
                        <p key={note} className="text-sm text-black font-light">
                          {note}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-ultrawide uppercase text-silver-dark mb-3">
                      Taban
                    </p>
                    <div className="space-y-2">
                      {product.notes.base.map((note) => (
                        <p key={note} className="text-sm text-black font-light">
                          {note}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[10px] tracking-ultrawide uppercase text-silver-dark mb-4">
              Koleksiyonunuzu Tamamlayın
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-black">
              Bunları da Beğenebilirsiniz
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
