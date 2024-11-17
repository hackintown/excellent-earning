import { motion } from "framer-motion";
import {
  FaCode,
  FaMobile,
  FaSearch,
  FaVideo,
  FaMoneyBillWave,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const serviceCategories = [
  {
    id: "itServices",
    title: "IT Services",
    services: [
      {
        icon: <FaCode className="text-4xl text-primary" />,
        title: "Website Development",
        description:
          "Custom websites, web apps, and e-commerce solutions built with cutting-edge technologies.",
        link: "/services/web-development",
      },
      {
        icon: <FaMobile className="text-4xl text-primary" />,
        title: "App Development",
        description:
          "Native and cross-platform mobile applications for iOS and Android.",
        link: "/services/app-development",
      },
      {
        icon: <FaSearch className="text-4xl text-primary" />,
        title: "SEO Services",
        description:
          "Boost your online presence with our expert SEO optimization strategies.",
        link: "/services/seo",
      },
      {
        icon: <FaSearch className="text-4xl text-primary" />,
        title: "SMM Services",
        description:
          "Boost your online presence with our expert SEO optimization strategies.",
        link: "/services/seo",
      },
      {
        icon: <FaSearch className="text-4xl text-primary" />,
        title: "SMO Services",
        description:
          "Boost your online presence with our expert SEO optimization strategies.",
        link: "/services/seo",
      },
    ],
  },
  {
    id: "digitalProducts",
    title: "Digital Products",
    services: [
      {
        icon: <FaVideo className="text-4xl text-primary" />,
        title: "Reels Bundle",
        description:
          "Premium reels, animation videos, viral memes, and trending movie clips.",
        link: "/products/content-bundles",
        tags: ["Reels", "Animations", "Memes"],
      },
      {
        icon: <FaVideo className="text-4xl text-primary" />,
        title: "Movies Clips Bundle",
        description:
          "Premium reels, animation videos, viral memes, and trending movie clips.",
        link: "/products/content-bundles",
        tags: ["Reels", "Animations", "Memes"],
      },
      {
        icon: <FaVideo className="text-4xl text-primary" />,
        title: "Animation Videos Bundle",
        description:
          "Premium reels, animation videos, viral memes, and trending movie clips.",
        link: "/products/content-bundles",
        tags: ["Reels", "Animations", "Memes"],
      },
      {
        icon: <FaVideo className="text-4xl text-primary" />,
        title: "Animation Videos Bundle",
        description:
          "Premium reels, animation videos, viral memes, and trending movie clips.",
        link: "/products/content-bundles",
        tags: ["Reels", "Animations", "Memes"],
      },
      {
        icon: <FaVideo className="text-4xl text-primary" />,
        title: "Animation Videos Bundle",
        description:
          "Premium reels, animation videos, viral memes, and trending movie clips.",
        link: "/products/content-bundles",
        tags: ["Reels", "Animations", "Memes"],
      },
    ],
  },
  {
    id: "earningOpportunities",
    title: "Earning Opportunities",
    services: [
      {
        icon: <FaMoneyBillWave className="text-4xl text-primary" />,
        title: "Referral Programs",
        description:
          "Join our lucrative referral programs and earn passive income.",
        link: "/earn/referrals",
      },
      {
        icon: <FaMoneyBillWave className="text-4xl text-primary" />,
        title: "Referral Programs",
        description:
          "Join our lucrative referral programs and earn passive income.",
        link: "/earn/referrals",
      },
      {
        icon: <FaMoneyBillWave className="text-4xl text-primary" />,
        title: "Referral Programs",
        description:
          "Join our lucrative referral programs and earn passive income.",
        link: "/earn/referrals",
      },
      {
        icon: <FaMoneyBillWave className="text-4xl text-primary" />,
        title: "Referral Programs",
        description:
          "Join our lucrative referral programs and earn passive income.",
        link: "/earn/referrals",
      },
      {
        icon: <FaMoneyBillWave className="text-4xl text-primary" />,
        title: "Referral Programs",
        description:
          "Join our lucrative referral programs and earn passive income.",
        link: "/earn/referrals",
      },
    ],
  },
];

// Custom arrow components with react-icons
const PrevArrow = ({ className, onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all"
  >
    <FaChevronLeft className="w-5 h-5 text-primary" />
  </button>
);

const NextArrow = ({ className, onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all"
  >
    <FaChevronRight className="w-5 h-5 text-primary" />
  </button>
);

// Custom dot component
const CustomDot = ({ onClick, active }) => (
  <button
    onClick={onClick}
    className={`mx-1 transition-all duration-300 ${
      active
        ? "w-8 h-2 bg-primary rounded-full"
        : "w-2 h-2 bg-gray-300 rounded-full hover:bg-primary/50"
    }`}
  />
);

// Update slider settings
const sliderSettings = {
  itServices: {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div className="flex items-center justify-center gap-2 mt-6">{dots}</div>
    ),
    customPaging: (i) => <CustomDot />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  },
  digitalProducts: {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div className="flex items-center justify-center gap-2 mt-6">{dots}</div>
    ),
    customPaging: (i) => <CustomDot />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  },
  earningOpportunities: {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div className="flex items-center justify-center gap-2 mt-6">{dots}</div>
    ),
    customPaging: (i) => <CustomDot />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  },
};

const ServicesSection = () => {
  return (
    <section className="py-20 relative bg-card">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Services & Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions to transform your ideas into reality
          </p>
        </motion.div>

        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16 relative">
            <div className="flex justify-between items-center mb-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-foreground/90"
              >
                {category.title}
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to={`/services/${category.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                >
                  View All
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </motion.div>
            </div>

            <Slider
              {...sliderSettings[category.id]}
              className="services-slider"
            >
              {category.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="h-full">
                    <div className="group relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                          {service.icon}
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-3">
                          {service.title}
                        </h4>
                        <p className="text-muted-foreground mb-4 flex-1">
                          {service.description}
                        </p>
                        {service.tags && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <Link
                          to={service.link}
                          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 mt-auto"
                        >
                          Learn More
                          <FaArrowRight className="ml-2 text-sm" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
