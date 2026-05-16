import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "İletişim",
  description: "MİTA HAVALANDIRMA MÜHENDİSLİK - Ücretsiz keşif ve fiyat teklifi için bize ulaşın. Teknik servis desteği.",
};

export default function IletisimPage() {
  // Güncellenmiş kurumsal iletişim bilgileri
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
      value: "mekanikmita@gmail.com", 
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
      label: "Merkez", 
      value: "Yakutiye / Erzurum", 
      href: null 
    },
  ];

  return (
    <>
      <PageHeader title="İletişim" subtitle="Ücretsiz keşif ve fiyat teklifi için bize ulaşın" />
      <Breadcrumb items={[{ name: "İletişim" }]} />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            
            {/* Şirket Unvanı Başlığı */}
            <div className="text-center">
              <span className="text-sm font-bold text-primary-600 uppercase tracking-wider">MİTA MEKANİK</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                MİTA HAVALANDIRMA MÜHENDİSLİK İNŞ. TAAH. OTO. SAN. VE TİC. LTD. ŞTİ.
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Havalandırma, iklimlendirme ve teknik servis ihtiyaçlarınız için profesyonel ekibimizle her zaman yanınızdayız.
              </p>
            </div>

            {/* İletişim Kartları Izgarası (Grid) */}
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

            {/* Detaylı Ofis ve Fabrika Adres Kartları */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary-600">
                  <MapPin className="w-4 h-4" />
                  <h4 className="text-sm font-bold uppercase tracking-wider">Ofis Adresi</h4>
                </div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed pl-6">
                  Lalapaşa Mah. İsmail Türk İş Merkezi No:1/2 <br />
                  Yakutiye / Erzurum
                </p>
              </div>
              
              <div className="space-y-2 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-slate-200 md:pl-8">
                <div className="flex items-center gap-2 text-primary-600">
                  <MapPin className="w-4 h-4" />
                  <h4 className="text-sm font-bold uppercase tracking-wider">Fabrika Adresi</h4>
                </div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed pl-6">
                  Soğukçermik Mahallesi. Küçük Akdağ Sitesi D blok no 3 <br />
                  Yakutiye / Erzurum
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}