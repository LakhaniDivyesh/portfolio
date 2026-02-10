import { achievements } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const AchievementsSection = () => (
  <SectionWrapper id="achievements">
    <SectionHeading title="Achievements" subtitle="Honours earned along the way" />
    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {achievements.map((ach, idx) => (
        <motion.div
          key={idx}
          className="glass-glow rounded-xl p-6 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors shrink-0">
              <Award size={20} />
            </div>
            <div>
              <h3 className="font-cinzel text-base font-semibold text-foreground">{ach.title}</h3>
              <p className="text-primary text-sm">{ach.issuer} · {ach.year}</p>
              <p className="text-muted-foreground text-sm mt-2">{ach.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
