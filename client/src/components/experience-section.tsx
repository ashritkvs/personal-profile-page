import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const technologies = ["React Native", "Firebase", "JavaScript"];

  return (
    <section className="py-20 px-4 bg-[hsl(0,0%,6%)]" data-testid="experience-section">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4" data-testid="experience-title">
            <span className="text-[hsl(250,68%,65%)]">Your Career</span> Playlist
          </h2>
          <p className="text-gray-400">The hits that defined the journey</p>
        </motion.div>
        
        <motion.div 
          className="bg-gray-800 rounded-2xl p-8 border-2 border-[hsl(250,68%,65%)]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="experience-card"
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-[hsl(250,68%,65%)] rounded-full flex items-center justify-center flex-shrink-0">
              <Code className="text-white text-xl w-8 h-8" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-[hsl(250,68%,65%)]" data-testid="experience-title-text">
                  Software Developer Intern
                </h3>
                <span className="text-gray-400" data-testid="experience-period">
                  May 2025 – Aug 2025
                </span>
              </div>
              <p className="text-lg font-semibold text-gray-300 mb-4" data-testid="experience-company">
                Campus Collect
              </p>
              <p className="text-gray-300 leading-relaxed" data-testid="experience-description">
                As a Software Developer Intern at CampusCollect, I reimagined the student profile experience using React Native and Firebase. I engineered a modular interface that enabled 1,000+ users to experience real-time updates, asynchronous personalization, and snappy navigation — doubling load speeds and reducing code clutter by 35%.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index}
                    className="bg-[hsl(250,68%,65%)] text-white"
                    data-testid={`experience-tech-${index}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
