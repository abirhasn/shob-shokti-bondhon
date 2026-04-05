import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCampaigns from "@/components/FeaturedCampaigns";
import HowItWorks from "@/components/HowItWorks";
import CategoriesSection from "@/components/CategoriesSection";
import ImpactStats from "@/components/ImpactStats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedCampaigns />
      <CategoriesSection />
      <HowItWorks />
      <ImpactStats />
      <Footer />
    </div>
  );
};

export default Index;
