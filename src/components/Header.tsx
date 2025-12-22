"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, ChevronDown } from "lucide-react";

const businessmanCategories = [
  { name: "Avangard", href: "/collections/businessman/avant-garde", description: "Cesur. Sıradışı. Unutulmaz." },
  { name: "Klasik", href: "/collections/businessman/classic", description: "Modern erkek için zamansız sofistike." },
  { name: "Zarif", href: "/collections/businessman/elegant", description: "Lüksün rafine özü." },
  { name: "Tatil", href: "/collections/businessman/holiday", description: "Sezonluk özel koleksiyonlar." },
  { name: "Hafta Sonu", href: "/collections/businessman/weekend", description: "Rahat zarafet." },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "glass py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              <Link
                href="/about"
                className="text-xs font-sans font-light tracking-ultrawide uppercase text-black/70 hover:text-black transition-colors duration-400 line-through-hover"
              >
                Mr Okay
              </Link>
              
              <div
                className="relative"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button className="flex items-center space-x-1 text-xs font-sans font-light tracking-ultrawide uppercase text-black/70 hover:text-black transition-colors duration-400">
                  <span>İş Adamı</span>
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${
                      isMegaMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <Link
                href="/collections/smartwoman"
                className="text-xs font-sans font-light tracking-ultrawide uppercase text-black/70 hover:text-black transition-colors duration-400 line-through-hover"
              >
                Akıllı Kadın
              </Link>
            </div>

            {/* Center Logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h1 className="font-serif text-2xl lg:text-3xl font-medium tracking-widest text-black">
                  MR OKAY
                </h1>
                <p className="text-[8px] tracking-ultrawide text-silver-dark uppercase mt-1">
                  Parfümeri
                </p>
              </motion.div>
            </Link>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              <Link
                href="/contact"
                className="text-xs font-sans font-light tracking-ultrawide uppercase text-black/70 hover:text-black transition-colors duration-400 line-through-hover"
              >
                İletişim
              </Link>
              
              <Link href="/cart" className="relative group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ShoppingBag
                    size={20}
                    strokeWidth={1}
                    className="text-black/70 group-hover:text-black transition-colors duration-400"
                  />
                </motion.div>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                  0
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-6">
              <Link href="/cart" className="relative">
                <ShoppingBag size={20} strokeWidth={1} className="text-black" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                  0
                </span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mega Menu */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              ref={megaMenuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
              className="absolute top-full left-0 right-0 bg-white border-t border-black/5 shadow-lg"
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                <div className="grid grid-cols-5 gap-8">
                  {businessmanCategories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={category.href}
                        className="group block"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        <div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <h3 className="font-serif text-lg text-black group-hover:text-silver-dark transition-colors duration-300">
                          {category.name}
                        </h3>
                        <p className="text-xs text-silver-dark mt-1 font-light tracking-wide">
                          {category.description}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-black/5">
                  <Link
                    href="/collections/businessman"
                    className="text-xs tracking-ultrawide uppercase text-silver-dark hover:text-black transition-colors duration-300"
                    onClick={() => setIsMegaMenuOpen(false)}
                  >
                    Tüm İş Adamı Koleksiyonunu Gör →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col items-center justify-center h-full space-y-8"
            >
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl text-black hover:text-silver-dark transition-colors"
              >
                Mr Okay
              </Link>
              
              <div className="text-center">
                <p className="font-serif text-3xl text-black mb-4">İş Adamı</p>
                <div className="space-y-3">
                  {businessmanCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm text-silver-dark hover:text-black transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/collections/smartwoman"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl text-black hover:text-silver-dark transition-colors"
              >
                Akıllı Kadın
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl text-black hover:text-silver-dark transition-colors"
              >
                İletişim
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
