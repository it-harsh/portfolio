"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "InvoiceAI",
    description: "AI-powered invoice & expense management SaaS. Upload invoices and AI auto-extracts vendor, amount, line items, and category. Expense approval workflows, dashboard analytics, CSV export, and multi-tenant org support.",
    tags: ["Spring Boot","Java 21","Next.js","TypeScript","PostgreSQL","Claude AI","Cloudflare R2"],
    github: "https://github.com/it-harsh/invoiceai-api",
    live: "https://invoiceai-web.vercel.app",
    featured: true, solo: true,
    accent: "from-violet-500 to-purple-600",
  },
  {
    title: "Leadder",
    description: "B2B quote generation platform for HVAC businesses. Configurable product pricing, customer-facing quote widget, and CRM lead capture via webhooks. Built solo end-to-end.",
    tags: ["Next.js","TypeScript","Supabase","PostgreSQL"],
    github: null,
    live: "https://leadder-ochre.vercel.app",
    featured: true, solo: true,
    accent: "from-emerald-500 to-green-600",
  },
  {
    title: "InfiBis",
    description: "B2B business intelligence platform — sales pipeline, inventory management, employee tracking, and ML-powered forecasts. Part of the team building and integrating backend APIs.",
    tags: ["Next.js","NestJS","PostgreSQL","Python ML","GraphQL"],
    github: null,
    live: "https://infibis-frontend.onrender.com",
    featured: true, solo: false,
    accent: "from-cyan-500 to-blue-600",
  },
  {
    title: "BookMyShow Clone",
    description: "Full-stack ticket booking app with JWT-secured role-based APIs, rate limiting, scheduler-driven auto-release of unpaid seat holds, admin endpoints for theatres/shows/movies, and mock payment workflow.",
    tags: ["Spring Boot","Java 17","JWT","REST API","PostgreSQL"],
    github: "https://github.com/it-harsh",
    live: "https://bookmyshowfe.vercel.app/",
    featured: false, solo: true,
    accent: "from-orange-500 to-amber-600",
  },
  {
    title: "Split Share",
    description: "ReactJS-powered expense-splitting application leveraging advanced state management to divide expenses among friends seamlessly.",
    tags: ["React","JavaScript","State Management","CSS"],
    github: "https://github.com/it-harsh/react",
    live: "https://it-harsh.github.io/react",
    featured: false, solo: true,
    accent: "from-rose-500 to-pink-600",
  },
  {
    title: "Urban Feature Extraction — ISRO",
    description: "Neural Network model for classification and segmentation of satellite images into built-up areas (buildings, roads) and non-built-up areas (forest, agricultural land). Built for ISRO.",
    tags: ["Python","scikit-learn","Neural Networks","Image Processing"],
    github: null,
    live: "https://drive.google.com/file/d/1jj7pPl3QsI3c8hy8DifY5wZkZciGn4Wn/view?usp=sharing",
    liveLabel: "Project Report",
    featured: false, solo: true,
    accent: "from-teal-500 to-emerald-600",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Things I&apos;ve <span className="gradient-text">built</span></h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl border border-card-border bg-card-bg/50 backdrop-blur-sm glow-hover transition-all duration-500 flex flex-col overflow-hidden"
            >
              {/* Per-project accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.accent} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Badges */}
              <div className="flex items-center gap-2 mb-4">
                {project.featured && (
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-accent/20 text-accent-light rounded-full border border-accent/30">
                    Featured
                  </span>
                )}
              </div>

              <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent-light transition-colors">
                {project.title}
              </h4>
              <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs font-mono bg-background/50 border border-card-border rounded-md text-muted">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-card-border">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors">
                    <Github size={15} /> Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors">
                    <ExternalLink size={15} /> {(project as { liveLabel?: string }).liveLabel || "Live Demo"}
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
