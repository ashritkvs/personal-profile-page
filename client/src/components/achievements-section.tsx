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
      description: "As President of ISTE-RAIT, I led a diverse team of over 30 student coordinators, streamlining the planning and execution of 10 major technical events over the academic year. I introduced strategic reforms in event logistics and engagement models, which resulted in a 40% increase in participation. My focus on fostering cross-team collaboration and implementing process-driven workflows significantly enhanced the society's operational efficiency and visibility within the campus."
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
      description: "As the Marketing Head, I designed and launched digital campaigns that powered the success of ISTE's flagship events. My targeted marketing strategies — from Instagram reels to LinkedIn outreach — led to a 30% boost in student attendance and overall engagement. I also collaborated closely with the content and design teams to create compelling promotional materials, managed ad performance, and set the foundation for consistent branding across all channels."
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