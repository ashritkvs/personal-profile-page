import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EducationSection() {
  const educationData = [
    {
      degree: "M.S in Data Science",
      school: "Stony Brook University, New York",
      period: "Aug 2024 – May 2026",
      gpa: "GPA: 3.66/4.0",
      color: "hsl(141,79%,40%)", // Spotify green
    },
    {
      degree: "B.Tech in Computer Science",
      school: "Ramrao Adik Institute of Technology, Mumbai",
      period: "Jul 2020 – Jul 2024",
      gpa: "CGPA: 9.09/10",
      color: "hsl(45,93%,54%)", // IMDb yellow
    },
  ];

  return (
    <section className="py-20 px-4 bg-[hsl(0,0%,9%)]" data-testid="education-section">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4" data-testid="education-title">
            <span className="text-[hsl(141,79%,40%)]">Your Top</span> Academic Tracks
          </h2>
          <p className="text-gray-400">The foundation that shaped the journey</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 border-l-4 hover:transform hover:scale-105 transition-all duration-300"
              style={{ borderLeftColor: edu.color }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              data-testid={`education-card-${index}`}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: edu.color }}
                >
                  <GraduationCap className="text-black w-6 h-6" />
                </div>
                <div>
                  <h3 
                    className="text-xl font-bold"
                    style={{ color: edu.color }}
                    data-testid={`education-degree-${index}`}
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300" data-testid={`education-school-${index}`}>
                    {edu.school}
                  </p>
                  <p className="text-gray-400" data-testid={`education-period-${index}`}>
                    {edu.period}
                  </p>
                  <div className="mt-4">
                    <Badge 
                      className="text-black font-bold"
                      style={{ backgroundColor: edu.color }}
                      data-testid={`education-gpa-${index}`}
                    >
                      {edu.gpa}
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
