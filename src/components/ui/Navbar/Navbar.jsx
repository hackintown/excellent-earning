import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiSmartphone,
  FiInfo,
  FiMail,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { GiNewspaper } from "react-icons/gi";

const navItems = [
  { title: "Home", path: "/", icon: <FiHome className="text-xl" /> },
  {
    title: "Best Earning App",
    path: "/earning-apps",
    icon: <FiSmartphone className="text-xl" />,
  },
  { title: "News", path: "/news", icon: <GiNewspaper className="text-xl" /> },
  { title: "About Us", path: "/about", icon: <FiInfo className="text-xl" /> },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <FiMail className="text-xl" />,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <nav className="bg-background border-b border-border shadow-sm fixed w-full z-50 transition-colors duration-300">
      <div className="container">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:from-primary/90 hover:to-secondary/90 transition-all duration-300"
            >
              Excellent Earning
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
            >
              {isDark ? (
                <FiSun className="text-xl text-warning" />
              ) : (
                <FiMoon className="text-xl text-accent" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-muted"
            >
              {isDark ? (
                <FiSun className="text-xl text-warning" />
              ) : (
                <FiMoon className="text-xl text-accent" />
              )}
            </motion.button>

            <button
              onClick={toggleMenu}
              className="flex flex-col space-y-1.5 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 block"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 block"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 block"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed top-16 left-0 w-72 h-screen bg-background border-r border-border shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, i) => (
                <motion.div key={item.path} custom={i} variants={linkVariants}>
                  <Link
                    to={item.path}
                    className="flex items-center space-x-3 px-4 py-3 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
