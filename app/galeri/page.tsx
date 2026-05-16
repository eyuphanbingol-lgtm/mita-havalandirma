import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";
import GalleryContent from "@/components/GalleryContent";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Tamamlanan projelerimizden ve hizmetlerimizden fotoğraflar.",
};

export default function GaleriPage() {
  return (
    <>
      <PageHeader title="Galeri" subtitle="Tamamlanan projelerimizden ve hizmetlerimizden kareler" />
      <Breadcrumb items={[{ name: "Galeri" }]} />
      <GalleryContent />
    </>
  );
}
