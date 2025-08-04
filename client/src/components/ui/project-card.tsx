import { motion } from "framer-motion";
import { Star, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  tagline: string;
  role: string;
  technologies: string[];
  rating: string;
  genres: string[];
  synopsis: string;
  gradient: string;
  githubUrl: string;
  imageUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const genreColors = [
    "hsl(221, 83%, 53%)", // Blue
    "hsl(141, 79%, 40%)", // Green
    "hsl(250, 68%, 65%)", // Purple
    "hsl(0, 84%, 60%)", // Red
    "hsl(45, 93%, 54%)", // Yellow
    "hsl(200, 95%, 45%)", // Cyan
  ];

  return (
    <motion.div 
      className="imdb-card rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-[hsl(45,93%,54%)] transition-all duration-300 hover:transform hover:scale-105"
      whileHover={{ y: -5 }}
      data-testid={`project-card-${index}`}
    >
      {/* Movie poster style background */}
      <div className="h-2/3 relative overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}></div>
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 bg-black bg-opacity-70 rounded px-2 py-1">
            <Star className="w-4 h-4 text-[hsl(45,93%,54%)] fill-current" />
            <span className="text-sm font-bold" data-testid={`project-rating-${index}`}>
              {project.rating}
            </span>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold mb-2" data-testid={`project-title-${index}`}>
            {project.title}
          </h3>
          <p className="text-sm text-gray-300" data-testid={`project-tagline-${index}`}>
            "{project.tagline}"
          </p>
        </div>
      </div>
      
      <div className="p-4 h-1/3">
        <div className="flex flex-wrap gap-1 mb-2">
          {project.genres.map((genre, genreIndex) => (
            <Badge 
              key={genreIndex}
              className="text-xs text-white"
              style={{ backgroundColor: genreColors[genreIndex % genreColors.length] }}
              data-testid={`project-genre-${index}-${genreIndex}`}
            >
              {genre}
            </Badge>
          ))}
        </div>
        
        <div className="mb-2">
          <p className="text-xs text-gray-500 font-semibold mb-1">Tech Stack:</p>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                data-testid={`project-tech-${index}-${techIndex}`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs text-gray-500">+{project.technologies.length - 4}</span>
            )}
          </div>
        </div>
        
        <p className="text-xs text-gray-400 mb-3" data-testid={`project-synopsis-${index}`}>
          {project.synopsis}
        </p>
        
        <div className="flex gap-2">
          <Button 
            size="sm"
            className="bg-[hsl(45,93%,54%)] text-black text-xs font-bold hover:bg-yellow-400"
            onClick={() => window.open(project.githubUrl, '_blank')}
            data-testid={`project-github-${index}`}
          >
            <Github className="w-3 h-3 mr-1" />
            GitHub
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
