"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight, Shield, Clock, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-metal-950/80 via-metal-900/70 to-metal-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">Kendi Üretim Tesislerimizde Profesyonel İmalat</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Doğru Hava, Doğru Sistem,<br />
          <span className="text-primary-400">Doğru Mühendislik.</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10">
          Mita Mühendislik olarak; modern yapıların ihtiyaç duyduğu yüksek kaliteli galvaniz hava kanalı sistemlerini, projeye özel ve uzun ömürlü olarak üretiyoruz.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/iletisim/" className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
            Ücretsiz Keşif <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/hizmetlerimiz/" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/20">
            Neler Üretiyoruz?
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Shield, label: "Mühendislik Disiplini", value: "2 Mühendis" },
            { icon: Clock, label: "İmalattan Montaja", value: "Tam Entegre" },
            { icon: Award, label: "Sektörel Tecrübe", value: "10 Yıla Yakın" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="p-3 bg-primary-600/20 rounded-xl"><stat.icon className="w-6 h-6 text-primary-400" /></div>
              <div className="text-left">
                <div className="text-white font-bold text-lg">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest uppercase">Aşağı Kaydır</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}