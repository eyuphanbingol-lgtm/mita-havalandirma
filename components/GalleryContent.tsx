"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const categories = ["Tümü", "Hava Kanalları", "İmalat Süreçleri", "Saha Montajı"];

const images = [
  { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", title: "Galvaniz Hava Kanalı İmalatı", category: "Hava Kanalları" },
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", title: "Spiral Kenetli Hava Kanalları", category: "Hava Kanalları" },
  { src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80", title: "Flanşlı ve Contalı Kanal İmalatı", category: "İmalat Süreçleri" },
  { src: "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80", title: "Endüstriyel Tesis Sahası", category: "Saha Montajı" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", title: "Özel Ölçü Kanal İmalatları", category: "İmalat Süreçleri" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", title: "Havalandırma Montaj Çalışması", category: "Saha Montajı" },
];

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  const filtered = activeCategory === "Tümü" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat ? "bg-primary-600 text-white shadow-lg" : "bg-metal-50 text-metal-600 hover:bg-metal-100 border border-metal-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((image) => (
            <div key={image.src} onClick={() => setSelectedImage(image)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              <img src={image.src} alt={image.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-metal-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm">{image.title}</p>
                <p className="text-white/70 text-xs">{image.category}</p>
              </div>
              <div className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-metal-700" />
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-metal-950/90 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <X className="w-6 h-6 text-white" />
              </button>
              <img src={selectedImage.src} alt={selectedImage.title} className="w-full rounded-2xl shadow-2xl" />
              <div className="mt-4 text-center">
                <h3 className="text-white font-bold text-lg">{selectedImage.title}</h3>
                <p className="text-white/60 text-sm">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}