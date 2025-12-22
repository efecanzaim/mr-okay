"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {/* Placeholder gradient - replace with actual video */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-white">
          {/* Animated smoke effect using CSS */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute w-[500px] h-[500px] bg-gradient-radial from-silver-dark/30 to-transparent rounded-full blur-3xl animate-float -top-20 -left-20" />
            <div className="absolute w-[400px] h-[400px] bg-gradient-radial from-silver/20 to-transparent rounded-full blur-3xl animate-float animation-delay-2000 top-1/3 right-0" />
            <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-black/5 to-transparent rounded-full blur-3xl animate-float animation-delay-4000 bottom-0 left-1/3" />
          </div>
        </div>
        
        {/* Optional: Add actual video here */}
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-video"
        >
          <source src="/videos/hero-smoke.mp4" type="video/mp4" />
        </video> */}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
          className="text-center max-w-4xl"
        >
          {/* Pre-heading */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[10px] md:text-xs text-silver-dark uppercase mb-8 font-light"
          >
            Koku Sanatı
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-black leading-[0.9] tracking-tight"
          >
            Özü
            <br />
            <span className="text-gradient-silver">Kucakla</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-sm md:text-base text-silver-dark font-light tracking-wider mt-8 max-w-lg mx-auto leading-relaxed"
          >
            Zarafetin duyusallıkla buluştuğu yer. İz bırakanlar 
            için tasarlanmış kokuları keşfedin.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-12"
          >
            <Link href="/collections/businessman">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-4 border border-black/30 text-xs tracking-ultrawide uppercase font-light overflow-hidden transition-all duration-500 hover:border-black/60"
              >
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
                  Keşfet
                </span>
                <motion.div
                  className="absolute inset-0 bg-black"
                  initial={{ y: "100%" }}
                  whileHover={{ y: "0%" }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-3"
          >
            <span className="text-[10px] tracking-ultrawide text-silver-dark uppercase">
              Kaydir
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-silver-dark to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
