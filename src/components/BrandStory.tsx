"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function BrandStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-40 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[800px] h-[800px] bg-gradient-radial from-silver-dark/10 to-transparent rounded-full blur-3xl -right-40 top-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] bg-gray-100">
              {/* Placeholder - Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-60 bg-gradient-to-b from-silver-dark/20 to-transparent" />
                </div>
              </div>
              
              {/* Decorative border */}
              <div className="absolute -inset-4 border border-black/10 -z-10" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-[10px] tracking-ultrawide uppercase text-silver-dark mb-6">
              Felsefemiz
            </p>
            
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-black leading-[1.1] mb-8">
              İfade
              <br />
              <span className="text-gradient-silver">Sanatı</span>
            </h2>

            <div className="space-y-6 text-silver-dark font-light leading-relaxed">
              <p>
                Mr Okay'da kokunun en üst düzey kendini ifade biçimi olduğuna 
                inanıyoruz. Tek kelime etmeden önce kim olduğunuz hakkında 
                çok şey anlatan görünmez aksesuar.
              </p>
              <p>
                Usta parfümörlerimiz dünyanın dört bir yanından en nadir 
                malzemeleri tedarik ederek, trendleri aşan ve zamansız 
                imzalara dönüşen kompozisyonlar yaratıyor.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10"
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-xs tracking-ultrawide uppercase text-black border-b border-black/30 pb-2 hover:border-black transition-colors duration-300"
                >
                  Hikayemizi Keşfet
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-black/10">
              {[
                { number: "47", label: "Eşsiz Koku" },
                { number: "12", label: "Yıllık Tecrübe" },
                { number: "89", label: "Ülke" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <p className="font-serif text-3xl lg:text-4xl text-black mb-2">
                    {stat.number}
                  </p>
                  <p className="text-[10px] tracking-ultrawide uppercase text-silver-dark">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
