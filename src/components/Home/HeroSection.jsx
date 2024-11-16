import { motion } from "framer-motion";
import Slider from "react-slick";
import { FiSearch } from "react-icons/fi";
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
  };

  const statsData = [
    { value: "50K+", label: "Active Users" },
    { value: "$2M+", label: "Revenue Generated" },
    { value: "95%", label: "Success Rate" },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 to-white">
      {/* Background Animations */}
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
        className="absolute top-20 right-20 w-64 h-64 bg-green-300 rounded-full filter blur-3xl opacity-20"
      />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Maximize Your <span className="text-green-600">Earning</span>{" "}
              Potential
            </motion.h1>

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative max-w-xl"
            >
              <input
                type="text"
                placeholder="Search earning opportunities..."
                className="w-full px-6 py-4 rounded-full border-2 border-green-200 focus:border-green-500 focus:outline-none shadow-lg pr-12"
              />
              <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-green-500" />
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <h3 className="text-3xl font-bold text-green-600">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Slider
              {...sliderSettings}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              {[
                "https://images.unsplash.com/photo-1518183214770-9cffbec72538?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVhcm5pbmclMjBtb25leXxlbnwwfHwwfHx8MA%3D%3D",
                "https://t4.ftcdn.net/jpg/07/59/01/61/360_F_759016188_HozQLN7MemvK7C73mPgzt5kpUkNU674E.jpg",
                "https://media.licdn.com/dms/image/C4E12AQEOTnpBmtyGIA/article-cover_image-shrink_720_1280/0/1647506715805?e=2147483647&v=beta&t=PByfViBtmZx9t3Zbai4d2ahgeoIgm97xJanegeLXr_Y",
                ,
              ].map((item) => (
                <div key={item} className="relative h-[500px]">
                  <img
                    src={item}
                    alt={`Earning Opportunity ${item}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="absolute bottom-8 left-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">Success Story</h3>
                      <p className="text-sm">
                        Learn how our users are earning more
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
