import { motion } from "framer-motion";

const Value = () => {
  return (
    <div className="bg-accenture-dark py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
            360° VALUE
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            Focusing our vast technology and industry expertise on the most impactful opportunities for our clients, our people and our communities.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Value;