import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const LatestAppsSection = () => {
  // Define apps data first
  const apps = [
    {
      name: "Cash Bear",
      version: "1.0.2",
      category: "games",
      image: "https://sbjhub.com/wp-content/uploads/2024/11/unnamed-4.webp",
      rating: 5,
    },
    {
      name: "Money App",
      version: "2.1.0",
      category: "productivity",
      image: "https://sbjhub.com/wp-content/uploads/2024/11/unnamed-4.webp",
      rating: 4,
    },
    {
      name: "Cash Bear",
      version: "1.0.2",
      category: "games",
      image: "https://sbjhub.com/wp-content/uploads/2024/11/unnamed-4.webp",
      rating: 5,
    },
    {
      name: "Money App",
      version: "2.1.0",
      category: "productivity",
      image: "https://sbjhub.com/wp-content/uploads/2024/11/unnamed-4.webp",
      rating: 4,
    },
    {
      name: "Cash Bear",
      version: "1.0.2",
      category: "games",
      image: "https://sbjhub.com/wp-content/uploads/2024/11/unnamed-4.webp",
      rating: 5,
    },
    {
      name: "Money App",
      version: "2.1.0",
      category: "productivity",
      image: "https://sbjhub.com/wp-content/uploads/2024/11/unnamed-4.webp",
      rating: 4,
    },
    {
      name: "Cash Bear",
      version: "1.0.2",
      category: "games",
      image: "https://sbjhub.com/wp-content/uploads/2024/11/unnamed-4.webp",
      rating: 5,
    },
    {
      name: "Money App",
      version: "2.1.0",
      category: "productivity",
      image: "https://sbjhub.com/wp-content/uploads/2024/11/unnamed-4.webp",
      rating: 4,
    },
    {
      name: "Cash Bear",
      version: "1.0.2",
      category: "games",
      image: "https://sbjhub.com/wp-content/uploads/2024/11/unnamed-4.webp",
      rating: 5,
    },
    {
      name: "Money App",
      version: "2.1.0",
      category: "productivity",
      image: "https://sbjhub.com/wp-content/uploads/2024/11/unnamed-4.webp",
      rating: 4,
    },
    {
      name: "Cash Bear",
      version: "1.0.2",
      category: "games",
      image: "https://sbjhub.com/wp-content/uploads/2024/11/unnamed-4.webp",
      rating: 5,
    },
    {
      name: "Money App",
      version: "2.1.0",
      category: "productivity",
      image: "https://sbjhub.com/wp-content/uploads/2024/11/unnamed-4.webp",
      rating: 4,
    },
    {
      name: "Cash Bear",
      version: "1.0.2",
      category: "games",
      image: "https://sbjhub.com/wp-content/uploads/2024/11/unnamed-4.webp",
      rating: 5,
    },
    {
      name: "Money App",
      version: "2.1.0",
      category: "productivity",
      image: "https://sbjhub.com/wp-content/uploads/2024/11/unnamed-4.webp",
      rating: 4,
    },
  ];

  // Then declare states
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState(apps);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const appsPerPage = 6;

  // Calculate pagination values
  const totalPages = Math.ceil(filteredApps.length / appsPerPage);
  const startIndex = currentPage * appsPerPage;
  const visibleApps = filteredApps.slice(startIndex, startIndex + appsPerPage);

  // Filter apps based on search and category
  useEffect(() => {
    const filtered = apps.filter(
      (app) =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "all" || app.category === selectedCategory)
    );
    setFilteredApps(filtered);
    setCurrentPage(0);
  }, [searchTerm, selectedCategory]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header and Search Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-center mb-8"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Latest Apps
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Search apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="all">All Categories</option>
              <option value="games">Games</option>
              <option value="productivity">Productivity</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
          </div>
        </motion.div>

        {/* Apps Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleApps.map((app, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-4">
                  <div className="flex items-center space-x-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={app.image}
                      alt={app.name}
                      className="w-16 h-16 rounded-lg object-cover shadow-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                        {app.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Version {app.version}
                      </p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.svg
                            key={i}
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.2 }}
                            className={`w-4 h-4 ${
                              i < app.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center space-x-4 mt-8"
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 hover:bg-gray-100"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full ${
                  currentPage === index
                    ? "bg-blue-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
            }
            disabled={currentPage === totalPages - 1}
            className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 hover:bg-gray-100"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestAppsSection;
