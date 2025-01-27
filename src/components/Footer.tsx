import { Link } from "react-router-dom";
import { Linkedin, Facebook, Twitter, Youtube, Rss, Globe, Mail, Phone, Users } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
  };

  return (
    <footer className="bg-accenture-darker text-white py-12 border-t border-accenture-purple/20">
      <div className="container mx-auto px-4">
        {/* Subscribe Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-6">Select topics and stay current with our latest insights</p>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-accenture-purple/20 text-white w-full max-w-md"
              />
              <Button 
                type="submit"
                className="bg-accenture-purple hover:bg-accenture-purple/90"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 border-b border-accenture-purple/20 pb-12">
          {/* What We Do Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">What We Do</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-gray-300 hover:text-white">Cloud Solutions</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Cybersecurity</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Data & AI</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Digital Engineering</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Emerging Technology</Link></li>
            </ul>
          </div>

          {/* What We Think Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">What We Think</h4>
            <ul className="space-y-4">
              <li><Link to="/what-we-think" className="text-gray-300 hover:text-white">Industry Insights</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Digital Transformation</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Future of Work</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Innovation Hub</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Research Reports</Link></li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">About Us</h4>
            <ul className="space-y-4">
              <li><Link to="/who-we-are" className="text-gray-300 hover:text-white">Who We Are</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Leadership</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Global Presence</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Partners</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-accenture-purple" />
                <span className="text-gray-300">Global Headquarters</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-accenture-purple" />
                <a href="mailto:contact@similarsight.com" className="text-gray-300 hover:text-white">
                  contact@similarsight.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accenture-purple" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accenture-purple" />
                <span className="text-gray-300">24/7 Support Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2024 Similar Sight. All rights reserved.
          </div>

          {/* Social Media */}
          <div className="flex gap-6 items-center md:justify-end">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Rss className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;