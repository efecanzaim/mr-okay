"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { Pause, Play } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <section ref={ref} className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <motion.div style={{ y, scale }} className="absolute top-0 left-0 w-screen h-screen">
            <motion.video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
              className="absolute left-1/2 -translate-x-1/2 top-0 h-[120vh] w-[120vw] object-cover"
        >
          <source src="/images/hero_video.mp4" type="video/mp4" />
            </motion.video>

        {/* Video Control Button */}
        <motion.button
          onClick={toggleVideo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 right-12 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 hover:border-white/50 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <Pause size={18} strokeWidth={1.5} fill="white" />
          ) : (
            <Play size={18} strokeWidth={1.5} fill="white" />
          )}
        </motion.button>
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
          {/* Spacer for logo */}
          <div className="mb-16 h-32" />

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
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-black leading-[0.9] tracking-tight"
          >
            Özü
            <br />
            <span className="text-gradient-silver">Kucakla</span>
          </motion.h2>

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
                className="group relative px-12 py-4 border border-black/30 bg-white text-xs tracking-ultrawide uppercase font-light overflow-hidden transition-colors duration-300 hover:border-black/60 group-hover:bg-black avenir-thin"
              >
                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                  Keşfet
                </span>
                <div className="absolute inset-0 bg-black z-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
    </>
  );
}
