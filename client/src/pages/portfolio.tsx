import { motion } from "framer-motion";
import HeroSection from "@/components/hero-section";
import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import AchievementsSection from "@/components/achievements-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import StatsSection from "@/components/stats-section";
import CertificationsSection from "@/components/certifications-section";
import FooterSection from "@/components/footer-section";

export default function Portfolio() {
  return (
    <motion.div 
      className="bg-[hsl(0,0%,6%)] text-white font-sans overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <AchievementsSection />
      <ProjectsSection />
      <SkillsSection />
      <StatsSection />
      <CertificationsSection />
      <FooterSection />
    </motion.div>
  );
}
