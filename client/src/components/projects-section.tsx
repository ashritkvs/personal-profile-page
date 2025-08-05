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
      synopsis: "An AI concierge for student services, delivering smart, context-aware answers using RAG with GPT-4. Built with FastAPI and deployed on GCP, handling 10K+ queries/week with 92% accuracy across 50K+ knowledge docs.",
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
      synopsis: "Built to assist healthcare providers in early diabetic retinopathy diagnosis. Trained CNN model using PyTorch and ResNet50 achieved 93% F1 score. Deployed via AWS S3, now piloted in two clinics, identifying 50+ early-stage patients.",
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
      synopsis: "Full-stack project management tool optimized for developer teams. Features JWT-based role management, real-time task updates, and drag-and-drop Kanban board. Deployed using Docker + NGINX on AWS EC2, cutting onboarding time by 40%.",
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
      synopsis: "Peer-to-peer video chat app merging WebRTC with AI. Features live object detection using TensorFlow.js, overlaying 20+ common objects during calls. Reduced drop-offs by 30% through session tracking and AI-enhanced interactions.",
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
      synopsis: "Helps hospitality businesses predict cancellations using XGBoost on 119K bookings with 83% accuracy. SHAP visualizations reveal key churn drivers. Recommendations led to 12% drop in predicted cancellations through pricing and prepayment strategies.",
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
      synopsis: "Data science dashboard analyzing behavioral A/B tests using statistical testing and Bayesian inference. Processed 100K+ sessions, discovering 12.1% peak conversion between 9 AM–1 PM, leading to strategic CTA timing and UI placement redesigns.",
      gradient: "from-cyan-900 to-blue-900",
      githubUrl: "https://github.com/ashritkvs/ClickLens-AI-Web-Behavior-AB-Testing",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&auto=format",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[hsl(0,0%,9%)] to-[hsl(0,0%,6%)]" data-testid="projects-section">
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
