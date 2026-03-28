"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const row1 = ["Java 21","Spring Boot","Quarkus","gRPC","NestJS","REST APIs","Microservices","Kafka","Redis","PostgreSQL","MySQL","Hibernate/JPA","Docker","AWS ECS","Flyway"];
const row2 = ["Next.js","TypeScript","React","Tailwind CSS","Supabase","Keycloak","JWT","RBAC","Python","CI/CD","Linux","Git","Bash","GraphQL","Prisma"];

function MarqueeRow({ skills, direction }: { skills: string[]; direction: "fwd" | "rev" }) {
  const doubled = [...skills, ...skills];
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div
        className="flex gap-3 w-max"
        style={{ animation: `marquee-${direction} ${direction === "fwd" ? "35s" : "42s"} linear infinite` }}
      >
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 text-sm font-mono border border-card-border bg-card-bg/60 rounded-lg text-muted whitespace-nowrap hover:text-foreground hover:border-accent-light transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold">My <span className="gradient-text">tech stack</span></h3>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        <MarqueeRow skills={row1} direction="fwd" />
        <MarqueeRow skills={row2} direction="rev" />
      </motion.div>
    </section>
  );
}
