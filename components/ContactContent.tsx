"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Navigation,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ofis Adresi",
    value:
      "Lalapaşa Mah. İsmail Türk İş Merkezi No:1/2 Yakutiye / Erzurum",
    desc:
      "MİTA HAVALANDIRMA MÜHENDİSLİK İNŞ. TAAH. OTO. SAN. VE TİC. LTD. ŞTİ.",
  },
  {
    icon: MapPin,
    title: "Fabrika Adresi",
    value:
      "Soğukçermik Mahallesi Küçük Akdağ Sitesi D Blok No:3 Yakutiye / Erzurum",
    desc: "Üretim ve İmalat Tesisi",
  },
  {
    icon: Phone,
    title: "Telefon (GSM)",
    value: "0536 022 70 80",
    desc: "7/24 Teknik Servis ve Keşif",
    href: "tel:+905360227080",
  },
  {
    icon: Mail,
    title: "E-posta",
    value: "iletisim@mitahavalandirma.com", // Ekranda kurumsal gözükecek
    desc: "Proje ve teklifleriniz için",
    href: "mailto:mitamekanik@gmail.com", // Tıklayınca doğrudan buraya gidecek!
  },
  {
    icon: Clock,
    title: "Firma Bilgileri",
    value: "K.K.V.D: 622 255 50 40",
    desc: "Mersis No: 062225550400001",
  },
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-metal-900 mb-2">
                  Bize Ulaşın
                </h2>

                <p className="text-metal-500 mb-6">
                  Projeleriniz için ücretsiz keşif ve fiyat teklifi almak için
                  formu doldurun veya doğrudan arayın.
                </p>
              </div>

              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-metal-50 rounded-2xl hover:bg-primary-50 hover:border-primary-200 border border-transparent transition-all"
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <info.icon className="w-5 h-5 text-primary-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-metal-900 mb-1">
                      {info.title}
                    </h3>

                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-metal-700 font-medium hover:text-primary-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-metal-700 font-medium">
                        {info.value}
                      </p>
                    )}

                    <p className="text-sm text-metal-400 mt-1">
                      {info.desc}
                    </p>
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/905360227080"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-semibold transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp'tan Hızlı Ulaşın
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-metal-50 rounded-3xl p-8 border border-metal-100"
              >
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 bg-emerald-100 rounded-full mb-4">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>

                    <h3 className="text-xl font-bold text-metal-900 mb-2">
                      Talebiniz Alındı!
                    </h3>

                    <p className="text-metal-500">
                      En kısa sürede size dönüş yapacağız.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-metal-900 mb-6">
                      Teklif Formu
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-sm font-semibold text-metal-700 mb-2">
                          Adınız Soyadınız
                        </label>

                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-metal-200 bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                          placeholder="Örn: Ahmet Yılmaz"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-metal-700 mb-2">
                          E-posta Adresiniz
                        </label>

                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-metal-200 bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                          placeholder="ornek@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-sm font-semibold text-metal-700 mb-2">
                          Telefon Numaranız
                        </label>

                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-metal-200 bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                          placeholder="05XX XXX XX XX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-metal-700 mb-2">
                          Hizmet Türü
                        </label>

                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              service: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-metal-200 bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                        >
                          <option value="">Seçiniz</option>
                          <option value="galvaniz-kanal">
                            Galvaniz Hava Kanalı Sistemleri
                          </option>
                          <option value="spiral-kenetli">
                            Spiral Kenetli Hava Kanalları
                          </option>
                          <option value="flansli-kanal">
                            Flanşlı ve Contalı Kanal Sistemleri
                          </option>
                          <option value="ozel-imalat">
                            Özel Ölçü ve Proje İmalatları
                          </option>
                          <option value="havalandirma">
                            Genel Havalandırma Sistemleri
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-metal-700 mb-2">
                        Proje Detayları
                      </label>

                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-metal-200 bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                        placeholder="Projeniz hakkında kısa bir bilgi verin..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-xl font-semibold text-lg transition-all"
                    >
                      <Send className="w-5 h-5" />
                      Talep Gönder
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-0">
        <div className="w-full h-[400px] bg-metal-100 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.2412154388307!2d41.27204487654877!3d39.91136498565593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406e8f498c36ad17%3A0xc07a4ef9940a049f!2zTGFsYXBhxZ9hLCDEsHNtYWlsIFTDvHJrIMSwxZ8gTWVya2V6aSwgMjUwNTAgWWFrdXRpeWUvRXJ6dXJ1bQ!5e0!3m2!1str!2str!4v1715887200000!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />

          <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <Navigation className="w-5 h-5 text-primary-600" />
              <span className="font-bold text-metal-900">Ofis Konumu</span>
            </div>

            <p className="text-sm text-metal-500">
              Lalapaşa Mah. İsmail Türk İş Merkezi No:1/2 Yakutiye / Erzurum
            </p>
          </div>
        </div>
      </section>
    </>
  );
}