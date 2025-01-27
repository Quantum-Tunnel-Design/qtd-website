import Navigation from "@/components/Navigation";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { id } = useParams();

  // This would typically come from an API, but for now we'll hardcode it
  const post = {
    title: "Scientific AI: Unlocking the next frontier of R&D productivity",
    date: "January 15, 2025",
    authors: [
      { name: "Alex Devereson", link: "#" },
      { name: "Chris Anagnostopoulos", link: "#" },
      { name: "David Champagne", link: "#" }
    ],
    contributors: [
      "Alex Peluffo",
      "Benji Lin",
      "Jennifer Hou",
      "Maren Eckhoff"
    ],
    content: "It has been two years since the emergence of generative AI (gen AI) reset the expectations of what's possible in business, and organizations are beginning to recognize its real value, using gen AI to boost the productivity of software engineers, for example, or increase the efficiency of marketing campaigns and customer-service operations.",
    image: "/lovable-uploads/53152bc1-c383-44d9-812f-842b7a72cb2d.png"
  };

  return (
    <div className="min-h-screen bg-accenture-dark">
      <Navigation />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pt-32 pb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-accenture-purple">{post.date} - by</span>
            {post.authors.map((author, index) => (
              <span key={author.name}>
                <a href={author.link} className="text-accenture-purple hover:text-white transition-colors">
                  {author.name}
                </a>
                {index < post.authors.length - 1 && ", "}
              </span>
            ))}
          </div>

          <div className="text-gray-400 mb-8">
            with {post.contributors.join(", ")}
          </div>

          <img 
            src={post.image} 
            alt={post.title}
            className="w-full mb-8"
          />

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed">
              {post.content}
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="https://linkedin.com/share" target="_blank" rel="noopener noreferrer" className="p-2 bg-accenture-darker hover:bg-accenture-purple transition-colors">
              <span className="sr-only">Share on LinkedIn</span>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://twitter.com/share" target="_blank" rel="noopener noreferrer" className="p-2 bg-accenture-darker hover:bg-accenture-purple transition-colors">
              <span className="sr-only">Share on Twitter</span>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://facebook.com/share" target="_blank" rel="noopener noreferrer" className="p-2 bg-accenture-darker hover:bg-accenture-purple transition-colors">
              <span className="sr-only">Share on Facebook</span>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPost;