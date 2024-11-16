import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands of satisfied clients and take your business to the
            next level.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Get Started Now
            </button>
            <button className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule a Demo
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
