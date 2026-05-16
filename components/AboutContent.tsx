"use client";

import { Users, Target, Lightbulb, Shield, Award, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Teknik Hassasiyet", desc: "Her projeye bir mühendis gözüyle yaklaşıyor ve disiplini merkezimizde tutuyoruz." },
  { icon: Shield, title: "Bütünsel Hizmet", desc: "İmalat ve montajı tek çatıda birleştirerek ortaklarımıza tam destek sağlıyoruz." },
  { icon: Heart, title: "Yaşam Odaklılık", desc: "Sadece hava sirkülasyonu değil; daha sağlıklı, verimli ve konforlu yaşam alanları inşa ediyoruz." },
  { icon: Lightbulb, title: "Mühendislik Gücü", desc: "Teknik uzmanlığımızı üretim gücümüzle birleştirerek sektörün geleceğini şekillendiriyoruz." },
  { icon: Award, title: "Güven ve Kalite", desc: "Kendi tesislerimizde titizlikle hazırladığımız projelerle kalitenin temsilcisiyiz." },
  { icon: Users, title: "Uzman Montaj", desc: "Saha tecrübesine sahip profesyonel ekiplerimizle projeleri kusursuz hayata geçiriyoruz." },
];

export default function AboutContent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Mita Mühendislik Üretim" className="w-full h-[450px] object-cover" loading="lazy" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-metal-900 mb-6">
              Mita Mühendislik <span className="text-primary-600">Havalandırma</span>
            </h2>
            <div className="space-y-4 text-metal-600 leading-relaxed">
              <p>2015 yılında iki mühendis tarafından temelleri atılan firmamız, havalandırma sektöründe imalattan montaja uzanan tüm süreçlerde partnerlerine profesyonel çözüm ortaklığı sunmak amacıyla kurulmuştur. Kurulduğumuz günden bu yana, teknik uzmanlığımızı üretim gücümüzle birleştirerek sektörde güvenin ve kalitenin temsilcisi olmayı sürdürüyoruz.</p>
              <p>Mühendislik disiplinini işimizin merkezine koyarak; endüstriyel tesislerden modern konutlara, ticari alanlardan sosyal yapılara kadar tüm yaşam alanlarında yüksek standartlı havalandırma sistemleri tasarlıyoruz. Kendi üretim tesislerimizde titizlikle hazırladığımız projeleri, uzman montaj ekiplerimizle sahada kusursuz bir şekilde hayata geçiriyoruz.</p>
              <p>On yıla yaklaşan tecrübemiz ve ilk günkü mühendislik heyecanımızla, sadece hava sirkülasyonu sağlamıyor; daha sağlıklı, verimli ve konforlu yaşam alanları inşa ediyoruz. İş ortaklarımızın ihtiyaçlarına özel, sürdürülebilir ve tam entegre çözümler sunarak geleceğin iklimlendirme teknolojilerini bugünden uyguluyoruz.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-metal-900 text-center mb-12">
            Değerlerimiz
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div key={i} className="p-6 bg-metal-50 rounded-2xl border border-metal-100 hover:border-primary-200 hover:shadow-lg transition-all">
                <div className="p-3 bg-white rounded-xl shadow-sm inline-block mb-4">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-metal-900 mb-2">{value.title}</h3>
                <p className="text-sm text-metal-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}