import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeServices from "@/components/HomeServices";
import HomeStats from "@/components/HomeStats";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeStats />
      <HomeContact />
      <Footer/>
    </>
  );
}
