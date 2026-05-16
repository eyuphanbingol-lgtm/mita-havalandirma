"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

// Logoyu doğrudan bulunduğu ana dizinden import ediyoruz
import mitaLogo from "../mita_logo.jpeg"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Mobil menü açıkken arka plan kaymasını engelle ve temizle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Sayfa değiştiğinde mobil menüyü kapat
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Menü içi rotaların listesi
  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
    { href: "/bolgeler", label: "Hizmet Bölgeleri" },
    { href: "/galeri", label: "Galeri" },
    { href: "/iletisim", label: "İletişim" },
  ];

  // Hazır hazır WhatsApp yönlendirme linki (Tıklandığında otomatik mesaj yazar)
  const whatsappUrl = "https://wa.me/905360227080?text=Merhaba,%20Mita%20Mekanik%20web%20sitenizden%20ulaşıyorum.%20Havalandırma%20sistemleri%20için%20fiyat%20teklifi%20alabilir%20miyim?";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[120] bg-white border-b border-metal-100 shadow-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Mita Logo ve Kurumsal Başlık */}
          <Link href="/" className="flex items-center gap-3 z-[130]">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-100">
              <Image
                src={mitaLogo} 
                alt="Mekanik Mita Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none text-slate-900 tracking-tight">
                MİTA MÜHENDİSLİK
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-primary-600 mt-0.5">
                HAVALANDIRMA ÇÖZÜMLERİ
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold transition-colors duration-200 ${
                    isActive
                      ? "text-primary-600"
                      : "text-slate-600 hover:text-primary-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* Masaüstü Teklif Al Butonu -> Doğrudan WhatsApp'a yönlendirir */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 h-11 text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 active:scale-98 rounded-full transition-all duration-200 shadow-md shadow-primary-600/10"
            >
              Teklif Al
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-900 bg-slate-50 active:bg-slate-100 transition-colors z-[130] relative"
              aria-label="Menüyü Aç/Kapat"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 top-0 z-[110] bg-white transition-all duration-500 ease-in-out lg:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-6 pb-10 justify-between overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between p-4 rounded-2xl text-xl font-bold transition-all ${
                    isActive
                      ? "bg-primary-50 text-primary-600"
                      : "text-slate-800 active:bg-slate-50"
                  }`}
                >
                  <span className="text-base">{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? "text-primary-600" : "text-slate-400"}`} />
                </Link>
              );
            })}
          </div>

          {/* Mobil "Hemen İletişime Geç" Butonu -> Doğrudan WhatsApp'a yönlendirir */}
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-14 text-base font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-2xl shadow-xl shadow-primary-100 transition-all"
            >
              Hemen İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}