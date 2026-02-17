"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "BookMyShow Clone",
    description:
      "Full-stack ticket booking application featuring JWT-secured, role-based @PreAuthorize APIs, rate limiting, Scheduler-driven auto release of unpaid seat holds, admin endpoints for theatres/shows/movies, and a mock payment workflow.",
    tags: ["Spring Boot", "Java 17", "JWT", "REST API", "PostgreSQL"],
    github: "https://github.com/it-harsh",
    live: "https://bookmyshowfe.vercel.app/",
    featured: true,
  },
  {
    title: "Urban Feature Extraction — ISRO",
    description:
      "Developed a Neural Network model for Level 1 Classification and Segmentation of Satellite Images into built-up areas (buildings, roads) and non-built-up areas (forest, agricultural land). Built for the Indian Space Research Organisation.",
    tags: ["Python", "scikit-learn", "Neural Networks", "Image Processing"],
    github: "https://github.com/it-harsh",
    live: "https://drive.google.com/file/d/1jj7pPl3QsI3c8hy8DifY5wZkZciGn4Wn/view?usp=sharing",
    featured: true,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">
            Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Things I&apos;ve{" "}
            <span className="gradient-text">built</span>
          </h3>
        </motion.div>

        {/* Projects grid - bento style */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ y: -8 }}
              className={`group relative p-6 rounded-2xl border border-card-border bg-card-bg/50 backdrop-blur-sm glow-hover transition-all duration-500 ${
                project.featured ? "md:row-span-1" : ""
              }`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 px-2 py-1 text-[10px] font-mono uppercase tracking-wider bg-accent/20 text-accent-light rounded-full border border-accent/30">
                  Featured
                </div>
              )}

              {/* Arrow icon on hover */}
              <motion.div
                className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              >
                <ArrowUpRight className="w-5 h-5 text-accent-light" />
              </motion.div>

              <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-light transition-colors">
                {project.title}
              </h4>

              <p className="text-muted text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-mono bg-background/50 border border-card-border rounded-md text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
