import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { ArrowDown, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Fog overlay */}
      <div className="absolute inset-0 fog-overlay pointer-events-none" />

      {/* Animated fog layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-20 left-0 right-0 h-60 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-0 w-[200%] h-40 opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, hsl(215 30% 60% / 0.3), transparent 70%)",
          }}
          animate={{ x: ["-25%", "0%", "-25%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* <motion.p
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Welcome to my realm
          </motion.p> */}

          <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient">
            {profile.name}
          </h1>

          <motion.h2
            className="font-cinzel text-xl md:text-2xl text-gradient-accent mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {profile.title}
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="glass-glow px-8 py-3 rounded-lg font-medium text-foreground hover:border-primary/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href={profile.resume}
              className="glass px-8 py-3 rounded-lg font-medium text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-glow-pulse" />
        </div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;
