import Image from "next/image";
import { CheckCircle2, Wind } from "lucide-react";

interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export default function ServicesContent() {
  const services: Service[] = [
    {
      title: "Klima Montaj ve Değişim",
      description: "Doğru konumlandırma ve profesyonel işçilikle klimanızın performansını maksimuma çıkarıyoruz.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
      features: ["Ücretsiz Keşif", "Garantili İşçilik", "Enerji Tasarrufu Odaklı Montaj"],
    },
    {
      title: "Periyodik Bakım ve Temizlik",
      description: "Klimanızın ömrünü uzatmak ve sağlıklı hava solumak için düzenli filtre ve iç ünite bakımı sunuyoruz.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80",
      features: ["Antibakteriyel Temizlik", "Gaz Basıncı Kontrolü", "Performans Testleri"],
    },
  ];

  return (
    <section className="py-20 bg-metal-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Metin Kapsayıcısı: Mobilde hep 1. sırada, masaüstünde index'e göre değişir */}
              <div className={`space-y-6 order-1 ${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 rounded-full text-primary-700 text-xs font-semibold uppercase tracking-wider">
                  <Wind className="w-3.5 h-3.5" /> Hizmetimiz
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-metal-900 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg text-metal-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-sm font-medium text-metal-700">
                      <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Görsel Kapsayıcısı: Mobilde hep 2. sırada, masaüstünde index'e göre yönlenir */}
              <div className={`relative h-[350px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-md order-2 ${
                i % 2 === 1 ? "lg:order-1" : "lg:order-2"
              }`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-102 transition-transform duration-500"
                  sizes="(max-w: 1024px) 100vw, 50vw"
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}