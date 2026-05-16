import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Ücretsiz keşif ve fiyat teklifi için bize ulaşın. 7/24 teknik servis desteği.",
};

export default function IletisimPage() {
  return (
    <>
      <PageHeader title="İletişim" subtitle="Ücretsiz keşif ve fiyat teklifi için bize ulaşın" />
      <Breadcrumb items={[{ name: "İletişim" }]} />
      <ContactContent />
    </>
  );
}
