import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Futurism = () => {
  const blogs = [
    {
      id: 1,
      title: "Scientific AI: Unlocking the next frontier of R&D productivity",
      image: "/lovable-uploads/53152bc1-c383-44d9-812f-842b7a72cb2d.png",
      description: "New approaches to artificial intelligence can accelerate laboratory research to drive a new era of scientific discovery and development.",
      category: "AI & Technology"
    },
    {
      id: 2,
      title: "The future of cloud computing",
      image: "/placeholder.svg",
      description: "Discover the latest trends in cloud technology and what they mean for businesses.",
      category: "Cloud Computing"
    },
    {
      id: 3,
      title: "Quantum computing breakthroughs",
      image: "/placeholder.svg",
      description: "Learn about recent advances in quantum computing and their potential impact.",
      category: "Quantum Computing"
    }
  ];

  return (
    <div className="min-h-screen bg-accenture-dark">
      <Navigation />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pt-32 pb-16"
      >
        <h1 className="text-5xl font-bold text-white mb-6">Insights on Artificial Intelligence</h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          Explore the latest trends, innovations, and breakthroughs in AI and emerging technologies. Stay ahead of the curve with our expert analysis and insights.
        </p>
      </motion.div>

      {/* Blog Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-accenture-darker p-6"
            >
              <Link to={`/blog/${blog.id}`}>
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover mb-4"
                />
                <span className="text-sm text-accenture-purple mb-2 inline-block">
                  {blog.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-300">
                  {blog.description}
                </p>
                <button className="mt-4 text-accenture-purple hover:text-white transition-colors">
                  Read more →
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Futurism;