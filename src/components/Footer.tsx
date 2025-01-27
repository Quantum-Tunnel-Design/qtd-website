import { Link } from "react-router-dom";
import { Linkedin, Facebook, Twitter, Youtube, Rss } from "lucide-react";
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

        {/* Links and Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Primary Links */}
          <div className="space-y-4">
            <Link to="/contact" className="block text-gray-300 hover:text-white">Contact us</Link>
            <Link to="/faq" className="block text-gray-300 hover:text-white">FAQ</Link>
            <Link to="/privacy" className="block text-gray-300 hover:text-white">Privacy policy</Link>
          </div>

          {/* Secondary Links */}
          <div className="space-y-4">
            <Link to="/cookie-preferences" className="block text-gray-300 hover:text-white">Cookie preferences</Link>
            <Link to="/terms" className="block text-gray-300 hover:text-white">Terms of use</Link>
            <Link to="/accessibility" className="block text-gray-300 hover:text-white">Accessibility statement</Link>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 items-start">
            <a href="#" className="text-gray-300 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Rss className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm">
          © 2024 Similar Sight. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;