"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

interface Product {
  id: string;
  name: string;
  collection: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <Link href={`/product/${product.id}`}>
        <div
          className="group relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Container */}
          <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-6">
            {/* Placeholder image - grayscale effect */}
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 grayscale"
            >
              {/* Replace with actual product image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-40 bg-gradient-to-b from-silver-dark/30 to-transparent rounded-sm" />
              </div>
            </motion.div>

            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-black/20"
            />

            {/* Quick Add Button */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{
                y: isHovered ? "0%" : "100%",
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="absolute bottom-0 left-0 right-0 p-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  // Add to cart logic
                }}
                className="w-full py-3 bg-black text-white text-xs tracking-ultrawide uppercase font-medium flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors duration-300"
              >
                <Plus size={14} strokeWidth={1.5} />
                <span>Sepete Ekle</span>
              </motion.button>
            </motion.div>

            {/* Category Tag */}
            <div className="absolute top-4 left-4">
              <span className="text-[10px] tracking-ultrawide uppercase text-white bg-black/60 px-3 py-1 backdrop-blur-sm">
                {product.category}
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            <p className="text-[10px] tracking-ultrawide uppercase text-silver-dark">
              {product.collection}
            </p>
            <h3 className="font-serif text-lg text-black group-hover:text-silver-dark transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-sm text-silver-dark font-light tracking-wide">
              ₺{product.price.toFixed(2)}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
