import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css"; // Global CSS dosyanızın yoluna göre gerekirse burayı düzenleyin

// Bileşenlerin İçe Aktarılması
import LoadingProvider from "@/components/LoadingProvider";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat"; // Varsa WhatsApp butonu, yoksa bu satırı silebilirsiniz

// Yazı tipi (Font) Yapılandırması
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Global SEO ve Metadata Ayarları (Mita Mekanik Havalandırma Güncel Hali)
export const metadata: Metadata = {
  title: "Mita Mekanik | Havalandırma, İklimlendirme ve Baca Sistemleri",
  description: "Erzurum'da endüstriyel mutfak havalandırması, baca, sulu filtre, sığınak havalandırma ve iklimlendirme sistemlerinde profesyonel mekanik çözümler.",
  keywords: [
    "havalandırma", 
    "erzurum havalandırma", 
    "mita mekanik", 
    "baca sistemleri", 
    "sulu filtre", 
    "endüstriyel havalandırma", 
    "iklimlendirme", 
    "havalandırma firmaları erzurum",
    "mekanik havalandırma"
  ],
  authors: [{ name: "Mita Mekanik Ekibi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${jakartaSans.variable} font-sans bg-slate-50 text-slate-900 antialiased selection:bg-primary-500 selection:text-white`}
      >
        {/* Tüm sistemi saran yüklenme yöneticisi */}
        <LoadingProvider>
          {/* Sabit Üst Menü */}
          <Navbar />
          
          {/* Sayfa İçeriklerinin Navbar altında kalmaması için pt-20 (padding-top) eklendi */}
          <main className="pt-20 min-h-[calc(100vh-5rem)]">
            {children}
          </main>

          {/* Varsa Sabit WhatsApp İletişim Butonu */}
          <WhatsAppFloat />

          {/* İleride ekleyeceğiniz Footer (Alt Menü) buraya gelebilir */}
          {/* <Footer /> */}
        </LoadingProvider>
      </body>
    </html>
  );
}