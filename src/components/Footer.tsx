"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Instagram, Facebook, Twitter, Mail, Send, MessageCircle, Truck, Store, RefreshCw, Shield } from "lucide-react";

const footerLinks = {
  collections: [
    { name: "BUSINESSMAN", href: "/collections/businessman" },
    { name: "SMARTWOMAN", href: "/collections/smartwoman" },
    { name: "LIMITED EDITION", href: "/collections/limited" },
  ],
  company: [
    { name: "Hikayemiz", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/contact" },
  ],
  legal: [
    { name: "Gizlilik Politikası", href: "/privacy" },
    { name: "Kullanım Koşulları", href: "/terms" },
    { name: "Kargo", href: "/shipping" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <>
      {/* Pre-Footer */}
      <section className="bg-black py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 max-w-4xl mx-auto">
            {/* Ücretsiz Kargo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start space-x-4"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Truck size={24} strokeWidth={1.5} className="text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-white uppercase tracking-wide mb-2">
                  Ücretsiz Kargo
                </h3>
                <p className="text-xs text-silver font-light leading-relaxed">
                  500 TL ve üzeri alışverişlerinizde kargo ücretsiz. Tüm Türkiye'ye hızlı teslimat.
                </p>
              </div>
            </motion.div>

            {/* Mağazadan Teslim */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Store size={24} strokeWidth={1.5} className="text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-white uppercase tracking-wide mb-2">
                  Mağazadan Teslim
                </h3>
                <p className="text-xs text-silver font-light leading-relaxed">
                  Online sipariş verin, mağazamızdan teslim alın. Aynı gün teslimat imkanı.
                </p>
              </div>
            </motion.div>

            {/* Güvenli Ödeme */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start space-x-4"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Shield size={24} strokeWidth={1.5} className="text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-white uppercase tracking-wide mb-2">
                  Güvenli Ödeme
                </h3>
                <p className="text-xs text-silver font-light leading-relaxed">
                  256-bit SSL şifreleme ile güvenli alışveriş. Tüm kart bilgileriniz korunur.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4"
            >
              <Link href="/" className="inline-block mb-6">
                <div className="text-center">
                  <h1 className="text-3xl lg:text-4xl font-normal text-white" style={{ fontFamily: 'Blacksword, serif', fontStyle: 'normal', letterSpacing: '0' }}>
                    Mr. Okay
                  </h1>
                </div>
              </Link>
              <p className="text-sm text-silver-light font-light leading-relaxed max-w-sm">
                Farklı olmaya cesaret edenler için olağanüstü kokular yaratıyoruz.
                Her koku, sofistike ve bireysellik hikayesi anlatır.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-6 mt-8">
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-silver hover:text-white transition-colors duration-300"
                >
                  <Instagram size={18} strokeWidth={1.5} />
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-silver hover:text-white transition-colors duration-300"
                >
                  <Facebook size={18} strokeWidth={1.5} />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-silver hover:text-white transition-colors duration-300"
                >
                  <Twitter size={18} strokeWidth={1.5} />
                </motion.a>
              </div>

            </motion.div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Collections */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h3 className="text-xs font-sans font-medium tracking-ultrawide uppercase text-white mb-6">
                  Koleksiyonlar
                </h3>
                <ul className="space-y-4">
                  {footerLinks.collections.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-silver hover:text-white transition-colors duration-300 font-light"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-xs font-sans font-medium tracking-ultrawide uppercase text-white mb-6">
                  Şirket
                </h3>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-silver hover:text-white transition-colors duration-300 font-light"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-xs font-sans font-medium tracking-ultrawide uppercase text-white mb-6">
                  Yasal
                </h3>
                <ul className="space-y-4">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-silver hover:text-white transition-colors duration-300 font-light"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Newsletter & Bize Ulaşın Row */}
        <div className="py-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-0">
            {/* Newsletter & Bize Ulaşın side by side */}
            <div className="flex flex-col md:flex-row w-full">
              {/* Newsletter */}
              <div className="flex-1 max-w-md mb-0 md:mb-0">
                <p className="text-xs text-silver/80 font-light mb-3">
                  Yeni koleksiyonlardan haberdar olun
                </p>
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-posta adresiniz"
                    required
                    className="flex-1 px-4 py-2.5 bg-transparent border border-white/20 border-r-0 text-white placeholder:text-silver/60 text-sm focus:outline-none focus:border-white/40 transition-colors duration-300"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2.5 bg-white text-black hover:bg-silver-light transition-colors duration-300"
                  >
                    <Send size={16} strokeWidth={1.5} />
                  </motion.button>
                </form>
                {isSubscribed && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-green-400 mt-2"
                  >
                    Abone oldunuz!
                  </motion.p>
                )}
              </div>
              {/* Bize Ulaşın */}
              <div className="flex-1 md:ml-8 mt-4 md:mt-0 flex flex-col md:items-end">
                <h3 className="text-xs font-sans font-medium tracking-ultrawide uppercase text-white mb-2 md:mb-4">
                  Bize Ulaşın
                </h3>
                <div className="flex items-center gap-8">
                  <a
                    href="https://wa.me/905551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                  >
                    <div className="w-16 h-16 rounded-lg border border-white/20 flex items-center justify-center mb-2 group-hover:border-white/40 transition-colors duration-300">
                      <MessageCircle size={28} strokeWidth={1} className="text-white" />
                    </div>
                    <span className="text-xs text-silver group-hover:text-white transition-colors duration-300 font-light">
                      Whatsapp
                    </span>
                  </a>
                  <a
                    href="mailto:info@mrokay.com"
                    className="flex flex-col items-center group"
                  >
                    <div className="w-16 h-16 rounded-lg border border-white/20 flex items-center justify-center mb-2 group-hover:border-white/40 transition-colors duration-300">
                      <Mail size={28} strokeWidth={1} className="text-white" />
                    </div>
                    <span className="text-xs text-silver group-hover:text-white transition-colors duration-300 font-light">
                      İletişim
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-silver font-light tracking-wide">
              © {currentYear} Mr Okay Parfümeri. Tüm hakları saklıdır.
            </p>
            <p className="text-xs text-silver-dark font-light tracking-wide">
              Detaylara olan tutku ile üretildi.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
