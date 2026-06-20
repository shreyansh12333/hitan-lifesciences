import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import IndustriesSection from "../components/IndustriesSection";
import ProductCategories from "../components/ProductCategories";
import TrustSection from "../components/TrustSection";
import VisionMission from "../components/VisionMission";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <AboutSection />
      <ProductCategories />
      <IndustriesSection />
      <WhyChooseUs />
      <VisionMission />
    </>
  );
}
