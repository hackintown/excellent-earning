import { motion } from "framer-motion";

const stats = [
  { number: 500, suffix: "+", title: "Clients Served" },
  { number: 95, suffix: "%", title: "Client Satisfaction" },
  { number: 10, suffix: "+", title: "Years Experience" },
  { number: 250, suffix: "+", title: "Projects Completed" },
];

const StatisticsSection = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={stat.number} duration={2.5} />
                {stat.suffix}
              </div>
              <div className="text-indigo-100">{stat.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;
