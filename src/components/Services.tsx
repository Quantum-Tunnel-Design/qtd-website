const Services = () => {
  const services = [
    {
      title: "Digital & Software",
      description: "Superior and differentiated customer experiences to enhance competitive advantage."
    },
    {
      title: "Cloud",
      description: "Flexible cloud solutions to accelerate your journey to the future."
    },
    {
      title: "Data & AI",
      description: "AI-enabled, data-driven decisions to open the door to new possibilities."
    },
    {
      title: "Digital IT Operations",
      description: "Enterprise-wide IT transformation to ensure business success."
    },
    {
      title: "Enterprise Platform Services",
      description: "Amplify your business outcomes and drive innovation with Hexaware's enterprise platform services"
    }
  ];

  return (
    <section className="bg-accenture-dark text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">
          Empower Your Business
        </h2>
        <p className="text-xl mb-12 text-gray-300">Access world-class products, services, and solutions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-accenture-darker p-6 rounded-lg h-full flex flex-col justify-between group hover:bg-opacity-80 transition-all border border-accenture-purple/20"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accenture-purple">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-accenture-purple/10 p-2 rounded-lg w-full hover:bg-accenture-purple/20 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;