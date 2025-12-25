"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { Pause, Play } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

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
          <source src={`${basePath}/images/hero_video.mp4`} type="video/mp4" />
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

      {/* CTA Content - Bottom of Hero */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-8 lg:pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.23, 1, 0.32, 1] }}
            className="avenir text-3xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed tracking-wide mb-8"
          >
            Klasik, Disiplinli, Özgüvenli
          </motion.h2>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <Link href="/collections/businessman">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-4 border border-white/30 bg-white/10 backdrop-blur-sm text-xs tracking-ultrawide uppercase font-light overflow-hidden transition-colors duration-300 hover:bg-white avenir-thin"
              >
                <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                  Keşfet
                </span>
                <div className="absolute inset-0 bg-white z-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
