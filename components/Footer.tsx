"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-metal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo ve Kısa Açıklama */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none">MİTA</span>
                <span className="text-xs font-medium tracking-widest text-primary-400 mt-1">MÜHENDİSLİK</span>
              </div>
            </Link>
            <p className="text-metal-400 text-sm leading-relaxed mb-6">
              Mita Mühendislik Havalandırma olarak, modern yapıların ihtiyaç duyduğu yüksek kaliteli galvaniz hava kanalı sistemlerini imalattan montaja yüksek kalite standartlarında sunuyoruz.
            </p>
            <div className="flex gap-3">
              <a href="tel:+905360227080" className="p-2.5 bg-metal-800 hover:bg-primary-600 rounded-xl transition-colors">
                <Phone className="w-4 h-4" />
              </a>
              <a href="mailto:mitamekanik@gmail.com" className="p-2.5 bg-metal-800 hover:bg-primary-600 rounded-xl transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Ürünler */}
          <div>
            <h3 className="font-bold text-lg mb-6">Ne Üretiyoruz?</h3>
            <ul className="space-y-3 text-metal-400 text-sm">
              <li>Spiral Kenetli Hava Kanalları</li>
              <li>Flanşlı ve Contalı Kanal Sistemleri</li>
              <li>Özel Ölçıü ve Proje İmalatları</li>
              <li>Bağlantı Elemanları</li>
              <li>Yardımcı Ekipmanlar</li>
            </ul>
          </div>

          {/* Kurumsal Menü */}
          <div>
            <h3 className="font-bold text-lg mb-6">Kurumsal</h3>
            <ul className="space-y-3">
              {["Hakkımızda", "Bölgeler", "Galeri", "İletişim"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")}/`} 
                    className="text-metal-400 hover:text-primary-400 text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Güncel İletişim Bilgileri */}
          <div>
            <h3 className="font-bold text-lg mb-6">İletişim Bilgileri</h3>
            <ul className="space-y-4">
              {/* Ofis */}
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider text-primary-400">Ofis Adresi</span>
                  <span className="text-metal-400 text-sm">
                    Lalapaşa Mah. İsmail Türk İş Merkezi No:1/2 Yakutiye / Erzurum
                  </span>
                  <span className="text-metal-500 text-xs italic">
                    MİTA HAVALANDIRMA MÜHENDİSLİK İNŞ. TAAH. OTO. SAN. VE TİC. LTD. ŞTİ.
                  </span>
                </div>
              </li>

              {/* Fabrika */}
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider text-primary-400">Fabrika Adresi</span>
                  <span className="text-metal-400 text-sm">
                    Soğukçermik Mahallesi Küçük Akdağ Sitesi D Blok No:3 Yakutiye / Erzurum
                  </span>
                  <span className="text-metal-500 text-xs">Üretim ve İmalat Tesisi</span>
                </div>
              </li>

              {/* Telefon */}
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider text-primary-400">Telefon (GSM)</span>
                  <a href="tel:+905360227080" className="text-metal-400 text-sm hover:text-primary-400 font-medium">
                    0536 022 70 80
                  </a>
                  <span className="text-metal-500 text-xs">7/24 Teknik Servis ve Keşif</span>
                </div>
              </li>

              {/* E-posta */}
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider text-primary-400">E-posta</span>
                  <a href="mailto:mitamekanik@gmail.com" className="text-metal-400 text-sm hover:text-primary-400 break-all font-medium">
                    iletisim@mitahavalandirma.com
                  </a>
                  <span className="text-metal-500 text-xs">Proje ve teklifleriniz için</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Alt Telif Hakları ve İmzalar */}
      <div className="border-t border-metal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="text-metal-500 text-sm">
              © {new Date().getFullYear()} MİTA HAVALANDIRMA MÜHENDİSLİK İNŞ TAAH. OTO. SAN VE TİC LTD ŞTİ. Tüm hakları saklıdır.
            </p>
            <p className="text-xs text-metal-600 font-medium tracking-wide">
              Designed by <span className="text-metal-400">Eyüphan Bingöl</span> & <span className="text-metal-400">Fatih Akbulut</span>
            </p>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            className="p-3 bg-metal-800 hover:bg-primary-600 rounded-xl transition-colors shrink-0"
          >
            <ArrowUp className="w-5 h-5 text-metal-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}