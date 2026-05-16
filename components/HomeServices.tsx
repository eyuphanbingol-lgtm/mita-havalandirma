"use client";

import Link from "next/link";
import { Flame, ThermometerSun, Droplets, Wind, Factory, Filter, ArrowRight } from "lucide-react";

const services = [
  { icon: Flame, title: "Endüstriyel Mutfak", desc: "7/24 gerçek servis anlayışı ile teknik sorunlara anında müdahale.", color: "bg-orange-50", iconColor: "text-orange-600" },
  { icon: ThermometerSun, title: "Isıtma ve Soğutma", desc: "Ortam sıcaklığını istenilen seviyede tutan profesyonel çözümler.", color: "bg-blue-50", iconColor: "text-blue-600" },
  { icon: Droplets, title: "Sulu Baca Sistemleri", desc: "Kara fırınlarda etkili duman ve kurum filtreleme çözümleri.", color: "bg-teal-50", iconColor: "text-teal-600" },
  { icon: Wind, title: "Baca Sistemleri", desc: "Atık gazların güvenli ve verimli şekilde dışarı atılması.", color: "bg-slate-50", iconColor: "text-slate-600" },
  { icon: Factory, title: "Havalandırma", desc: "Kapalı ortamlar için temiz hava akımı ve iklimlendirme.", color: "bg-primary-50", iconColor: "text-primary-600" },
  { icon: Filter, title: "Bacasız Davlumbaz", desc: "Paslanmaz çelik filtreler ile pişirme güvenliği.", color: "bg-amber-50", iconColor: "text-amber-600" },
];

export default function HomeServices() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500" /> Hizmetlerimiz
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-metal-900 mb-4">
            Profesyonel <span className="text-primary-600">Çözümler</span>
          </h2>
          <p className="text-metal-500 max-w-2xl mx-auto text-lg">
            Tüm havalandırma ve iklimlendirme ihtiyaçlarınız için kapsamlı hizmet portföyümüz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="group bg-metal-50 rounded-3xl overflow-hidden border border-metal-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className={`p-4 ${service.color} rounded-2xl inline-block mb-4`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-metal-900 mb-2 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                <p className="text-metal-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                <Link href="/hizmetlerimiz/" className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Detaylı Bilgi <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
