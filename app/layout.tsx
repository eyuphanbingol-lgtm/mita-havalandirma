import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import LoadingProvider from "@/components/LoadingProvider";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mita Mühendislik | Havalandırma, İklimlendirme ve Baca Sistemleri",
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/ms-icon-70x70.png", sizes: "70x70", type: "image/png" },
      { url: "/ms-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/ms-icon-150x150.png", sizes: "150x150", type: "image/png" },
      { url: "/ms-icon-310x310.png", sizes: "310x310", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${jakartaSans.variable} font-sans bg-slate-50 text-slate-900 antialiased selection:bg-primary-500 selection:text-white`}>
        <LoadingProvider>
          <Navbar />
          <main className="pt-20 min-h-[calc(100vh-5rem)]">
            {children}
          </main>
          <WhatsAppFloat />
        </LoadingProvider>
      </body>
    </html>
  );
}