import { skills } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <SectionHeading title="Skills & Arsenal" subtitle="Technologies I wield with mastery" />
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {Object.entries(skills).map(([category, items], catIdx) => (
        <motion.div
          key={category}
          className="glass-glow rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: catIdx * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.01 }}
        >
          <h3 className="font-cinzel text-lg font-semibold text-gradient-accent mb-5">{category}</h3>
          <div className="grid grid-cols-3 gap-3">
            {items.map((skill) => (
              <div
                key={skill.name}
                className="glass rounded-lg p-3 text-center hover:border-primary/30 transition-all duration-300 group"
              >
                <span className="text-xl block mb-1 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
