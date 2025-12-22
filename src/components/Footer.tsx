"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  collections: [
    { name: "İş Adamı", href: "/collections/businessman" },
    { name: "Akıllı Kadın", href: "/collections/smartwoman" },
    { name: "Sınırlı Üretim", href: "/collections/limited" },
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

  return (
    <footer className="bg-gray-50 border-t border-black/5">
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
                <h2 className="font-serif text-3xl font-medium tracking-widest text-black">
                  MR OKAY
                </h2>
                <p className="text-[10px] tracking-ultrawide text-silver-dark uppercase mt-1">
                  Parfümeri
                </p>
              </Link>
              <p className="text-sm text-silver-dark font-light leading-relaxed max-w-sm">
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
                  className="text-silver-dark hover:text-black transition-colors duration-300"
                >
                  <Instagram size={18} strokeWidth={1.5} />
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-silver-dark hover:text-black transition-colors duration-300"
                >
                  <Facebook size={18} strokeWidth={1.5} />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-silver-dark hover:text-black transition-colors duration-300"
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
                <h3 className="text-xs font-sans font-medium tracking-ultrawide uppercase text-black mb-6">
                  Koleksiyonlar
                </h3>
                <ul className="space-y-4">
                  {footerLinks.collections.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-silver-dark hover:text-black transition-colors duration-300 font-light"
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
                <h3 className="text-xs font-sans font-medium tracking-ultrawide uppercase text-black mb-6">
                  Şirket
                </h3>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-silver-dark hover:text-black transition-colors duration-300 font-light"
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
                <h3 className="text-xs font-sans font-medium tracking-ultrawide uppercase text-black mb-6">
                  Yasal
                </h3>
                <ul className="space-y-4">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-silver-dark hover:text-black transition-colors duration-300 font-light"
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

        {/* Bottom Bar */}
        <div className="py-6 border-t border-black/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-silver-dark font-light tracking-wide">
              © {currentYear} Mr Okay Parfümeri. Tüm hakları saklıdır.
            </p>
            <p className="text-xs text-silver-dark/50 font-light tracking-wide">
              Detaylara olan tutku ile üretildi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
