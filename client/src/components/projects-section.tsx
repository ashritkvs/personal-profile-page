import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/project-card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "UniBot",
      tagline: "Intelligence that never sleeps",
      role: "Lead Developer",
      technologies: ["LangChain", "GPT-4", "Pinecone", "FastAPI"],
      rating: "9.2",
      genres: ["AI", "ML", "API"],
      synopsis: "LangChain, GPT-4, Pinecone, FastAPI — RAG-based chatbot serving 10K+ queries/week with 92% accuracy",
      gradient: "from-blue-900 to-purple-900",
    },
    {
      title: "VisionCare AI",
      tagline: "Sight beyond sight",
      role: "AI Engineer",
      technologies: ["PyTorch", "ResNet50", "OpenCV", "Streamlit"],
      rating: "9.3",
      genres: ["Healthcare", "CV", "AI"],
      synopsis: "PyTorch, ResNet50, OpenCV — 93% F1 score detecting diabetic retinopathy in 2 clinics",
      gradient: "from-red-900 to-orange-900",
    },
    {
      title: "TaskForge",
      tagline: "Where productivity meets perfection",
      role: "Full Stack Developer",
      technologies: ["MERN", "JWT", "Docker"],
      rating: "8.9",
      genres: ["Web", "Full Stack", "Cloud"],
      synopsis: "MERN Stack, JWT, Docker — Kanban board managing 1,000+ tasks on AWS EC2",
      gradient: "from-green-900 to-teal-900",
    },
    {
      title: "StreamPulse",
      tagline: "Real-time connection redefined",
      role: "Frontend Developer",
      technologies: ["React", "WebRTC", "TensorFlow.js"],
      rating: "8.7",
      genres: ["WebRTC", "AI", "Live"],
      synopsis: "React, WebRTC, TensorFlow.js — Real-time video chat with AI overlay, 30% drop reduction",
      gradient: "from-purple-900 to-pink-900",
    },
    {
      title: "BookingPulse",
      tagline: "Predicting the unpredictable",
      role: "Data Scientist",
      technologies: ["Python", "XGBoost", "SHAP"],
      rating: "8.3",
      genres: ["Analytics", "ML", "Hospitality"],
      synopsis: "Python, XGBoost, SHAP — 83% accuracy predicting hotel cancellations, 12% reduction achieved",
      gradient: "from-yellow-900 to-orange-900",
    },
    {
      title: "ClickLens AI",
      tagline: "Data-driven design decisions",
      role: "Analytics Engineer",
      technologies: ["Python", "Pandas", "Scipy"],
      rating: "8.8",
      genres: ["Analytics", "A/B Testing", "UX"],
      synopsis: "Python, Pandas, Scipy — Analyzed 100K+ sessions, discovered peak conversion times",
      gradient: "from-cyan-900 to-blue-900",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[hsl(0,0%,9%)]" data-testid="projects-section">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4" data-testid="projects-title">
            <span className="text-[hsl(45,93%,54%)]">Featured</span> Productions
          </h2>
          <p className="text-gray-400">A cinematic portfolio of technical achievements</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
