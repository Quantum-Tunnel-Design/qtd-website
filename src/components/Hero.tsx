import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-accenture-dark pt-20">
      <div className="container mx-auto px-4">
        <div className="py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              TOGETHER WE
              <br />
              REIN<span className="text-accenture-purple">{'>'}</span>ENTED
            </h1>
            
            <p className="text-white text-xl md:text-2xl mb-8 max-w-3xl">
              The supply chains we need, the special effects that wow, the stadiums we fill, 
              the food we eat, the clothes we wear, the cars we drive, the homes where we live, 
              the holidays we take, the trees we grow—together, we can reinvent anything.
            </p>

            <button className="group flex items-center space-x-2 bg-accenture-purple text-white px-6 py-3 rounded-lg hover:bg-accenture-purple/90 transition-colors">
              <span>See what we do</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              className="col-span-1"
            >
              <div className="aspect-square bg-white p-6 rounded-lg">
                <span className="text-sm text-gray-600 uppercase">Research Report</span>
                <h3 className="text-xl font-bold mt-2">{index === 0 ? "Technology Vision 2025" : index === 1 ? "Accenture Life Trends 2025" : index === 2 ? "Pulse of Change: January 2025" : "World Economic Forum (WEF) at Davos 2025"}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
