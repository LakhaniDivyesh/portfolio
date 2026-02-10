import { projects } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <SectionHeading title="Projects" subtitle="Forged in fire, built to last" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {projects.map((project, idx) => (
        <Link
          to={`/project/${project.id}`}
          key={project.id}
        >
          <motion.div
            className="glass-glow rounded-xl overflow-hidden group cursor-pointer h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <div className="h-60 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={16} className="text-primary" />
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-cinzel text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
