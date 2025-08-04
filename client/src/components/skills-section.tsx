import { motion } from "framer-motion";
import ProgressBar from "@/components/ui/progress-bar";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      color: "hsl(141,79%,40%)",
      skills: [
        { name: "Python", percentage: 95 },
        { name: "JavaScript", percentage: 90 },
        { name: "TypeScript", percentage: 85 },
        { name: "SQL", percentage: 80 },
        { name: "Java", percentage: 75 },
      ],
    },
    {
      title: "Frameworks",
      color: "hsl(250,68%,65%)",
      skills: [
        { name: "React", percentage: 95 },
        { name: "Node.js", percentage: 88 },
        { name: "FastAPI", percentage: 85 },
        { name: "Express", percentage: 82 },
        { name: "Tailwind", percentage: 90 },
      ],
    },
    {
      title: "AI/ML",
      color: "hsl(45,93%,54%)",
      skills: [
        { name: "PyTorch", percentage: 88 },
        { name: "TensorFlow", percentage: 82 },
        { name: "Scikit-learn", percentage: 90 },
        { name: "SHAP", percentage: 75 },
        { name: "OpenCV", percentage: 80 },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-[hsl(0,0%,6%)]" data-testid="skills-section">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4" data-testid="skills-title">
            <span className="text-[hsl(141,79%,40%)]">Your Top</span> Tech Stack
          </h2>
          <p className="text-gray-400">The tools that power the magic</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-gray-800 rounded-2xl p-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              data-testid={`skills-category-${categoryIndex}`}
            >
              <h3 
                className="text-xl font-bold mb-6"
                style={{ color: category.color }}
                data-testid={`skills-category-title-${categoryIndex}`}
              >
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} data-testid={`skill-${categoryIndex}-${skillIndex}`}>
                    <div className="flex justify-between mb-2">
                      <span data-testid={`skill-name-${categoryIndex}-${skillIndex}`}>
                        {skill.name}
                      </span>
                      <span 
                        style={{ color: category.color }}
                        data-testid={`skill-percentage-${categoryIndex}-${skillIndex}`}
                      >
                        {skill.percentage}%
                      </span>
                    </div>
                    <ProgressBar 
                      percentage={skill.percentage} 
                      color={category.color}
                      testId={`skill-bar-${categoryIndex}-${skillIndex}`}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
