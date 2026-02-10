import { experience } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <SectionHeading title="Experience" subtitle="Battles fought and kingdoms built" />
    <div className="max-w-3xl mx-auto relative">
      {/* Timeline line */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

      <div className="space-y-12">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            className="relative pl-16 md:pl-20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary glow-border" />

            <div className="glass-glow rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <Briefcase size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-cinzel text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-primary text-sm font-medium">{exp.company}</p>
                  <p className="text-muted-foreground text-xs mt-1">{exp.duration}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((r, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-primary mt-1.5 shrink-0">▹</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
