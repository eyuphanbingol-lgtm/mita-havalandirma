import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Mita Mühendislik Havalandırma olarak, teknik uzmanlığımızı üretim gücümüzle birleştirerek sektörde güvenin ve kalitenin temsilcisi olmayı sürdürüyoruz.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <PageHeader title="Hakkımızda" subtitle="Doğru hava, doğru sistem, doğru mühendislik." />
      <Breadcrumb items={[{ name: "Hakkımızda" }]} />
      <AboutContent />
    </>
  );
}