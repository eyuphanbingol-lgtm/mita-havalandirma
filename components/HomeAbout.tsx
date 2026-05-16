"use client";

import Link from "next/link";
import { ArrowRight, Users, Wrench, Truck, CheckCircle } from "lucide-react";

const features = [
  { icon: Users, title: "Mühendislik Temelli", desc: "İki mühendis kurucumuzun disipliniyle her projeye teknik hassasiyetle yaklaşıyoruz." },
  { icon: Wrench, title: "Yüksek Standartlı Üretim", desc: "Galvaniz hava kanalı imalatlarımızı kendi tesislerimizde titizlikle yapıyoruz." },
  { icon: Truck, title: "Kusursuz Saha Montajı", desc: "Uzman montaj ekiplerimizle projeleri sahada eksiksiz şekilde hayata geçiriyoruz." },
  { icon: CheckCircle, title: "Sürdürülebilir Çözümler", desc: "Uzun ömürlü kullanım sağlayan iklimlendirme teknolojileri uyguluyoruz." },
];

export default function HomeAbout() {
  return (
    <section className="py-24 bg-metal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Mita Mühendislik İmalat" className="w-full h-[500px] object-cover" loading="lazy" />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500" /> Kurumsal Profil
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-metal-900 mb-6">
              Teknik Uzmanlık ve <span className="text-primary-600">Üretim Gücü</span>
            </h2>

            <p className="text-metal-600 text-lg leading-relaxed mb-8">
              2015 yılında kurulan firmamız, havalandırma sektöründe imalattan montaja uzanan tüm süreçlerde profesyonel çözüm ortaklığı sunmaktadır. Amacımız yalnızca hava taşımak değil; doğru hava akışını, doğru sistemle ve doğru mühendislikle buluşturmaktır.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-metal-100">
                    <feature.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-metal-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-metal-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/hakkimizda/" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
              Daha Fazla Bilgi <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}