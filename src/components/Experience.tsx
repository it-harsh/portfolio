"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    role: "Software Developer",
    company: "GroveTech Solutions",
    period: "Oct 2025 – Present",
    location: "Surat, India",
    summary: "Building secure financial APIs at a fintech startup on Quarkus.",
    bullets: [
      "Invite-to-org system with RBAC, 7-day expiry, and Keycloak-issued invite emails",
      "Custom TOTP verification API for both login and transaction approval flows",
      "Quorum-based transaction approval system",
      "Identity verification during onboarding via Dotfile API integration",
      "Eliminated 5-min Keycloak polling loop (years of wasted resources) — replaced with event-driven password-acceptance detection",
      "Security Augmentation for role resolution at login phase; led Phase 1 to completion",
    ],
    tags: ["Quarkus", "Keycloak", "gRPC", "AWS ECS", "PostgreSQL"],
  },
  {
    type: "work",
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services",
    period: "Feb 2021 – Mar 2023",
    location: "Mumbai, India",
    summary: "Core Java + Spring on a telecom project — performance, compliance, and reliability.",
    bullets: [
      "84.6% throughput boost — eliminated DB locks from multithreaded access",
      "62.5% lower response times via query optimization for high-concurrency environments",
      "93% faster CDR file-scanning — rewrote ExecutorService-based simulator (Cherry Cake project)",
      "Bash scripts for GDPR compliance — data at rest and in transit",
      "Worked on Lawful Interception submodule",
      "Updated 300+ SoapUI/Groovy test suites to accept encrypted parameters",
      "Load testing in SoapUI and JMeter; profiled with JVisualVM and JProfiler",
      "90% log storage reduction; built Elasticsearch + Kibana + Filebeat monitoring PoC",
    ],
    tags: ["Java", "Spring Boot", "AOP", "Spring Data JPA", "Multithreading", "ELK Stack", "JMeter"],
  },
  {
    type: "education",
    role: "B.E. in Information Technology",
    company: "Gujarat Technological University",
    period: "Jul 2016 – Aug 2020",
    location: "Ahmedabad, India",
    summary: "8.73 CGPA — software engineering, DSA, algorithms, neural networks.",
    bullets: [
      "ISRO project: CNN + ResNet image classification, BoVW theory, Python",
    ],
    tags: ["Java", "Python", "Data Structures", "Neural Networks"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 0.8", "end 0.3"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="relative py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Where I&apos;ve <span className="gradient-text">worked</span></h3>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          <div className="absolute left-8 top-0 bottom-0 w-px bg-card-border hidden md:block overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-cyan-400 via-cyan-300 to-cyan-400 origin-top"
              style={{ scaleY, height: "100%" }}
            />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * i }}
                className="relative md:pl-20"
              >
                {exp.type === "work" ? (
                  <div className="hidden md:flex absolute left-[22px] top-7 w-[13px] h-[13px] rounded-full border-2 border-accent-light bg-accent-light z-10" />
                ) : (
                  <div className="hidden md:flex absolute left-[22px] top-7 w-[13px] h-[13px] rounded-full border-2 border-accent-light/50 bg-background z-10" />
                )}
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl border border-card-border backdrop-blur-sm glow-hover transition-all duration-300 ${
                    exp.type === "work"
                      ? "bg-card-bg/50 border-l-2 border-l-cyan-500/40"
                      : "bg-card-bg/30 opacity-90"
                  }`}
                >
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${exp.type === "work" ? "bg-cyan-500/10 text-cyan-400" : "bg-zinc-500/10 text-zinc-400"}`}>
                        {exp.type === "work" ? <Briefcase size={18} /> : <GraduationCap size={18} />}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{exp.role}</h4>
                        <p className="text-sm text-accent-light">{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-muted bg-background/50 border border-card-border px-3 py-1 rounded-full block mb-1">{exp.period}</span>
                      <span className="text-xs text-muted">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-3">{exp.summary}</p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-light/60 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-mono bg-background/50 border border-card-border rounded-md text-muted">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
