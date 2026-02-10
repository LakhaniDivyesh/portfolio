import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="cinematic-bg min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-cinzel text-4xl text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            ← Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cinematic-bg min-h-screen">
      {/* Back navigation */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/#projects"
          className="glass-glow px-4 py-2 rounded-lg flex items-center gap-2 text-sm text-foreground hover:border-primary/40 transition-all"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
      </motion.div>

      {/* Hero image */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 fog-overlay pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 -mt-32 relative z-10 pb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Title */}
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-gradient mb-4">
            {project.title}
          </h1>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Description card */}
          <div className="glass-glow rounded-xl p-8 mb-8">
            <h2 className="font-cinzel text-xl font-semibold text-foreground mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.description}
            </p>
          </div>

          {/* Features */}
          <div className="glass-glow rounded-xl p-8 mb-8">
            <h2 className="font-cinzel text-xl font-semibold text-foreground mb-4">
              Key Features
            </h2>
            <ul className="space-y-3">
              {(project.features).map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="glass-glow px-6 py-3 rounded-lg flex items-center gap-2 text-foreground hover:border-primary/40 transition-all"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href="#"
              className="glass px-6 py-3 rounded-lg flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all"
            >
              <Github size={16} />
              Source Code
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
