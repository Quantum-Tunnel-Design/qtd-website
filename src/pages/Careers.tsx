import React from "react";
import { motion } from "framer-motion";
import { Book, TrendingUp, Scale, Heart, Users, Globe } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from "@/components/Footer";

const Careers = () => {
  const testimonials = [
    {
      name: "Latanya Little",
      role: "QA Lead",
      quote: "Every day brings a brand-new opportunity for me here at Accenture.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    },
    {
      name: "Angel De Avila",
      role: "DA Competency Manager",
      quote: "I have met wonderful people that make Accenture a great workplace.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      name: "Paulina Ramo Garcia",
      role: "Sr. Recruiter, Accenture Mexico",
      quote: "In Accenture, I've enjoyed sharing and learning everyday from leaders and teammates across the world.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    },
    {
      name: "John Smith",
      role: "Senior Developer",
      quote: "The innovation and technology at Accenture keeps me excited about coming to work every day.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
  ];

  const benefits = [
    {
      icon: <Heart className="w-12 h-12 text-accenture-purple" />,
      title: "Inclusive Culture",
      description: "Join a workplace that celebrates diversity and fosters belonging.",
    },
    {
      icon: <Book className="w-12 h-12 text-accenture-purple" />,
      title: "Learning & Development",
      description: "Expand your skills and supercharge your career with our learning programs.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accenture-purple" />,
      title: "Career Growth",
      description: "Clear paths for advancement and opportunities to lead innovative projects.",
    },
    {
      icon: <Scale className="w-12 h-12 text-accenture-purple" />,
      title: "Work Life Balance",
      description: "Flexible work arrangements that respect your personal time.",
    },
    {
      icon: <Users className="w-12 h-12 text-accenture-purple" />,
      title: "Collaborative Teams",
      description: "Work with talented professionals from diverse backgrounds.",
    },
    {
      icon: <Globe className="w-12 h-12 text-accenture-purple" />,
      title: "Global Impact",
      description: "Make a difference on projects that shape industries worldwide.",
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
      <Navigation />
      
      {/* Hero Section with Why Join Us */}
      <div className="relative min-h-[60vh] bg-accenture-dark pt-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-20"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              JOIN OUR
              <br />
              TEAM<span className="text-accenture-purple">{'>'}</span>
            </h1>
            
            <p className="text-white text-xl md:text-2xl mb-8 max-w-3xl">
              Be part of a team that's driving innovation and making a difference in
              the world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-accenture-dark"
          >
            The Accenture Advantage
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-12 text-gray-600"
          >
            Discover the benefits of building your career with us.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white shadow-lg"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-accenture-dark">
            Employee Testimonials
          </h2>
          <p className="text-xl mb-12 text-gray-600">
            Discover the Accenture journey through the eyes of our exceptional team.
          </p>
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/4">
                  <div className="bg-white p-8 rounded shadow-lg h-full">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
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
                className="bg-white shadow-lg"
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

      <Footer />
    </div>
  );
};

export default Careers;
