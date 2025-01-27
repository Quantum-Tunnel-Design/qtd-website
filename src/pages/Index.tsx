import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import KeyFacts from "@/components/KeyFacts";
import Challenges from "@/components/Challenges";
import Services from "@/components/Services";
import Value from "@/components/Value";
import Awards from "@/components/Awards";

const Index = () => {
  return (
    <div className="min-h-screen bg-accenture-dark">
      <Navigation />
      <Hero />
      <KeyFacts />
      <Challenges />
      <Services />
      <Value />
      <Awards />
    </div>
  );
};

export default Index;