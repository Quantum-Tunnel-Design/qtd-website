import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Mail, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "We'll get back to you soon!",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-accenture-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-accenture-darker">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Let's Build Something Great Together
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Transform your business with our innovative solutions and expert consultation
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Offices Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-300">Fill out the form and we'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input 
                  type="text" 
                  placeholder="Full Name" 
                  required 
                  className="bg-accenture-darker border-accenture-purple/20 rounded-none"
                />
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="bg-accenture-darker border-accenture-purple/20 rounded-none"
                />
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="bg-accenture-darker border-accenture-purple/20 rounded-none"
                />
                <Textarea 
                  placeholder="Your Message" 
                  required 
                  className="bg-accenture-darker border-accenture-purple/20 rounded-none min-h-[150px]"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-accenture-purple hover:bg-accenture-purple/90 text-white rounded-none"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Office Locations */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Offices</h2>
              <p className="text-gray-300">Visit us at our global locations.</p>
            </div>

            <div className="space-y-8">
              {/* Sri Lanka HQ */}
              <div className="p-6 bg-accenture-darker border border-accenture-purple/20">
                <h3 className="text-xl font-bold mb-4">Sri Lanka HQ</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Building2 className="w-5 h-5 mt-1 text-accenture-purple" />
                    <p className="text-gray-300">
                      Level 35, East Tower<br />
                      World Trade Center<br />
                      Colombo 01<br />
                      Sri Lanka
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-accenture-purple" />
                    <p className="text-gray-300">+94 11 123 4567</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-accenture-purple" />
                    <p className="text-gray-300">contact.lk@company.com</p>
                  </div>
                </div>
              </div>

              {/* London Office */}
              <div className="p-6 bg-accenture-darker border border-accenture-purple/20">
                <h3 className="text-xl font-bold mb-4">London Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Building2 className="w-5 h-5 mt-1 text-accenture-purple" />
                    <p className="text-gray-300">
                      20 Fenchurch Street<br />
                      London EC3M 3BY<br />
                      United Kingdom
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-accenture-purple" />
                    <p className="text-gray-300">+44 20 7123 4567</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-accenture-purple" />
                    <p className="text-gray-300">contact.uk@company.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;