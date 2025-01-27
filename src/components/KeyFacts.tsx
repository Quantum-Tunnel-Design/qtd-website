const KeyFacts = () => {
  const facts = [
    { number: "1.3B", label: "Annual Revenue (USD)" },
    { number: "32K", label: "Global Employees" },
    { number: "54", label: "Offices Worldwide" },
    { number: "34", label: "Years of Excellence" },
  ];

  return (
    <section className="bg-[#1E90FF] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl mb-16">Hexaware Key Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold mb-4">{fact.number}</div>
              <div className="text-lg">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFacts;