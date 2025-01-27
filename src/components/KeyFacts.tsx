import { motion } from "framer-motion";

const KeyFacts = () => {
  const facts = [
    { number: "1.3B", label: "Annual Revenue (USD)" },
    { number: "32K", label: "Global Employees" },
    { number: "54", label: "Offices Worldwide" },
    { number: "34", label: "Years of Excellence" },
  ];

  return (
    <section className="bg-accenture-dark text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-left"
        >
          Key Facts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-accenture-darker p-8 rounded-lg hover:bg-opacity-80 transition-all"
            >
              <div className="text-5xl font-bold mb-4 text-accenture-purple">{fact.number}</div>
              <div className="text-lg text-gray-300">{fact.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFacts;