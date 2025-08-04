import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { value: "1,500+", label: "Hours Coded", color: "hsl(141,79%,40%)" },
    { value: "100+", label: "GitHub Commits", color: "hsl(250,68%,65%)" },
    { value: "7", label: "Major Projects", color: "hsl(45,93%,54%)" },
    { value: "1,000+", label: "Users Served", color: "hsl(141,79%,40%)" },
  ];

  const achievements = [
    {
      title: "Most Productive Month",
      value: "June 2025",
      description: "Peak performance unlocked",
      color: "hsl(250,68%,65%)",
    },
    {
      title: "Favorite Coding Music",
      value: "Chill Lofi + Rain ☔",
      description: "The perfect coding soundtrack",
      color: "hsl(45,93%,54%)",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[hsl(0,0%,9%)]" data-testid="stats-section">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4" data-testid="stats-title">
            <span className="gradient-text">2024-2025</span> Wrapped Stats
          </h2>
          <p className="text-gray-400">The numbers behind the journey</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-gray-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`stat-card-${index}`}
            >
              <div 
                className="text-3xl font-black mb-2"
                style={{ color: stat.color }}
                data-testid={`stat-value-${index}`}
              >
                {stat.value}
              </div>
              <div className="text-gray-400" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              viewport={{ once: true }}
              data-testid={`achievement-card-${index}`}
            >
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: achievement.color }}
                data-testid={`achievement-title-${index}`}
              >
                {achievement.title}
              </h3>
              <div className="text-4xl font-black text-white mb-2" data-testid={`achievement-value-${index}`}>
                {achievement.value}
              </div>
              <p className="text-gray-400" data-testid={`achievement-description-${index}`}>
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
