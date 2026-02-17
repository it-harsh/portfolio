"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java 17", "JavaScript", "Python", "SQL"],
    color: "from-purple-500 to-violet-600",
    span: "col-span-2 md:col-span-1",
  },
  {
    title: "Backend Frameworks",
    skills: ["Spring Boot", "Quarkus", "gRPC", "REST APIs", "Microservices"],
    color: "from-cyan-500 to-blue-600",
    span: "col-span-2 md:col-span-1",
  },
  {
    title: "Databases & Messaging",
    skills: ["PostgreSQL", "Redis", "Kafka", "Hibernate/JPA"],
    color: "from-emerald-500 to-teal-600",
    span: "col-span-2",
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "AWS ECS", "CI/CD", "Linux", "Git"],
    color: "from-orange-500 to-amber-600",
    span: "col-span-2 md:col-span-1",
  },
  {
    title: "Security & Tools",
    skills: ["Keycloak", "RBAC", "JWT", "OpenAPI", "SoapUI", "Claude Code"],
    color: "from-rose-500 to-pink-600",
    span: "col-span-2 md:col-span-1",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">
            Skills
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            My{" "}
            <span className="gradient-text">tech stack</span>
          </h3>
        </motion.div>

        {/* Bento grid of skills */}
        <div className="grid grid-cols-2 gap-4">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -5 }}
              className={`${category.span} relative group p-6 rounded-2xl border border-card-border bg-card-bg/50 backdrop-blur-sm overflow-hidden glow-hover transition-all duration-300`}
            >
              {/* Gradient accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity`}
              />

              <h4 className="font-semibold text-foreground mb-4 text-lg">
                {category.title}
              </h4>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + i * 0.1 + j * 0.05,
                    }}
                    className="px-3 py-1.5 text-sm bg-background/50 border border-card-border rounded-lg text-muted hover:text-foreground hover:border-accent-light transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
