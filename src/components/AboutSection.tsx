import { profile } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const AboutSection = () => (
  <SectionWrapper id="about">
    <SectionHeading title="About Me" subtitle="The architect behind the code" />
    <div className="grid md:grid-cols-5 gap-12 items-center max-w-5xl mx-auto">
      {/* Avatar */}
      <motion.div
        className="md:col-span-2 flex justify-center"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden glass-glow">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
      </motion.div>

      {/* Description */}
      <div className="md:col-span-3 space-y-6">
        <p className="text-foreground/90 leading-relaxed text-lg">{profile.description}</p>
        <div className="flex flex-wrap gap-3">
          {["React", "Next.js" , "Node.js", "Nest.js" ,"PostgreSQL", "Express.js", "MongoDB", "MySql"].map((t) => (
            <span key={t} className="glass px-4 py-1.5 rounded-full text-sm text-primary font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
