"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Bug, Zap } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Focused",
    description: "Spring Boot, Quarkus, gRPC — building APIs that scale.",
  },
  {
    icon: Zap,
    title: "Performance Tuner",
    description: "Optimized systems up to 93% faster at TCS.",
  },
  {
    icon: Bug,
    title: "Problem Solver",
    description: "Race conditions, gRPC failures, 500s — I debug them all.",
  },
  {
    icon: Code2,
    title: "System Thinker",
    description: "HLD/LLD enthusiast — designing for robustness.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">
            About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Turning caffeine into{" "}
            <span className="gradient-text">backend services</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted leading-relaxed text-lg">
              I&apos;m Harsh Patel — a Java Backend Developer based in India with
              2+ years of hands-on experience building scalable, high-performance
              backend services using the Spring ecosystem.
            </p>
            <p className="text-muted leading-relaxed">
              At TCS, I optimized legacy systems — eliminating database locking issues,
              modernizing multithreaded processing logic, and cutting log storage by 90%.
              Currently at GroveTech Solutions, I build secure APIs with Keycloak auth,
              gRPC integrations, and RBAC across multiple business domains.
            </p>
            <p className="text-muted leading-relaxed">
              I hold a B.E. in Information Technology from Gujarat Technological University
              (8.73 CGPA). I&apos;m passionate about system design (HLD/LLD) and
              continuously push myself to build more robust and elegant architectures.
            </p>
          </motion.div>

          {/* Bento highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-5 rounded-2xl border border-card-border bg-card-bg/50 backdrop-blur-sm glow-hover transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-accent-light mb-3" />
                <h4 className="font-semibold text-foreground mb-1 text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
