"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services Ltd",
    period: "Feb 2021 - Mar 2023",
    location: "Mumbai, India",
    description:
      "USM: Optimized legacy code to reduce database locks from multithreaded access, improving throughput by 84.6%. Updated query conditions to check user consumption across clusters, reducing response time by 62.5%. Researched and built a PoC centralized log-monitoring solution using Elasticsearch, Kibana, and Filebeat. Updated 300+ SoapUI test suites for encrypted parameters. CDR: Upgraded multithreaded file-scanning and processing performance by up to 93%, eliminating I/O alarms. Optimized loggers to reduce storage by 90%. Designed a Java-based simulator for production-scale CDR file generation.",
    tags: ["Java", "Multithreading", "SoapUI", "ELK Stack", "Performance Optimization"],
  },
  {
    type: "education",
    role: "B.E. in Information Technology",
    company: "Gujarat Technological University",
    period: "Jul 2016 - Aug 2020",
    location: "Ahmedabad, India",
    description:
      "Graduated with 8.73/10.0 CGPA. Focused on software engineering, data structures, algorithms, and neural networks. Completed ISRO satellite image classification project during final year.",
    tags: ["Java", "Python", "Data Structures", "Neural Networks"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">
            Experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Where I&apos;ve{" "}
            <span className="gradient-text">worked</span>
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-card-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * i }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-[22px] top-6 w-[13px] h-[13px] rounded-full border-2 border-accent-light bg-background z-10" />

                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl border border-card-border bg-card-bg/50 backdrop-blur-sm glow-hover transition-all duration-300"
                >
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent-light">
                        {exp.type === "work" ? (
                          <Briefcase size={18} />
                        ) : (
                          <GraduationCap size={18} />
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{exp.role}</h4>
                        <p className="text-sm text-accent-light">{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-muted bg-background/50 border border-card-border px-3 py-1 rounded-full block mb-1">
                        {exp.period}
                      </span>
                      <span className="text-xs text-muted">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-background/50 border border-card-border rounded-md text-muted"
                      >
                        {tag}
                      </span>
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
