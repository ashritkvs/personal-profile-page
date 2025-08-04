import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/project-card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "UniBot",
      tagline: "Intelligence that never sleeps",
      role: "Lead Developer",
      technologies: ["LangChain", "GPT-4", "Pinecone", "FastAPI", "React", "Docker"],
      rating: "9.2",
      genres: ["AI", "ML", "API"],
      synopsis: "RAG-based chatbot serving 10K+ queries/week with 92% retrieval accuracy — Hosted on GCP with CI/CD",
      gradient: "from-blue-900 to-purple-900",
      githubUrl: "https://github.com/ashritkvs/unibot-pdf-chat",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=600&fit=crop&auto=format",
    },
    {
      title: "VisionCare AI",
      tagline: "A Retina Revolution",
      role: "AI Engineer", 
      technologies: ["PyTorch", "ResNet50", "OpenCV", "Streamlit", "Python"],
      rating: "9.3",
      genres: ["Healthcare", "CV", "AI"],
      synopsis: "Achieved 93% F1 score; deployed in 2 clinics to detect 50+ early-stage diabetic retinopathy patients",
      gradient: "from-red-900 to-orange-900",
      githubUrl: "https://github.com/ashritkvs/Vision-Care",
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=600&fit=crop&auto=format",
    },
    {
      title: "TaskForge",
      tagline: "Where productivity meets perfection",
      role: "Full Stack Developer",
      technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Docker"],
      rating: "8.9",
      genres: ["Web", "Full Stack", "Cloud"],
      synopsis: "Drag-and-drop Kanban board for 1,000+ tasks, deployed via Docker on AWS EC2",
      gradient: "from-green-900 to-teal-900",
      githubUrl: "https://github.com/ashritkvs/TaskForge-V2",
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop&auto=format",
    },
    {
      title: "StreamPulse",
      tagline: "Real-time connection redefined",
      role: "Frontend Developer",
      technologies: ["React", "WebRTC", "TensorFlow.js", "Socket.io"],
      rating: "8.7",
      genres: ["WebRTC", "AI", "Live"],
      synopsis: "Real-time object detection and messaging with 30% drop reduction in video calls",
      gradient: "from-purple-900 to-pink-900",
      githubUrl: "https://github.com/ashritkvs/Stream-Pulse-V2",
      imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=600&fit=crop&auto=format",
    },
    {
      title: "BookingPulse",
      tagline: "Predicting the unpredictable",
      role: "Data Scientist",
      technologies: ["Python", "XGBoost", "SHAP", "Pandas", "Scikit-learn"],
      rating: "8.3",
      genres: ["Analytics", "ML", "Hospitality"],
      synopsis: "83% accuracy, helped identify churn drivers, reduced cancellations by 12%",
      gradient: "from-yellow-900 to-orange-900",
      githubUrl: "https://github.com/ashritkvs/BookingPulse-Hotel-Cancellation-Analytics",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=600&fit=crop&auto=format",
    },
    {
      title: "ClickLens AI",
      tagline: "Data-driven design decisions",
      role: "Analytics Engineer",
      technologies: ["Python", "Pandas", "Scipy", "Matplotlib", "Seaborn"],
      rating: "8.8",
      genres: ["Analytics", "A/B Testing", "UX"],
      synopsis: "Analyzed 100K+ sessions, discovered peak conversion times, recommended 3 winning UI variants",
      gradient: "from-cyan-900 to-blue-900",
      githubUrl: "https://github.com/ashritkvs/ClickLens-AI-Web-Behavior-AB-Testing",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&auto=format",
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
