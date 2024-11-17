import { motion } from "framer-motion";
import Slider from "react-slick";
import {
  FiSearch,
  FiTrendingUp,
  FiDollarSign,
  FiAward,
  FiPlay,
  FiArrowRight,
} from "react-icons/fi";
import {
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: () => (
      <div className="w-3 h-3 bg-muted rounded-full hover:bg-primary transition-colors duration-200"></div>
    ),
  };

  const statsData = [
    { value: "50K+", label: "Active Users", icon: <FiTrendingUp /> },
    { value: "$2M+", label: "Paid Out", icon: <FiDollarSign /> },
    { value: "95%", label: "Success Rate", icon: <FiAward /> },
  ];

  const featuredOpportunities = [
    "Freelancing",
    "Affiliate Marketing",
    "Online Surveys",
    "Content Creation",
  ];

  const socialLinks = [
    { icon: <FaTelegramPlane />, href: "#", label: "Telegram" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaYoutube />, href: "#", label: "YouTube" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background to-card">
      {/* Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-20"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [180, 360, 180],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-20"
      />

      {/* Add Social Media Links */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            aria-label={social.label}
            className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-200"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="container mx-auto px-4 pt-20 lg:pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content Updates */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
              >
                <FiPlay className="text-lg" />
                Start Earning Today
                <FiArrowRight className="text-lg" />
              </motion.span>

              <motion.h1
                className="text-4xl md:text-6xl font-bold leading-tight font-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Transform Your Skills Into&nbsp;
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Income
                </span>
              </motion.h1>

              <motion.p
                className="text-muted-foreground text-sm lg:text-lg max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Discover legitimate earning opportunities tailored to your
                skills and schedule.
              </motion.p>
            </div>

            {/* Mobile Social Links */}
            <motion.div
              className="flex gap-4 lg:hidden justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full bg-card border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative max-w-xl"
            >
              <input
                type="text"
                placeholder="What skill would you like to monetize?"
                className="w-full px-6 py-4 rounded-full text-sm lg:text-base border-2 border-muted bg-card hover:border-primary focus:border-primary focus:outline-none shadow-lg pr-12 text-foreground placeholder:text-muted-foreground transition-colors duration-200"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-full transition-colors duration-200">
                <FiSearch className="text-xl" />
              </button>
            </motion.div>

            {/* Featured Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {featuredOpportunities.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground cursor-pointer transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Update Stats Section for better mobile display */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 lg:p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors duration-200"
                >
                  <div className="text-primary mb-2 text-xl lg:text-2xl">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground text-xs lg:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Update Slider for better mobile display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 lg:mt-0"
          >
            <Slider
              {...sliderSettings}
              className="rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              {[
                "https://images.unsplash.com/photo-1518183214770-9cffbec72538?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVhcm5pbmclMjBtb25leXxlbnwwfHwwfHx8MA%3D%3D",
                "https://t4.ftcdn.net/jpg/07/59/01/61/360_F_759016188_HozQLN7MemvK7C73mPgzt5kpUkNU674E.jpg",
                "https://media.licdn.com/dms/image/C4E12AQEOTnpBmtyGIA/article-cover_image-shrink_720_1280/0/1647506715805?e=2147483647&v=beta&t=PByfViBtmZx9t3Zbai4d2ahgeoIgm97xJanegeLXr_Y",
              ].map((item, index) => (
                <div key={index} className="relative h-[300px] lg:h-[500px]">
                  <img
                    src={item}
                    alt={`Success Story ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/50 to-transparent">
                    <div className="absolute bottom-8 left-8 right-8 space-y-2">
                      <span className="px-3 py-1 rounded-full bg-success/20 text-success text-sm">
                        Success Story #{index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-primary-foreground">
                        From Beginner to Pro
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Discover how our users are turning their skills into
                        sustainable income streams.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
