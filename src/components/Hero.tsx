import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-accenture-dark pt-20">
      <div className="container mx-auto px-4">
        <div className="py-20">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            TOGETHER WE
            <br />
            REIN
            <span className="text-accenture-purple">></span>
            ENTED
          </h1>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gradient-to-br from-accenture-purple/20 to-accenture-purple/40 rounded-lg overflow-hidden"
            >
              <div className="w-full h-full bg-accenture-darker/50 hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;