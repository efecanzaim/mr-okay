"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function CollectionBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Businessman Collection */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="group"
          >
            <Link href="/collections/businessman">
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
                <motion.div
                  style={{ y }}
                  className="absolute inset-0 scale-110"
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-48 bg-gradient-to-b from-silver-dark/20 to-transparent" />
                    </div>
                  </div>
                </motion.div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                  <p className="text-[10px] tracking-ultrawide uppercase text-white/80 mb-2">
                    Erkekler İçin
                  </p>
                  <h3 className="font-serif text-3xl lg:text-4xl text-white mb-4 group-hover:text-silver-light transition-colors duration-500">
                    BUSINESSMAN
                  </h3>
                  <p className="text-sm text-white/70 font-light max-w-sm">
                    Erkekliğin cesur ifadesi. Dikkat çeken kokular.
                  </p>
                  <motion.div
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    className="h-px bg-white/50 mt-6"
                  />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Smartwoman Collection */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="group"
          >
            <Link href="/collections/smartwoman">
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
                <motion.div
                  style={{ y }}
                  className="absolute inset-0 scale-110"
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-28 h-44 bg-gradient-to-b from-silver/20 to-transparent rounded-sm" />
                    </div>
                  </div>
                </motion.div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                  <p className="text-[10px] tracking-ultrawide uppercase text-white/80 mb-2">
                    Kadınlar İçin
                  </p>
                  <h3 className="font-serif text-3xl lg:text-4xl text-white mb-4 group-hover:text-silver-light transition-colors duration-500">
                    SMARTWOMAN
                  </h3>
                  <p className="text-sm text-white/70 font-light max-w-sm">
                    Her notada zarif güven. Güçlendiren kokular.
                  </p>
                  <motion.div
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    className="h-px bg-white/50 mt-6"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
