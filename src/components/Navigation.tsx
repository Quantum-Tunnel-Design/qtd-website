import { useState } from "react";
import { ChevronDown, Search, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const capabilities = [
    "Cloud",
    "Cybersecurity",
    "Data and Artificial Intelligence",
    "Digital Engineering and Manufacturing",
    "Emerging Technology",
    "Ecosystem Partners",
    "Finance and Risk Management",
    "Infrastructure and Capital Projects",
    "Learning",
  ];

  const industries = [
    "Aerospace and Defense",
    "Automotive",
    "Banking",
    "Capital Markets",
    "Chemicals",
    "Communications and Media",
    "Consumer Goods and Services",
    "Energy",
    "Health",
    "High Tech",
    "Industrial",
  ];

  return (
    <nav className="fixed w-full bg-accenture-dark/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-accenture-purple text-4xl font-bold">{'>'}</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-white hover:text-accenture-purple transition-colors"
              >
                What we do <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <Link to="/what-we-think" className="text-white hover:text-accenture-purple transition-colors">
              What we think
            </Link>
            <Link to="/who-we-are" className="text-white hover:text-accenture-purple transition-colors">
              Who we are
            </Link>
            <a href="#" className="text-white hover:text-accenture-purple transition-colors">
              Careers
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="text-white hover:text-accenture-purple transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-accenture-purple transition-colors flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>USA</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-accenture-darker text-white overflow-hidden"
          >
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-sm font-semibold mb-4 text-gray-400">Capabilities</h3>
                  <ul className="space-y-3">
                    {capabilities.map((item) => (
                      <li key={item}>
                        <a href="#" className="hover:text-accenture-purple transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-4 text-gray-400">Industries</h3>
                  <ul className="space-y-3">
                    {industries.map((item) => (
                      <li key={item}>
                        <a href="#" className="hover:text-accenture-purple transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;