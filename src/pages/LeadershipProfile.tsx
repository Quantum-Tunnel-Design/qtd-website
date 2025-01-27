import Navigation from "@/components/Navigation";
import { ArrowLeft, Linkedin } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const LeadershipProfile = () => {
  const { id } = useParams();
  
  // This would typically come from an API or database
  const leaderData = {
    "john-smith": {
      name: "John Smith",
      title: "Co-Founder & CEO",
      image: "/placeholder.svg",
      bio: "With over 15 years of experience in technology and innovation, John leads our company's strategic vision and growth initiatives. His expertise in digital transformation has been instrumental in shaping our success.",
      linkedin: "https://linkedin.com/in/john-smith"
    },
    "sarah-johnson": {
      name: "Sarah Johnson",
      title: "Co-Founder & Director Legal",
      image: "/placeholder.svg",
      bio: "Sarah brings extensive legal expertise with a focus on technology law and compliance. Her leadership ensures our operations maintain the highest standards of legal and ethical compliance while supporting our innovative approach.",
      linkedin: "https://linkedin.com/in/sarah-johnson"
    }
  };

  const leader = leaderData[id as keyof typeof leaderData];

  if (!leader) {
    return <div>Leader not found</div>;
  }

  return (
    <div className="min-h-screen bg-accenture-dark text-white">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/who-we-are" 
            className="inline-flex items-center text-accenture-purple hover:text-accenture-light mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Leadership
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold">{leader.name}</h1>
              <p className="text-2xl text-accenture-purple">{leader.title}</p>
              
              <a 
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accenture-purple hover:text-accenture-light"
              >
                <span className="mr-2">Linkedin Profile</span>
                <Linkedin className="h-5 w-5" />
              </a>

              <p className="text-xl text-gray-300 leading-relaxed mt-8">
                {leader.bio}
              </p>
            </div>

            <div className="aspect-w-4 aspect-h-3">
              <img 
                src={leader.image} 
                alt={leader.name}
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipProfile;