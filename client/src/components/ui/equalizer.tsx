import { motion } from "framer-motion";

interface EqualizerProps {
  large?: boolean;
}

export default function Equalizer({ large = false }: EqualizerProps) {
  const barCount = large ? 7 : 5;
  const barWidth = large ? "w-2" : "w-1";
  
  return (
    <div className="flex gap-1" data-testid="equalizer">
      {Array.from({ length: barCount }).map((_, index) => (
        <motion.div
          key={index}
          className={`${barWidth} bg-[hsl(141,79%,40%)] rounded-t equalizer-bar`}
          animate={{
            height: ["20px", "40px", "20px"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
          data-testid={`equalizer-bar-${index}`}
        />
      ))}
    </div>
  );
}
