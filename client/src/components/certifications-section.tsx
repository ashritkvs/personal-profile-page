import { motion } from "framer-motion";
import { BarChart3, TrendingUp, GraduationCap } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      company: "IBM",
      title: "Data Analytics",
      icon: BarChart3,
      color: "hsl(221, 83%, 53%)", // Blue
    },
    {
      company: "Microsoft",
      title: "Power BI Visualization",
      icon: TrendingUp,
      color: "hsl(45, 93%, 54%)", // Yellow
    },
    {
      company: "Harvard Business School",
      title: "Business Analytics",
      icon: GraduationCap,
      color: "hsl(0, 84%, 60%)", // Red
    },
  ];

  return (
    <section className="py-20 px-4 bg-[hsl(0,0%,6%)]" data-testid="certifications-section">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4" data-testid="certifications-title">
            <span className="text-[hsl(45,93%,54%)]">Achievement</span> Unlocked
          </h2>
          <p className="text-gray-400">Certified skills and recognition</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 border-l-4 hover:transform hover:scale-105 transition-all duration-300"
              style={{ borderLeftColor: cert.color }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              data-testid={`certification-card-${index}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: cert.color }}
                >
                  <cert.icon className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold" data-testid={`certification-company-${index}`}>
                    {cert.company}
                  </h3>
                  <p 
                    style={{ color: cert.color }}
                    data-testid={`certification-title-${index}`}
                  >
                    {cert.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
