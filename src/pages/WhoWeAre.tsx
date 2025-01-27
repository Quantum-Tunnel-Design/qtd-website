import Navigation from "@/components/Navigation";
import { ArrowRight, Linkedin, Twitter, Facebook } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-accenture-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-12">Our Leadership</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Meet the visionaries behind our success. Our leadership team brings together decades of experience
            and a shared commitment to innovation and excellence.
          </p>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="px-4 md:px-8 py-16 bg-accenture-darker">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CEO Profile */}
          <Card className="bg-transparent border-accenture-purple">
            <CardHeader className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" alt="CEO" />
                  <AvatarFallback>CEO</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl text-white">John Smith</CardTitle>
                  <CardDescription className="text-accenture-purple">Co-Founder & CEO</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                With over 15 years of experience in technology and innovation,
                John leads our company's strategic vision and growth initiatives.
                His expertise in digital transformation has been instrumental in
                shaping our success.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://linkedin.com/in/john-smith" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accenture-purple hover:text-accenture-light transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Legal Director Profile */}
          <Card className="bg-transparent border-accenture-purple">
            <CardHeader className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" alt="Legal Director" />
                  <AvatarFallback>LD</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl text-white">Sarah Johnson</CardTitle>
                  <CardDescription className="text-accenture-purple">Co-Founder & Director Legal</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Sarah brings extensive legal expertise with a focus on technology law
                and compliance. Her leadership ensures our operations maintain the
                highest standards of legal and ethical compliance while supporting
                our innovative approach.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://linkedin.com/in/sarah-johnson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accenture-purple hover:text-accenture-light transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 md:px-8 py-16 bg-accenture-darker">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shareholders Council */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center group">
              Shareholders Council
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </h2>
            <p className="text-gray-300">
              The Shareholders Council functions as our firm's global board of directors,
              setting the strategic direction and policies of the firm. It includes the managing
              partner, plus 30 senior partners who are elected by their peers to serve three-year terms.
            </p>
            <button className="text-accenture-purple hover:text-accenture-light transition-colors flex items-center">
              See members <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Enablement Team */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center group">
              Enablement Team
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </h2>
            <p className="text-gray-300">
              Our Enablement Team is a global leadership body that accelerates the delivery
              of our client service and people mission. The team connects leaders of regions
              and key capabilities, such as People & Diversity, Risk & Resilience, and Finance,
              to support our firm's performance and health.
            </p>
            <button className="text-accenture-purple hover:text-accenture-light transition-colors flex items-center">
              See members <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Office Leadership */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center group">
              Office Leadership
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </h2>
            <p className="text-gray-300">
              Our offices in more than 65 countries are led by a group of senior partners
              across six regions: Asia (ex-China), Greater China, Eastern Europe, Middle East
              & Africa, Europe, Latin America, and North America. Working closely with
              location managers in more than 130 cities, these leaders ensure the
              best of our global firm reaches our local clients and communities.
            </p>
            <button className="text-accenture-purple hover:text-accenture-light transition-colors flex items-center">
              See members <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Practice Leadership */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center group">
              Practice Leadership
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </h2>
            <p className="text-gray-300">
              Our practices serve clients across most capabilities and industries. The global
              leaders of each are responsible for delivering client impact, developing
              knowledge and capabilities, innovating, and developing our people. They work
              closely with regional leaders and many others to deliver positive, enduring
              change to our clients and stakeholders.
            </p>
            <button className="text-accenture-purple hover:text-accenture-light transition-colors flex items-center">
              See members <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
      {/* Purpose and Mission Section */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold">Our purpose</h2>
            <p className="text-2xl text-gray-300">To help create positive, enduring change in the world.</p>
          </div>

          <div className="space-y-8">
            <h2 className="text-5xl font-bold">Our mission</h2>
            <p className="text-2xl text-gray-300">
              To help our clients make distinctive, lasting, and substantial improvements in their
              performance and to build a great firm that attracts, develops, excites, and retains
              exceptional people.
            </p>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="px-4 md:px-8 py-16 bg-accenture-darker">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-5xl font-bold">Our values</h2>
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Adhere to the highest professional standards</h3>
              <ul className="space-y-4 text-gray-300">
                <li>• put client interests ahead of our firm's</li>
                <li>• maintain high standards and conditions for client service</li>
                <li>• observe high ethical standards</li>
                <li>• preserve client confidences</li>
                <li>• maintain an independent perspective</li>
                <li>• manage client and firm resources cost-effectively</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Improve our clients' performance significantly</h3>
              <ul className="space-y-4 text-gray-300">
                <li>• follow the top-management approach</li>
                <li>• pursue holistic impact</li>
                <li>• use our global network to deliver the best of our firm to all clients</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Social Links */}
      <section className="px-4 md:px-8 py-8">
        <div className="max-w-7xl mx-auto flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-accenture-purple transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="#" className="text-white hover:text-accenture-purple transition-colors">
            <Twitter className="w-8 h-8" />
          </a>
          <a href="#" className="text-white hover:text-accenture-purple transition-colors">
            <Facebook className="w-8 h-8" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
