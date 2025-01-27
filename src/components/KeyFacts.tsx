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
        <h2 className="text-4xl font-bold mb-16 text-left">Key Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="bg-accenture-darker p-8 rounded-lg hover:bg-opacity-80 transition-all">
              <div className="text-5xl font-bold mb-4 text-accenture-purple">{fact.number}</div>
              <div className="text-lg text-gray-300">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFacts;