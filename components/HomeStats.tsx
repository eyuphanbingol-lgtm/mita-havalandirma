"use client";

import { Building2, Users, Wrench, MapPin } from "lucide-react";

const stats = [
  { icon: Building2, value: "500+", label: "Tamamlanan Proje" },
  { icon: Users, value: "350+", label: "Kurumsal Müşteri" },
  { icon: Wrench, value: "15+", label: "Yıllık Deneyim" },
  { icon: MapPin, value: "8", label: "Hizmet Verilen İl" },
];

export default function HomeStats() {
  return (
    <section className="py-20 bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="p-4 bg-white/10 rounded-2xl inline-block mb-4">
                <stat.icon className="w-8 h-8 text-primary-400" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-primary-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
