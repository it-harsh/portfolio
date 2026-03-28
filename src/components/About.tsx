"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code2, Server, Bug, Zap } from "lucide-react";

const highlights = [
  { icon: Server, title: "Full-Stack Builder",  description: "Java backend roots, Next.js frontend — shipping end-to-end products." },
  { icon: Zap,    title: "Performance Tuner",   description: "Optimized systems up to 93% faster at TCS." },
  { icon: Bug,    title: "Problem Solver",       description: "Race conditions, gRPC failures, 500s — I debug them all." },
  { icon: Code2,  title: "System Thinker",       description: "HLD/LLD enthusiast — designing for robustness." },
];

function Counter({ target, suffix = "", duration = 1800, decimals = 0 }: { target: number; suffix?: string; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Number((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration, decimals]);

  return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : count}{suffix}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Obsessed with latency, <span className="gradient-text">allergic to downtime</span></h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6">
            <p className="text-muted leading-relaxed text-lg">
              I&apos;m Harsh Patel — a Full-Stack Developer based in India with 3+ years of experience building scalable backend services and shipping end-to-end products. Java and Spring Boot are my foundation; Next.js is where I&apos;ve been lately.
            </p>
            <p className="text-muted leading-relaxed">
              At TCS, I optimized legacy systems — eliminating database locking issues, modernizing multithreaded processing, and cutting log storage by 90%. At GroveTech Solutions, I build secure APIs with Keycloak auth, gRPC integrations, and RBAC across multiple business domains.
            </p>
            <p className="text-muted leading-relaxed">
              B.E. in Information Technology from Gujarat Technological University (8.73 CGPA). Passionate about system design and building things that actually scale.
            </p>
            <p className="text-sm text-muted/55 leading-relaxed border-l-2 border-accent/30 pl-4 italic">
              Part-time flautist. I find a new domain, wonder if there&apos;s software missing, and start building. InvoiceAI and Leadder are the latest experiments.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { label: "throughput ↑", target: 84.6, suffix: "%", decimals: 1 },
                { label: "perf boost",   target: 93,   suffix: "%", decimals: 0 },
                { label: "log storage ↓",target: 90,   suffix: "%", decimals: 0 },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl border border-card-border bg-card-bg/50 text-center">
                  <p className="text-xl font-bold font-mono gradient-text">
                    <Counter target={item.target} suffix={item.suffix} decimals={item.decimals} />
                  </p>
                  <p className="text-xs text-muted mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

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
                <h4 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
