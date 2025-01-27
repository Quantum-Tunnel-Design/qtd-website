import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Globe, Lightbulb, Users } from "lucide-react";

const WhatWeThink = () => {
  return (
    <div className="min-h-screen bg-accenture-darker text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Creating value beyond the hype</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
            We're a global team of business & digital technology leaders helping clients unlock value through innovation.
          </p>
          <Button className="bg-accenture-purple hover:bg-accenture-purple/90">Learn More</Button>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-16 px-4 md:px-8 bg-accenture-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Unlock the power of AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-accenture-darker border-accenture-purple/20">
                <div className="p-6">
                  <Brain className="w-8 h-8 text-accenture-purple mb-4" />
                  <h3 className="text-xl font-semibold mb-3">AI Innovation {item}</h3>
                  <p className="text-gray-300">Transforming businesses through intelligent automation and data-driven insights.</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Modernize technology end-to-end</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-accenture-dark border-accenture-purple/20">
                <div className="p-6">
                  <Globe className="w-8 h-8 text-accenture-purple mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Tech Solution {item}</h3>
                  <p className="text-gray-300">Building scalable and resilient technology solutions for the future.</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4 md:px-8 bg-accenture-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">A community of technologists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-accenture-darker border-accenture-purple/20">
                <div className="p-6">
                  <Users className="w-8 h-8 text-accenture-purple mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Expert {item}</h3>
                  <p className="text-gray-300">Join our global community of technology experts and innovators.</p>
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
          <Button className="bg-accenture-purple hover:bg-accenture-purple/90">Contact Us</Button>
        </div>
      </section>
    </div>
  );
};

export default WhatWeThink;