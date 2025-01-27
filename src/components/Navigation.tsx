import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThinkOpen, setIsThinkOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Sri Lanka");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const { toast } = useToast();

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

  const thinkingTopics = [
    "Overview",
    "Industry thinking",
    "Deloitte Insights",
    "Climate",
    "Digital",
    "Work"
  ];

  const countries = ["Sri Lanka", "USA", "Europe"];

  const handleCountryChange = (country: string) => {
    if (country !== "Sri Lanka") {
      setSelectedCountry("Sri Lanka");
      toast({
        title: "Notice",
        description: "Except Sri Lanka, we are currently setting up our office bases.",
        duration: 5000,
      });
    } else {
      setSelectedCountry(country);
    }
    setIsCountryOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-accenture-dark/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-accenture-purple text-4xl font-bold">{'>'}</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-accenture-purple transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsThinkOpen(false);
                }}
                className="flex items-center text-white hover:text-accenture-purple transition-colors"
              >
                What we do <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button
                onClick={() => {
                  setIsThinkOpen(!isThinkOpen);
                  setIsOpen(false);
                }}
                className="flex items-center text-white hover:text-accenture-purple transition-colors"
              >
                What we think <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <Link to="/who-we-are" className="text-white hover:text-accenture-purple transition-colors">
              Who we are
            </Link>
            <Link to="/careers" className="text-white hover:text-accenture-purple transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-white hover:text-accenture-purple transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button 
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="text-white hover:text-accenture-purple transition-colors flex items-center space-x-2"
              >
                <Globe className="w-5 h-5" />
                <span>{selectedCountry}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isCountryOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  {countries.map((country) => (
                    <button
                      key={country}
                      onClick={() => handleCountryChange(country)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {country}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
                        <Link 
                          to={item === "Cloud" ? "/what-we-think" : "#"} 
                          className="hover:text-accenture-purple transition-colors"
                        >
                          {item}
                        </Link>
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

        {isThinkOpen && (
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
                  <ul className="space-y-6">
                    {thinkingTopics.map((item) => (
                      <li key={item}>
                        <Link 
                          to="#" 
                          className="text-xl hover:text-accenture-purple transition-colors"
                        >
                          {item}
                        </Link>
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