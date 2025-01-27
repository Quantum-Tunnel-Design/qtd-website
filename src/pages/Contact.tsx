import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-brand-darkPurple">
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-6xl font-bold text-brand-white mb-8">
            Get in Touch<span className="text-brand-royalBlue">{'>'}</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-brand-russianViolet text-brand-white border-brand-royalBlue"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-brand-russianViolet text-brand-white border-brand-royalBlue"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-brand-russianViolet text-brand-white border-brand-royalBlue"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="bg-brand-russianViolet text-brand-white border-brand-royalBlue h-32"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-brand-royalBlue hover:bg-brand-royalBlue/90 text-brand-white"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-brand-russianViolet p-6">
                <h3 className="text-xl font-bold text-brand-white mb-4">Sri Lanka HQ</h3>
                <div className="space-y-4 text-brand-powderBlue">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 mt-1" />
                    <p>Level 35, East Tower<br />World Trade Center<br />Colombo 01<br />Sri Lanka</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <p>+94 11 123 4567</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <p>srilanka@similarsight.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-russianViolet p-6">
                <h3 className="text-xl font-bold text-brand-white mb-4">London Office</h3>
                <div className="space-y-4 text-brand-powderBlue">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 mt-1" />
                    <p>30 St Mary Axe<br />London EC3A 8BF<br />United Kingdom</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <p>+44 20 7123 4567</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <p>london@similarsight.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;