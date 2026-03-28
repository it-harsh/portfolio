"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Zap, Music } from "lucide-react";

const highlights = [
  { icon: Zap,    title: "93% faster",       description: "CDR scan performance boost at TCS — by rewriting multithreaded file processing." },
  { icon: Server, title: "Financial APIs",    description: "Keycloak auth, gRPC integrations, RBAC across payments and onboarding at GroveTech." },
  { icon: Code2,  title: "3 SaaS shipped",    description: "InvoiceAI, Leadder, BookMyShow — built and deployed end to end." },
  { icon: Music,  title: "Part-time flautist", description: "Precision in code and music aren't that different. Both punish sloppiness." },
];


export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">About</h2>
          <h3 className="text-3xl md:text-4xl font-bold">I build things that <span className="gradient-text">run quietly.</span></h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-5">
            <p className="text-muted leading-relaxed text-lg">
              First real project was Python — combining spectral bands from satellite imagery to train CNNs and ResNets to classify areas as developed or undeveloped land. Learned that green pixels lie.
            </p>
            <p className="text-muted leading-relaxed">
              Spent two years at TCS after that, rewriting legacy Java — better throughput, lower locks, mostly by reading code nobody else wanted to touch.
            </p>
            <p className="text-muted leading-relaxed">
              Now at GroveTech building financial APIs — Keycloak auth, gRPC, payment workflows. On the side I find industries where the software is still missing and start building. InvoiceAI for expense tracking, Leadder for HVAC quotes.
            </p>
            <p className="text-muted leading-relaxed">
              B.E. in IT from Gujarat Technological University (8.73 CGPA). Also play the flute. These two things are not as unrelated as they sound.
            </p>
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
