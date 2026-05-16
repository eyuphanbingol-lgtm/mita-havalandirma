import { Metadata } from "next";
import Link from "next/link";
import { 
  Flame, 
  Thermometer, 
  Droplets, 
  Wind, 
  Factory, 
  Filter, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Mita Mekanik Havalandırma",
  description: "Endüstriyel mutfak, sulu filtre, havalandırma ve mekanik baca sistemlerinde Erzurum genelinde profesyonel çözümler.",
};

export default function HizmetlerimizPage() {
  // Görseldeki 6 hizmetin detaylandırılmış veri seti
  const services = [
    {
      icon: Flame,
      title: "Endüstriyel Mutfak",
      description: "Restoran, otel ve fabrika mutfakları için uluslararası standartlara uygun havalandırma projeleri.",
      longDescription: "Yoğun buhar, duman ve koku üreten endüstriyel mutfak alanlarında; hava sirkülasyonunu kusursuz yöneten davlumbaz hatları, yangın damperleri ve yüksek emiş gücüne sahip salyangoz fan sistemleri kuruyoruz. 7/24 teknik servis desteğimizle işletmenizin sürekliliğini güvenceye alıyoruz.",
      features: ["7/24 Acil Teknik Müdahale", "Paslanmaz Davlumbaz Montajı", "Koku ve Yağ Filtreleme Teknolojileri"],
      color: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
      icon: Thermometer,
      title: "Isıtma ve Soğutma",
      description: "Ortam sıcaklığını ve taze hava dengesini istenilen seviyede tutan profesyonel iklimlendirme çözümleri.",
      longDescription: "Büyük hacimli ticari alanlar, ofisler ve imalathaneler için VRF, fan-coil ve kanal tipi klima sistemlerinin projelendirilmesini yapıyoruz. Enerji verimliliği yüksek ünitelerle dört mevsim ideal çalışma ortam sıcaklığı sunuyoruz.",
      features: ["VRF ve Merkezi Klima Kurulumu", "Kanal Tipi İklimlendirme", "Düşük Enerji Tüketimi & Tasarruf"],
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      icon: Droplets,
      title: "Sulu Baca Sistemleri",
      description: "Kara fırınlar, pide salonları ve yüksek kurum üreten işletmeler için etkili duman ve kurum filtreleme.",
      longDescription: "Odun ve kömür ateşi kullanan işletmelerin çevreye zarar vermesini önleyen, dumanı ve kurumu su perdesinden geçirerek %90'ın üzerinde filtreleyen sulu sistem baca imalatı yapıyoruz. Çevre mevzuatlarına tam uyumludur.",
      features: ["Yüksek Verimli Kurum Tutma", "Çevre Mevzuatına %100 Uygun", "Kolay Temizlenebilir Mekanik Altyapı"],
      color: "bg-teal-50 text-teal-600 border-teal-100"
    },
    {
      icon: Wind,
      title: "Baca Sistemleri",
      description: "Atık gazların, dumanın ve zehirli havanın güvenli, verimli ve sızdırmaz şekilde dışarı atılması.",
      longDescription: "Doğalgaz, katı yakıt veya endüstriyel üretim hatlarından çıkan atık gazların güvenle tahliye edilmesi için çift cidarlı paslanmaz çelik baca sistemleri tasarlıyoruz. Sızdırmazlık testi yapılmış, uzun ömürlü malzemeler kullanıyoruz.",
      features: ["Çift Cidarlı Paslanmaz Çelik", "Isı ve Sızdırmazlık İzolasyonu", "CE Standartlarında İmalat"],
      color: "bg-slate-50 text-slate-600 border-slate-100"
    },
    {
      icon: Factory,
      title: "Havalandırma Systems",
      description: "Kapalı ortamlar, sığınaklar ve fabrikalar için temiz hava akımı ve sürekli iklimlendirme.",
      longDescription: "İş yerlerinde çalışan sağlığını korumak ve hava kalitesini artırmak için taze hava besleme ve kirli hava egzoz hatları tasarlıyoruz. Menfezlerden hava kanallarına kadar tüm mimariyi mühendislik hesaplamalarıyla uyguluyoruz.",
      features: ["Fabrika & İmalathane Havalandırması", "Sığınak Taze Hava Sistemleri", "Hava Kanalları Projelendirme"],
      color: "bg-indigo-50 text-indigo-600 border-indigo-100"
    },
    {
      icon: Filter,
      title: "Bacasız Davlumbaz",
      description: "Paslanmaz çelik elektrostatik filtreler ile baca çıkışı olmayan alanlarda yüksek pişirme güvenliği.",
      longDescription: "Mimari yapısı veya konumu gereği dışarıya baca çıkarma imkanı bulunmayan avm, tarihi bina veya dükkanlar için elektrostatik ve aktif karbon filtreli kokuyu ve dumanı yok eden özel davlumbaz çözümleri sunuyoruz.",
      features: ["Elektrostatik & Karbon Filtre", "Dış Bacaya İhtiyaç Duymayan Yapı", "Dumansız ve Kokusuz Pişirme Alanı"],
      color: "bg-amber-50 text-amber-600 border-amber-100"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Üst Başlık Alanı */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-sm font-bold text-primary-600 uppercase tracking-widest bg-primary-50 px-4 py-1.5 rounded-full">
          MİTA MEKANİK MÜHENDİSLİK
        </span>
        <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Profesyonel Havalandırma Çözümlerimiz
        </h1>
        <p className="mt-4 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Erzurum merkezli olmak üzere tüm mekanik altyapı, imalat ve montaj süreçlerinde mühendislik standartlarına uygun anahtar teslim projeler üretiyoruz.
        </p>
      </div>

      {/* Detaylı Hizmet Kartları Listesi */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Başlık ve İkon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl border ${service.color} flex-shrink-0 shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-sm font-semibold text-primary-600 mt-0.5">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Detaylı Geniş Açıklama */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {service.longDescription}
                  </p>

                  {/* Öne Çıkan Alt Özellikler */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* İletişim / Teklif Butonu */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 tracking-wider">MİTA GÜVENCESİ</span>
                  <Link 
                    href="/iletisim" 
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors group"
                  >
                    <span>Detaylı Bilgi & Teklif</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Alt Bilgi Bandı */}
        <div className="mt-16 p-8 sm:p-12 bg-primary-600 rounded-3xl text-center text-white shadow-xl shadow-primary-900/10">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Projeniz İçin Teknik Keşif Mi İstiyorsunuz?</h3>
          <p className="mt-2 text-primary-100 max-w-2xl mx-auto text-sm sm:text-base">
            Müşterilerimize ücretsiz ön keşif imkanı sunuyoruz. Alanında uzman teknik kadromuz yerinizde ölçü alarak en doğru havalandırma projesini hazırlar.
          </p>
          <div className="mt-8">
            <Link 
              href="/iletisim" 
              className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-slate-50 font-bold px-8 h-14 rounded-2xl shadow-md transition-all active:scale-98"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}