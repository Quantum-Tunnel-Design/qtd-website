import { motion } from "framer-motion";

const Challenges = () => {
  return (
    <section className="bg-accenture-darker py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Your Challenges = Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              At Hexaware, solving your IT and business process challenges is our mission. 
              Transforming complex data into insights with the power of AI? We're on it. 
              Enhancing customer experiences with innovative platforms? That's our forte.
            </p>
            <p className="text-lg text-gray-300">
              Migrating to the cloud? Smooth and secure. Managing a contact center? Done. 
              Across industries, our collaborative approach drives exceptional outcomes every 
              step of the way. Your challenges, our solutions, proven success.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accenture-purple/20 rounded-lg"></div>
            <img 
              src="/lovable-uploads/53567c0f-058f-4e95-acd9-60aec4e65b47.png" 
              alt="Ship on ocean representing challenges" 
              className="rounded-lg shadow-xl w-full relative z-10"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;