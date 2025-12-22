"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, ChevronDown, User, Heart, Mail, Search } from "lucide-react";

const businessmanCategories = [
  { name: "Classic", href: "/collections/businessman/classic", description: "Klasik, disiplinli, özgüvenli" },
  { name: "Avant-Garde", href: "/collections/businessman/avant-garde", description: "Yaratıcı, özgün, cesur" },
  { name: "Elegant", href: "/collections/businessman/elegant", description: "Sofistike, zarif ve entelektüel" },
  { name: "Holiday", href: "/collections/businessman/holiday", description: "Hayatı dolu dolu yaşayan" },
  { name: "Weekend", href: "/collections/businessman/weekend", description: "Rahat, modern ve hafif" },
];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollYValue = window.scrollY;

      // Trigger animation based on scroll position
      if (scrollYValue > 0) {
        if (!logoAnimationComplete) {
          setLogoAnimationComplete(true);
          // Show navigation after a delay
          setTimeout(() => {
            setShowNavigation(true);
          }, 800);
        }
      } else {
        // Reset to initial state when scroll is at top
        setLogoAnimationComplete(false);
        setShowNavigation(false);
      }

      setIsScrolled(scrollYValue > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoAnimationComplete]);

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
            {/* Left Navigation - hidden on home page when not scrolled */}
            <div className={`hidden lg:flex items-center space-x-12 transition-opacity duration-500 ${
              isHomePage && !showNavigation ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
              <Link
                href="/about"
                className="text-xs font-sans font-medium tracking-ultrawide uppercase text-black/70 hover:text-black transition-colors duration-400 line-through-hover header-font"
              >
                Mr. Okay
              </Link>

              <div
                className="relative"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button className="flex items-center space-x-1 text-xs font-sans font-light tracking-ultrawide uppercase text-black/70 hover:text-black transition-colors duration-400 header-font">
                  <span>BUSINESSMAN</span>
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
                className="text-xs font-sans font-light tracking-ultrawide uppercase text-black/70 hover:text-black transition-colors duration-400 line-through-hover header-font"
              >
                SMARTWOMAN
              </Link>
            </div>

            {/* Center Logo */}
            {isHomePage ? (
              // Animated logo for home page - starts at center, moves to header on scroll
              <Link
                href="/"
                className={`absolute left-1/2 -translate-x-1/2 z-50 ${!logoAnimationComplete ? 'pointer-events-none' : ''}`}
              >
                <motion.div
                  initial={{
                    y: "20vh",
                    scale: 5,
                  }}
                  animate={{
                    y: logoAnimationComplete ? "0px" : "20vh",
                    scale: logoAnimationComplete ? 1 : 5,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  <h1
                    className={`text-2xl lg:text-3xl font-normal whitespace-nowrap origin-center ${!logoAnimationComplete ? 'text-white' : 'text-black'}`}
                    style={{ fontFamily: 'Blacksword, serif', fontStyle: 'normal', letterSpacing: '0' }}
                  >
                    Mr. Okay
                  </h1>
                </motion.div>
              </Link>
            ) : (
              // Static logo for other pages
              <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <h1 className="text-2xl lg:text-3xl font-normal text-black" style={{ fontFamily: 'Blacksword, serif', fontStyle: 'normal', letterSpacing: '0' }}>
                    Mr. Okay
                  </h1>
                </motion.div>
              </Link>
            )}

            {/* Right Navigation - Always visible */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Search Icon & Bar */}
              <div className="relative flex items-center">
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 200, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden mr-2"
                    >
                      <input
                        type="text"
                        placeholder="Ara..."
                        autoFocus
                        className="w-full px-3 py-1.5 text-sm border border-black/20 bg-white text-black placeholder:text-black/40 focus:outline-none focus:border-black/40 transition-colors"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Search
                      size={20}
                      strokeWidth={1.5}
                      className={`transition-colors duration-500 ${
                        isHomePage && !logoAnimationComplete
                          ? 'text-white/70 group-hover:text-white'
                          : 'text-black/70 group-hover:text-black'
                      }`}
                    />
                  </motion.div>
                </button>
              </div>

              {/* Contact Icon */}
              <Link href="/contact" className="group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail
                    size={20}
                    strokeWidth={1}
                    className={`transition-colors duration-500 ${
                      isHomePage && !logoAnimationComplete
                        ? 'text-white/70 group-hover:text-white'
                        : 'text-black/70 group-hover:text-black'
                    }`}
                  />
                </motion.div>
              </Link>

              {/* Account Icon */}
              <Link href="/account" className="group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <User
                    size={20}
                    strokeWidth={1}
                    className={`transition-colors duration-500 ${
                      isHomePage && !logoAnimationComplete
                        ? 'text-white/70 group-hover:text-white'
                        : 'text-black/70 group-hover:text-black'
                    }`}
                  />
                </motion.div>
              </Link>

              {/* Favorites Icon */}
              <Link href="/favorites" className="group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heart
                    size={20}
                    strokeWidth={1}
                    className={`transition-colors duration-500 ${
                      isHomePage && !logoAnimationComplete
                        ? 'text-white/70 group-hover:text-white'
                        : 'text-black/70 group-hover:text-black'
                    }`}
                  />
                </motion.div>
              </Link>

              {/* Cart Icon */}
              <Link href="/cart" className="relative group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ShoppingBag
                    size={20}
                    strokeWidth={1}
                    className={`transition-colors duration-500 ${
                      isHomePage && !logoAnimationComplete
                        ? 'text-white/70 group-hover:text-white'
                        : 'text-black/70 group-hover:text-black'
                    }`}
                  />
                </motion.div>
                <span className={`absolute -top-1 -right-1 w-4 h-4 text-[10px] rounded-full flex items-center justify-center font-medium transition-colors duration-500 ${
                  isHomePage && !logoAnimationComplete
                    ? 'bg-white text-black'
                    : 'bg-black text-white'
                }`}>
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
              className="absolute top-full left-0 right-0 bg-white shadow-lg"
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
                        <div className="aspect-[3/4] bg-silver-light mb-4 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-b from-silver-light to-silver group-hover:scale-105 transition-transform duration-700" />
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
                    Tüm Businessman Koleksiyonunu Gör →
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
                className="font-serif text-3xl text-black hover:text-silver-dark transition-colors header-font"
              >
                Mr. Okay
              </Link>

              <div className="text-center">
                <p className="font-serif text-3xl text-black mb-4">Businessman</p>
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
                SMARTWOMAN
              </Link>

              {/* Mobile Icons */}
              <div className="flex items-center space-x-8 mt-8">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Mail size={28} strokeWidth={1} className="text-black" />
                </Link>
                <Link href="/account" onClick={() => setIsMobileMenuOpen(false)}>
                  <User size={28} strokeWidth={1} className="text-black" />
                </Link>
                <Link href="/favorites" onClick={() => setIsMobileMenuOpen(false)}>
                  <Heart size={28} strokeWidth={1} className="text-black" />
                </Link>
                <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)} className="relative">
                  <ShoppingBag size={28} strokeWidth={1} className="text-black" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                    0
                  </span>
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
