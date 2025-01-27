import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
            <a href="/" className="text-accenture-purple text-4xl font-bold">></a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-white hover:text-accenture-purple transition-colors"
              >
                What we do <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isOpen && (
                <div className="absolute top-full left-0 w-screen bg-accenture-darker text-white py-12 shadow-xl animate-fade-up">
                  <div className="container mx-auto px-4">
                    <div className="grid grid-cols-3 gap-8">
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
                </div>
              )}
            </div>
            <a href="#" className="text-white hover:text-accenture-purple transition-colors">
              What we think
            </a>
            <a href="#" className="text-white hover:text-accenture-purple transition-colors">
              Who we are
            </a>
            <a href="#" className="text-white hover:text-accenture-purple transition-colors">
              Careers
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-accenture-purple transition-colors">
              <span className="sr-only">Search</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-white hover:text-accenture-purple transition-colors flex items-center">
              <span>USA</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;