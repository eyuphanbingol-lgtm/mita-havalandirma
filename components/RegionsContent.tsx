import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Region {
  name: string;
  slug: string;
  phone: string;
  address: string;
}

export default function RegionsContent() {
  const regions: Region[] = [
    {
      name: "Yakutiye",
      slug: "yakutiye",
      phone: "0507 259 08 04",
      address: "Yakutiye, Erzurum",
    },
    {
      name: "Palandöken",
      slug: "palandoken",
      phone: "0507 259 08 04",
      address: "Palandöken, Erzurum",
    },
    {
      name: "Aziziye",
      slug: "aziziye",
      phone: "0507 259 08 04",
      address: "Dadaşkent / Aziziye, Erzurum",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Hizmet Ağımız</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-metal-900 tracking-tight">
            Erzurum Hizmet Bölgelerimiz
          </h2>
          <p className="mt-4 text-base sm:text-lg text-metal-600">
            Erzurum'un tüm merkezi bölgelerine hızlı ve güvenilir mobil teknik servis araçlarımızla ulaşıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region) => {
            // Numaradaki tüm rakamları ayıkla
            const rawNumbers = region.phone.replace(/\D/g, "");
            // Eğer numara sıfırla başlıyorsa başındaki sıfırı kaldırıp +90 ekle, başlamıyorsa direkt ekle
            const cleanPhoneForCall = rawNumbers.startsWith("0") 
              ? `+90${rawNumbers.substring(1)}` 
              : `+90${rawNumbers}`;

            return (
              <div
                key={region.slug}
                className="group p-6 rounded-2xl bg-metal-50 border border-metal-100 hover:bg-white hover:border-primary-200 hover:shadow-xl hover:shadow-primary-600/5 transition-all duration-300 flex flex-col justify-between min-h-[250px]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white rounded-xl shadow-sm text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <Link
                      href={`/bolgelerimiz/${region.slug}`}
                      className="text-metal-400 hover:text-primary-600 transition-colors"
                      aria-label={`${region.name} detay sayfasına git`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-metal-900">{region.name}</h3>
                    <p className="mt-1 text-sm text-metal-500">{region.address}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-metal-100/80">
                  <a
                    href={`tel:${cleanPhoneForCall}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 active:text-primary-800 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{region.phone}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}