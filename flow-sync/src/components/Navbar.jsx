import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Features", "Pricing", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          <ScrollLink to="hero" smooth={true} duration={500}>
            FlowSync
          </ScrollLink>
        </h1>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {links.map((link, i) => (
            <li key={i}>
              <ScrollLink
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-2xl">☰</span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-inner"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center py-4 space-y-4 text-gray-800 font-medium">
              {links.map((link, i) => (
                <li key={i}>
                  <ScrollLink
                    to={link.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="hover:text-blue-600 cursor-pointer transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
