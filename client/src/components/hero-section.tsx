import { motion } from "framer-motion";
import { Github, Linkedin, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Equalizer from "@/components/ui/equalizer";

export default function HeroSection() {
  const particles = [
    { top: "20%", left: "20%", delay: 0 },
    { top: "40%", right: "32%", delay: 0.5 },
    { bottom: "32%", left: "25%", delay: 1 },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 spotify-gradient opacity-20"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className={`absolute w-2 h-2 rounded-full ${
              index === 0 ? 'bg-[hsl(141,79%,40%)]' : 
              index === 1 ? 'bg-[hsl(45,93%,54%)]' : 
              'bg-[hsl(250,68%,65%)]'
            }`}
            style={{
              top: particle.top,
              left: particle.left,
              right: particle.right,
              bottom: particle.bottom,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>
      
      <div className="text-center z-10 px-4 max-w-6xl mx-auto">
        <motion.h1 
          className="text-6xl md:text-8xl font-black mb-4 gradient-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="hero-title"
        >
          Ashrit Wrapped
        </motion.h1>
        
        <motion.p 
          className="text-2xl md:text-3xl font-bold text-gray-300 mb-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="hero-subtitle"
        >
          A Career Worth Streaming
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xl text-[hsl(141,79%,40%)] mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          data-testid="hero-tagline"
        >
          Engineering Ideas into Experiences – AI × Full Stack × Creative
        </motion.p>
        
        <motion.div 
          className="mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4" data-testid="hero-name">
            Venkata Sai Ashrit Kommireddy
          </h2>
          <p className="text-gray-400 text-lg flex items-center justify-center gap-2" data-testid="hero-location">
            <MapPin className="w-5 h-5 text-[hsl(141,79%,40%)]" />
            New York, USA – 11790
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button 
            className="bg-[hsl(141,79%,40%)] hover:bg-green-600 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            data-testid="button-resume"
          >
            <Download className="w-4 h-4 mr-2" />
            View Resume
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-[hsl(141,79%,40%)] text-[hsl(141,79%,40%)] hover:bg-[hsl(141,79%,40%)] hover:text-black font-bold px-8 py-4 rounded-full transition-all duration-300"
            data-testid="button-github"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-[hsl(45,93%,54%)] text-[hsl(45,93%,54%)] hover:bg-[hsl(45,93%,54%)] hover:text-black font-bold px-8 py-4 rounded-full transition-all duration-300"
            data-testid="button-linkedin"
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </motion.div>
      </div>
      
      {/* Equalizer Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Equalizer />
      </div>
    </section>
  );
}
