import { education } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <SectionWrapper id="education">
    <SectionHeading title="Education" subtitle="Where the journey began" />
    <div className="max-w-3xl mx-auto relative">
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

      <div className="space-y-10">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="relative pl-16 md:pl-20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
          >
            <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent" />

            <div className="glass-glow rounded-xl p-6">
              <div className="flex items-start gap-3">
                <GraduationCap size={20} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-cinzel text-lg font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-accent text-sm font-medium">{edu.institute}</p>
                  <p className="text-muted-foreground text-xs mt-1">{edu.year}</p>
                  <p className="text-foreground/80 text-sm mt-3">{edu.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default EducationSection;
