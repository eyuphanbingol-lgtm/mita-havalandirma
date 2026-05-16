import Image from "next/image";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function HomeContact() {
  // Sitenize ait güncellenmiş gerçek iletişim bilgileri
  const contactInfo = [
    { 
      icon: Phone, 
      label: "Telefon", 
      value: "0554 924 15 67", 
      href: "tel:+905549241567" // Mobil aramalar için uluslararası format uygulandı
    },
    { 
      icon: Mail, 
      label: "E-posta", 
      value: "mekanikmita@gmail.com", // Yeni gmail adresiniz entegre edildi
      href: "mailto:mekanikmita@gmail.com" 
    },
    { 
      icon: Clock, 
      label: "Çalışma Saatleri", 
      value: "Pzt - Cmt: 09:00 - 19:00", 
      href: null 
    },
    { 
      icon: MapPin, 
      label: "Merkez Ofis", 
      value: "Erzurum, Türkiye", 
      href: null 
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Sol Kolon - İletişim Bilgileri */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-bold text-primary-600 uppercase tracking-wider">İletişim</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Bizimle İletişime Geçin
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Havalandırma, iklimlendirme ve teknik servis ihtiyaçlarınız için profesyonel ekibimizle her zaman yanınızdayız.
              </p>
            </div>

            {/* Bilgi Kartları Grubu */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const CardContent = (
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-100 hover:bg-primary-50/20 transition-all duration-200 flex items-start gap-4 h-full">
                    <div className="p-3 bg-white rounded-xl shadow-sm text-primary-600 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                      <p className="mt-1 text-sm font-bold text-slate-900 break-all">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={index} href={item.href} className="block group h-full">
                    {CardContent}
                  </a>
                ) : (
                  <div key={index} className="h-full">{CardContent}</div>
                );
              })}
            </div>
          </div>

          {/* Sağ Kolon - Görsel Alanı */}
          <div className="relative h-[350px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-lg shadow-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80"
              alt="Mekanik Mita Havalandırma Ofis ve Teknik Destek"
              fill
              className="object-cover"
              sizes="(max-w: 1024px) 100vw, 50vw"
              priority={false}
            />
          </div>

        </div>
      </div>
    </section>
  );
}