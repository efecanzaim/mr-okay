"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-white" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-[10px] tracking-ultrawide uppercase text-silver-dark mb-4">
            Hikayemiz
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-black">
            Mr Okay
          </h1>
          <p className="text-lg text-silver-dark font-light mt-4 max-w-xl mx-auto">
            Olağanüstü ustalığın mirası
          </p>
        </motion.div>
      </section>

      {/* Origin Story */}
      <section ref={ref} className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/5] bg-gray-100">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
                <div className="absolute -inset-4 border border-black/10 -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-[10px] tracking-ultrawide uppercase text-silver-dark mb-4">
                2012'de Kuruldu
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl text-black mb-8">
                Tutkudan Doğdu
              </h2>
              <div className="space-y-6 text-silver-dark font-light leading-relaxed">
                <p>
                  Mr Okay, basit ama cesur bir vizyonla başladı: sadece bir kişiye 
                  eşlik etmeyen, kimliğinin ayrılmaz bir parçası haline gelen 
                  kokular yaratmak.
                </p>
                <p>
                  Kurucumuz, detaylara olan takıntılı dikkat ve parfümeri 
                  sanatına derin bir takdir ile Grasse, Paris ve Floransa'dan 
                  usta parfümörlerden bir ekip kurdu.
                </p>
                <p>
                  Birlikte, dünyanın dört bir köşesinden en nadir malzemeleri 
                  tedarik etmek için bir yolculuğa çıktılar—Kamboçya'dan ud, 
                  Calabria'dan bergamot, Hindistan'dan yasemin.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <p className="text-[10px] tracking-ultrawide uppercase text-silver-dark mb-6">
              Felsefe
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-black mb-8 leading-tight">
              &ldquo;Bir koku, bir konuşmadaki 
              <br />
              <span className="text-gradient-silver">son söz olmalı</span>&rdquo;
            </h2>
            <p className="text-silver-dark font-light leading-relaxed max-w-2xl mx-auto">
              En güçlü izlenimlerin genellikle en ince olanlar olduğuna 
              inanıyoruz. Kokularımız hafızada kalmak, duygu uyandırmak 
              ve hatırlanmaya değer anları tanımlamak için tasarlandı.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-4xl text-black">Değerlerimiz</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Ödünsüz Kalite",
                description:
                  "Her malzeme el ile seçilir, her formül Mr Okay adını kazanmadan önce yüzlerce kez test edilir.",
              },
              {
                title: "Zamansız Zarafet",
                description:
                  "Trendleri takip etmiyoruz. Mevsimleri aşan ve on yıllar boyunca geçerli kalan imzalar yaratıyoruz.",
              },
              {
                title: "Sürdürülebilir Lüks",
                description:
                  "Gerçek lüks sorumludur. Güzellikten ödün vermeden etik kaynak kullanıyor ve sürdürülebilir paketliyoruz.",
              },
            ].map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-px h-12 bg-silver-dark mx-auto mb-6" />
                  <h3 className="font-serif text-xl text-black mb-4">
                    {value.title}
                  </h3>
                  <p className="text-silver-dark font-light text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
