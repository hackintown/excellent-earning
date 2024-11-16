import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaUsers, FaCog } from "react-icons/fa";

const services = [
  {
    icon: <FaRocket className="text-4xl text-indigo-600" />,
    title: "Business Growth",
    description:
      "Accelerate your business growth with our proven strategies and tools.",
  },
  {
    icon: <FaChartLine className="text-4xl text-indigo-600" />,
    title: "Market Analysis",
    description: "Deep insights into market trends and competitive analysis.",
  },
  {
    icon: <FaUsers className="text-4xl text-indigo-600" />,
    title: "Team Building",
    description: "Build and manage high-performing remote teams effectively.",
  },
  {
    icon: <FaCog className="text-4xl text-indigo-600" />,
    title: "Process Optimization",
    description: "Streamline your operations for maximum efficiency.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital
            age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-base text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
