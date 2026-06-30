import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import PowerFeatures from "@/components/PowerFeatures";
import Devices from "@/components/Devices";
import Languages from "@/components/Languages";
import Specs from "@/components/Specs";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <PromoBanner />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <AppShowcase />
        <PowerFeatures />
        <Devices />
        <Languages />
        <Specs />
        <Pricing />
        <Testimonials />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
