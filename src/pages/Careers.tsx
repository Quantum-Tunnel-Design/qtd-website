import React from "react";
import { Book, TrendingUp, Scale, Calendar, Award } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Careers = () => {
  const testimonials = [
    {
      name: "Latanya Little",
      role: "QA Lead",
      quote: "Every day brings a brand-new opportunity for me here at Accenture.",
      image: "/lovable-uploads/fe90b08d-c964-488d-a969-d474d2c6ab4c.png",
    },
    {
      name: "Angel De Avila",
      role: "DA Competency Manager",
      quote: "I have met wonderful people that make Accenture a great workplace.",
      image: "/lovable-uploads/fe90b08d-c964-488d-a969-d474d2c6ab4c.png",
    },
    {
      name: "Paulina Ramo Garcia",
      role: "Sr. Recruiter, Accenture Mexico",
      quote: "In Accenture, I've enjoyed sharing and learning everyday from leaders and teammates across the world.",
      image: "/lovable-uploads/fe90b08d-c964-488d-a969-d474d2c6ab4c.png",
    },
  ];

  const benefits = [
    {
      icon: <Book className="w-12 h-12 text-accenture-purple" />,
      title: "Learning & Development",
      description:
        "We offer a wide array of programs to help you expand your skills and supercharge your career.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accenture-purple" />,
      title: "Career Track",
      description:
        "Discover your passion—the driving force that makes you smile and innovate, create, and make a difference every day",
    },
    {
      icon: <Scale className="w-12 h-12 text-accenture-purple" />,
      title: "Work Life Balance",
      description:
        "Accenture is all about open doors, open minds, and open opportunities. We ensure a flexible work environment that respects your work-life balance and your growth.",
    },
  ];

  const openPositions = [
    {
      title: "Senior Software Engineer",
      location: "Remote",
      department: "Engineering",
      description: "We are looking for a Senior Software Engineer to join our growing team...",
      requirements: [
        "5+ years of experience in software development",
        "Strong knowledge of React and TypeScript",
        "Experience with cloud technologies",
      ],
    },
    {
      title: "Product Manager",
      location: "New York, NY",
      department: "Product",
      description: "Join our product team to help shape the future of our platform...",
      requirements: [
        "3+ years of product management experience",
        "Strong analytical and communication skills",
        "Experience with agile methodologies",
      ],
    },
    {
      title: "UX Designer",
      location: "San Francisco, CA",
      department: "Design",
      description: "Help us create beautiful and intuitive user experiences...",
      requirements: [
        "4+ years of UX design experience",
        "Strong portfolio demonstrating user-centered design",
        "Experience with design systems",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-accenture-dark text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-2xl">
            Be part of a team that's driving innovation and making a difference in
            the world.
          </p>
        </div>
      </div>

      {/* Employee Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-accenture-dark">
            Employee Testimonials
          </h2>
          <p className="text-xl mb-12 text-gray-600">
            Discover the Accenture journey through the eyes of our exceptional
            team, sharing brief yet impactful tales of growth, innovation, and
            success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 mb-6 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-lg mb-4 text-gray-700">"{testimonial.quote}"</p>
                  <h3 className="font-bold text-xl mb-1">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workplace Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-accenture-dark">
            The Accenture Advantage: Your Workplace Benefits
          </h2>
          <p className="text-xl mb-12 text-gray-600">
            We are interested in, and want to support, the professional and
            personal you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-accenture-dark">
            Open Positions
          </h2>
          <p className="text-xl mb-12 text-gray-600">
            Join our team and help shape the future of technology.
          </p>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {openPositions.map((position, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex flex-col items-start text-left">
                    <h3 className="text-xl font-semibold">{position.title}</h3>
                    <p className="text-sm text-gray-600">
                      {position.location} • {position.department}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="prose max-w-none">
                    <p className="mb-4">{position.description}</p>
                    <h4 className="text-lg font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                    <button className="mt-6 bg-accenture-purple text-white px-6 py-2 rounded hover:bg-accenture-purple/90 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Careers;