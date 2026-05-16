import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";
import RegionsContent from "@/components/RegionsContent";

export const metadata: Metadata = {
  title: "Bölgeler | Havalandırma ve İklimlendirme Profesyonel Çözümler",
  description: "Erzurum merkezli olmak üzere Türkiye genelinde endüstriyel mutfak, havalandırma, baca ve sulu filtre sistemleri sunduğumuz bölgeler.",
  keywords: ["havalandırma bölgeleri", "erzurum havalandırma", "teknik servis bölgeleri"],
};

export default function BolgelerPage() {
  return (
    <>
      {/* Üst Başlık Alanı */}
      <PageHeader 
        title="Hizmet Verdiğimiz Bölgeler" 
        subtitle="Erzurum merkez ofisimizden Türkiye geneline uzanan profesyonel havalandırma ve iklimlendirme ağı" 
      />
      
      {/* Sayfa Yolu (Navigasyon) */}
      <Breadcrumb items={[{ name: "Bölgeler" }]} />
      
      {/* Dinamik Bölge Kartları Listesi */}
      <RegionsContent />
    </>
  );
}