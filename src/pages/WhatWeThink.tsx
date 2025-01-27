import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Globe, Users, Lightbulb, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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

  const stats = [
    {
      number: "2x",
      description: "faster delivery of digital solutions with our agile methodology",
      subtext: "for companies implementing our digital transformation framework"
    },
    {
      number: "4.1x",
      description: "more likely to succeed",
      subtext: "when organizations adopt our comprehensive change management approach"
    }
  ];

  const caseStudies = [
    {
      title: "Digital Transformation Success",
      description: "A global financial services provider transformed their legacy systems through our comprehensive digital strategy. Within 18 months, they achieved 40% improvement in operational efficiency and enhanced customer satisfaction scores by 60%."
    },
    {
      title: "Innovation at Scale",
      description: "Working with a leading healthcare provider, we implemented AI-driven solutions that revolutionized patient care delivery. The result was a 30% reduction in wait times and a 45% improvement in resource allocation."
    }
  ];

  return (
    <div className="min-h-screen bg-accenture-darker text-white">
      <Navigation />
      
      {/* Hero Section with Animated Gradient Mesh */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
        {/* Animated Gradient Mesh Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accenture-darker via-accenture-dark to-accenture-darker opacity-90" />
          <div 
            className="absolute inset-0 animate-wave opacity-40"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(155,135,245,0.4) 0%, transparent 70%),
                radial-gradient(circle at 70% 70%, rgba(214,188,250,0.4) 0%, transparent 70%)
              `,
              filter: 'blur(60px)',
            }}
          />
          <div 
            className="absolute inset-0 animate-wave opacity-30"
            style={{
              animationDelay: '-10s',
              background: `
                radial-gradient(circle at 70% 30%, rgba(155,135,245,0.3) 0%, transparent 60%),
                radial-gradient(circle at 30% 70%, rgba(214,188,250,0.3) 0%, transparent 60%)
              `,
              filter: 'blur(50px)',
            }}
          />
          <div 
            className="absolute inset-0 animate-wave opacity-20"
            style={{
              animationDelay: '-5s',
              background: `
                radial-gradient(circle at 50% 50%, rgba(155,135,245,0.2) 0%, transparent 80%)
              `,
              filter: 'blur(40px)',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Creating value beyond the hype</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
            We're a global team of business & digital technology leaders helping clients unlock value through innovation.
          </p>
          <Button className="bg-accenture-purple hover:bg-accenture-purple/90 rounded-none">Learn More</Button>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="py-16 px-4 md:px-8 bg-accenture-dark border-y border-accenture-purple/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Industries Through Innovation</h2>
              <p className="text-lg text-gray-300 mb-8">
                At Accenture, we combine deep industry expertise with advanced technology 
                to drive meaningful change. Our approach integrates strategy, technology, 
                and operations to deliver exceptional results for our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-2xl font-bold text-accenture-purple mb-2">500+</p>
                  <p className="text-sm text-gray-300">Global clients served</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accenture-purple mb-2">95%</p>
                  <p className="text-sm text-gray-300">Client satisfaction rate</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-accenture-purple pl-6">
                <h3 className="text-xl font-semibold mb-3">Strategic Consulting</h3>
                <p className="text-gray-300">
                  Helping organizations navigate digital transformation with confidence through 
                  our proven methodologies and industry expertise.
                </p>
              </div>
              <div className="border-l-2 border-accenture-purple pl-6">
                <h3 className="text-xl font-semibold mb-3">Technology Innovation</h3>
                <p className="text-gray-300">
                  Leveraging cutting-edge technologies to build scalable solutions that 
                  drive business growth and operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 px-4 md:px-8 bg-accenture-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Approach</h2>
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

      {/* Impact Stats Section */}
      <section className="py-16 px-4 md:px-8 bg-accenture-darker border-y border-accenture-purple/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <h3 className="text-5xl md:text-7xl font-bold text-accenture-purple mb-4">{stat.number}</h3>
                <p className="text-xl md:text-2xl mb-2">{stat.description}</p>
                <p className="text-gray-400">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 md:px-8 bg-accenture-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Examples of Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="border-l-2 border-accenture-purple pl-6">
                <h3 className="text-2xl font-semibold mb-4">{study.title}</h3>
                <p className="text-gray-300 mb-6">{study.description}</p>
                <Button variant="link" className="text-accenture-purple p-0 hover:text-accenture-purple/90">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
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

      <Footer />
    </div>
  );
};

export default WhatWeThink;
