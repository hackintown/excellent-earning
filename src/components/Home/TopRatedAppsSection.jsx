import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const topRatedApps = [
  {
    name: "Snapchat",
    version: "12.26.0.20",
    rating: 4,
    image: "https://sbjhub.com/wp-content/uploads/2023/03/unnamed-23.png",
    downloads: "1M+",
  },
  {
    name: "Apnaa Quiz",
    version: "1.0.8",
    rating: 4,
    image: "https://sbjhub.com/wp-content/uploads/2023/11/unnamed-75.webp",
    downloads: "500K+",
  },
  {
    name: "ShareChat",
    version: "2023.16",
    rating: 4,
    image: "https://sbjhub.com/wp-content/uploads/2023/01/unnamed-50-4.webp",
    downloads: "5M+",
  },
];

const NextArrow = ({ onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-lg"
    onClick={onClick}
  >
    <FiChevronRight className="text-2xl text-gray-800" />
  </motion.button>
);

const PrevArrow = ({ onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-lg"
    onClick={onClick}
  >
    <FiChevronLeft className="text-2xl text-gray-800" />
  </motion.button>
);

const TopRatedAppsSection = () => {
  const [hoveredApp, setHoveredApp] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      setHoveredApp(null);
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Top Rated Apps
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the most loved apps by our community
          </p>
        </motion.div>

        <div className="relative px-10">
          <Slider {...settings}>
            {topRatedApps.map((app, index) => (
              <motion.div
                key={index}
                onHoverStart={() => setHoveredApp(index)}
                onHoverEnd={() => setHoveredApp(null)}
                className="px-4 py-2"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{
                    scale: hoveredApp === index ? 1.05 : 1,
                    y: hoveredApp === index ? -10 : 0,
                  }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden p-6 border border-gray-100 backdrop-blur-sm bg-white/90"
                >
                  <div className="flex items-center space-x-4">
                    <motion.img
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      src={app.image}
                      alt={app.name}
                      className="w-16 h-16 rounded-xl shadow-md"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{app.name}</h3>
                      <p className="text-sm text-gray-500">
                        Version {app.version}
                      </p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {hoveredApp === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 text-sm text-gray-600"
                      >
                        <p>Click to download and start earning!</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 1 }}
                          animate={{
                            scale:
                              hoveredApp === index && i < app.rating ? 1.2 : 1,
                          }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <FaStar
                            className={`${
                              i < app.rating
                                ? "text-yellow-400"
                                : "text-gray-200"
                            } w-4 h-4`}
                          />
                        </motion.div>
                      ))}
                    </div>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="text-sm font-medium px-3 py-1 bg-green-100 text-green-800 rounded-full"
                    >
                      {app.downloads}
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TopRatedAppsSection;
