import { motion } from "framer-motion";

interface ProgressBarProps {
  percentage: number;
  color: string;
  testId?: string;
}

export default function ProgressBar({ percentage, color, testId }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-700 rounded-full h-2" data-testid={testId}>
      <motion.div 
        className="h-2 rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </div>
  );
}
