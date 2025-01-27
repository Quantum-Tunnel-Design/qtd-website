import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Globe, Users, Lightbulb } from "lucide-react";
import Navigation from "@/components/Navigation";

const WhatWeThink = () => {
  const offerings = [
    {
      icon: <Brain className="w-8 h-8 text-accenture-purple mb-4" />,
      title: "Digital Transformation",
      description: "Revolutionizing businesses through intelligent automation and data-driven insights. Our expertise spans across cloud computing, AI integration, and digital strategy development.",
      items: [
        "Cloud Migration & Integration",
        "AI Implementation",
        "Digital Strategy Consulting"
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-accenture-purple mb-4" />,
      title: "Industry Solutions",
      description: "Tailored solutions for specific industry challenges, leveraging our deep expertise across sectors. We combine industry knowledge with cutting-edge technology.",
      items: [
        "Financial Services",
        "Healthcare Innovation",
        "Retail Transformation"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-accenture-purple mb-4" />,
      title: "Innovation & Research",
      description: "Driving future-focused solutions through continuous research and innovation. Our dedicated teams explore emerging technologies and their practical applications.",
      items: [
        "Technology Research",
        "Innovation Labs",
        "Future Trends Analysis"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accenture-purple mb-4" />,
      title: "Sustainable Technology",
      description: "Creating environmentally conscious technology solutions that drive business value while promoting sustainability and responsible innovation.",
      items: [
        "Green Technology",
        "Sustainable Practices",
        "Environmental Impact"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-accenture-darker text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Creating value beyond the hype</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
            We're a global team of business & digital technology leaders helping clients unlock value through innovation.
          </p>
          <Button className="bg-accenture-purple hover:bg-accenture-purple/90 rounded-none">Learn More</Button>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-16 px-4 md:px-8 bg-accenture-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Service Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <Card key={index} className="bg-accenture-darker border-accenture-purple/20 rounded-none p-6">
                <div className="p-6">
                  {offering.icon}
                  <h3 className="text-xl font-semibold mb-3">{offering.title}</h3>
                  <p className="text-gray-300 mb-6">{offering.description}</p>
                  <ul className="space-y-2">
                    {offering.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-accenture-purple">
                        <span className="mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Connect with Accenture Digital</h2>
          <Button className="bg-accenture-purple hover:bg-accenture-purple/90 rounded-none">Contact Us</Button>
        </div>
      </section>
    </div>
  );
};

export default WhatWeThink;