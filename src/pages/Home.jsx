import { motion } from "framer-motion";
import HeroSection from "../components/Home/HeroSection";
import ServicesSection from "../components/Home/ServicesSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import LatestAppsSection from "../components/Home/LatestAppsSection";
import TopRatedAppsSection from "../components/Home/TopRatedAppsSection";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <TopRatedAppsSection />
      <LatestAppsSection />
      <ServicesSection />
      <FeaturesSection />
    </motion.div>
  );
};

export default Home;
