import { motion } from "framer-motion";
import { Crown, Users, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AchievementsSection() {
  const achievements = [
    {
      organization: "Indian Society for Technical Education (ISTE-RAIT)",
      role: "President",
      period: "Aug 2023 - Aug 2024 · 1 yr",
      icon: Crown,
      color: "hsl(0, 84%, 60%)", // Red
      highlights: [
        "Led committee planning & executing 10 technical events annually",
        "Increased participant engagement by 40% through strategic initiatives",
        "Supervised team of 30 members across various domains",
        "Optimized event management processes for enhanced collaboration"
      ],
      description: "Led a committee that planned and executed 10 technical events each year. By implementing strategic initiatives and optimizing event management processes, I increased participant engagement by 40%. This success enhanced the committee's collaborative environment and aligned all operations with the organization's goals throughout the year."
    },
    {
      organization: "Indian Society for Technical Education (ISTE-RAIT)",
      role: "Head of Marketing",
      period: "Aug 2022 - Aug 2023 · 1 yr",
      icon: TrendingUp,
      color: "hsl(45, 93%, 54%)", // Yellow
      highlights: [
        "Implemented targeted marketing strategies for technical events",
        "Achieved 30% increase in attendance and engagement",
        "Oversaw digital marketing efforts and social media campaigns",
        "Led development of promotional materials and content"
      ],
      description: "Implemented targeted marketing strategies for technical events, leading to a 30% increase in attendance and engagement. Collaborated with committee members to ensure comprehensive coverage across social media platforms. Oversaw digital marketing efforts, including social media campaigns and online advertising."
    }
  ];

  return (
    <section className="py-20 px-4 bg-[hsl(0,0%,9%)]" data-testid="achievements-section">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4" data-testid="achievements-title">
            <span className="text-[hsl(0,84%,60%)]">Leadership</span> & Achievements
          </h2>
          <p className="text-gray-400">Driving impact through technical leadership</p>
        </motion.div>
        
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 border-l-4 hover:transform hover:scale-[1.02] transition-all duration-300"
              style={{ borderLeftColor: achievement.color }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              data-testid={`achievement-card-${index}`}
            >
              <div className="flex items-start gap-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: achievement.color }}
                >
                  <achievement.icon className="text-white w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 
                        className="text-2xl font-bold mb-1"
                        style={{ color: achievement.color }}
                        data-testid={`achievement-role-${index}`}
                      >
                        {achievement.role}
                      </h3>
                      <p className="text-lg font-semibold text-gray-300 mb-2" data-testid={`achievement-org-${index}`}>
                        {achievement.organization}
                      </p>
                    </div>
                    <span className="text-gray-400" data-testid={`achievement-period-${index}`}>
                      {achievement.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6" data-testid={`achievement-description-${index}`}>
                    {achievement.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    {achievement.highlights.map((highlight, highlightIndex) => (
                      <div 
                        key={highlightIndex}
                        className="flex items-start gap-2"
                        data-testid={`achievement-highlight-${index}-${highlightIndex}`}
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: achievement.color }}
                        ></div>
                        <p className="text-sm text-gray-400">{highlight}</p>
                      </div>
                    ))}
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