import Navigation from "@/components/Navigation";
import { ArrowRight, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-accenture-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-12">Leadership</h1>
        </div>
      </section>

      {/* Leadership Navigation */}
      <section className="px-4 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <nav className="flex space-x-8 border-b border-accenture-purple/20 pb-4">
            <button className="text-xl text-accenture-purple font-semibold">
              Board of Directors
            </button>
            <button className="text-xl text-gray-400 hover:text-accenture-purple transition-colors">
              Management Team
            </button>
          </nav>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="px-4 md:px-8 py-16 bg-accenture-darker">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* CEO Profile */}
          <Link to="/leadership/john-smith" className="group">
            <Card className="bg-transparent border-accenture-purple/20 hover:border-accenture-purple transition-colors">
              <CardHeader className="space-y-4">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="John Smith"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">John Smith</CardTitle>
                  <CardDescription className="text-accenture-purple">
                    Co-Founder & CEO
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>

          {/* Legal Director Profile */}
          <Link to="/leadership/sarah-johnson" className="group">
            <Card className="bg-transparent border-accenture-purple/20 hover:border-accenture-purple transition-colors">
              <CardHeader className="space-y-4">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Sarah Johnson"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">Sarah Johnson</CardTitle>
                  <CardDescription className="text-accenture-purple">
                    Co-Founder & Director Legal
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
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
