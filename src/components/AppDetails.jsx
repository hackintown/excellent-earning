import { motion } from "framer-motion";
import { FaStar, FaDownload, FaShare } from "react-icons/fa";
import { useParams } from "react-router-dom";

const AppDetails = () => {
  const { appName } = useParams();

  // Find the app details from your apps data
  // You'll need to import your apps data or fetch it
  const app = apps.find(
    (a) => a.name.toLowerCase().replace(/\s+/g, "-") === appName
  );

  if (!app) {
    return <div>App not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-64 md:h-96 bg-gradient-to-r from-blue-500 to-purple-600">
            <img
              src={app.image}
              alt={app.name}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center space-x-6">
                <img
                  src={app.image}
                  alt={app.name}
                  className="w-24 h-24 rounded-2xl shadow-lg"
                />
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">
                    {app.name}
                  </h1>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-5 h-5 ${
                            i < app.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-white">Version {app.version}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold"
              >
                <FaDownload />
                <span>Download APK</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
              >
                <FaShare />
                <span>Share App</span>
              </motion.button>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-600 mb-6">{app.description}</p>

              <h2 className="text-2xl font-bold mb-4">How to Use</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ol className="list-decimal list-inside space-y-3">
                  <li>Download and install the app</li>
                  <li>Create an account or sign in</li>
                  <li>Complete available tasks</li>
                  <li>Earn rewards and withdraw money</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
