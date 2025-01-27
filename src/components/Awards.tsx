import { motion } from "framer-motion";

const Awards = () => {
  return (
    <div className="bg-accenture-dark py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-12"
        >
          Global recognition and awards
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-${index === 1 ? 'red' : index === 2 ? 'purple' : 'blue'}-500 aspect-video rounded-lg`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;