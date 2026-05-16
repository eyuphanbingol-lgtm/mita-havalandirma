import Image from "next/image";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function HomeContact() {
  const contactInfo = [
    { 
      icon: Phone, 
      label: "Telefon & WhatsApp", 
      value: "0536 022 70 80", 
      href: "tel:+905360227080" 
    },
    { 
      icon: Mail, 
      label: "E-posta", 
      value: "iletisim@mitahavalandirma.com", // Ekranda kurumsal yazacak
      href: "mailto:mitamekanik@gmail.com" // Tıklayınca Gmail'e fırlatacak!
    },
    { 
      icon: Clock, 
      label: "Çalışma Saatleri", 
      value: "Pzt - Cmt: 09:00 - 19:00", 
      href: null 
    },
    { 
      icon: MapPin, 
      label: "Ofis & Fabrika", 
      value: "Yakutiye / Erzurum", 
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
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                MİTA HAVALANDIRMA MÜHENDİSLİK İNŞ. TAAH. OTO. SAN. VE TİC. LTD. ŞTİ.
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

            {/* Ofis ve Fabrika Detaylı Adres Alanı */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
              <div>
                <h4 className="text-xs font-bold text-primary-600 uppercase tracking-wider">Ofis Adresi</h4>
                <p className="mt-1 text-sm text-slate-700 font-medium">
                  Lalapaşa Mah. İsmail Türk İş Merkezi No:1/2 Yakutiye / Erzurum
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <h4 className="text-xs font-bold text-primary-600 uppercase tracking-wider">Fabrika Adresi</h4>
                <p className="mt-1 text-sm text-slate-700 font-medium">
                  Soğukçermik Mahallesi. Küçük Akdağ Sitesi D blok no 3 Yakutiye / Erzurum
                </p>
              </div>
            </div>

          </div>

          {/* Sağ Kolon - Görsel Alanı */}
          <div className="relative h-[350px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-lg shadow-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80"
              alt="Mita Mekanik Havalandırma Ofis ve Teknik Destek"
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