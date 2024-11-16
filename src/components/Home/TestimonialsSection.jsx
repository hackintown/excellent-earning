import { motion } from "framer-motion";
import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "John Smith",
    position: "CEO, Tech Corp",
    image: "/path-to-image1.jpg",
    text: "Working with this team has been an absolute game-changer for our business. Their expertise and dedication are unmatched.",
  },
  {
    name: "Sarah Johnson",
    position: "Founder, StartUp Inc",
    image: "/path-to-image2.jpg",
    text: "The results we've achieved together have far exceeded our expectations. Highly recommended!",
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by businesses</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <button
            onClick={prevTestimonial}
            className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
          >
            <FaChevronLeft size={24} />
          </button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-1/2 h-80 overflow-hidden rounded-lg"
          >
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <button
            onClick={nextTestimonial}
            className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
          >
            <FaChevronRight size={24} />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-2">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-gray-600">{testimonials[currentIndex].position}</p>
          <FaQuoteLeft className="text-indigo-600 mx-2" />
          <p className="text-gray-800">{testimonials[currentIndex].text}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
