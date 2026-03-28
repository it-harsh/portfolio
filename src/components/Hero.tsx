"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Java Backend Engineer",
  "Full-Stack Developer",
  "System Designer",
  "SaaS Builder",
];

function useTypewriter(words: string[], typeSpeed = 75, deleteSpeed = 40, pauseMs = 2200) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (!isDeleting && displayed === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }
    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
      return;
    }

    const t = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
      );
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(t);
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

  return displayed;
}

const stats = [
  { value: "84.6%", label: "throughput ↑" },
  { value: "93%",   label: "perf boost"   },
  { value: "90%",   label: "log storage ↓" },
  { value: "3+",    label: "years exp"     },
];

export default function Hero() {
  const typewritten = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Static ambient glow — no animation, more premium */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 px-6 max-w-5xl mx-auto w-full pt-32 pb-20">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4"
        >
          <span className="gradient-text">Harsh</span>{" "}
          <span className="text-foreground">Patel</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl font-mono text-muted mb-6 h-8 flex items-center gap-1"
        >
          <span className="text-accent-light">&gt;</span>
          <span>{typewritten}</span>
          <span className="cursor-blink text-accent-light">|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-base text-muted/70 max-w-xl mb-10 leading-relaxed"
        >
          Building scalable backend systems and shipping full-stack products.
          Spring Boot · Java 21 · Next.js · PostgreSQL · AWS.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center gap-4 mb-10"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-accent hover:bg-accent-light text-white rounded-full font-medium transition-all duration-300 glow-hover"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-card-border hover:border-accent-light text-foreground rounded-full font-medium transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          {[
            { icon: Github,   href: "https://github.com/it-harsh",                label: "GitHub"   },
            { icon: Linkedin, href: "https://www.linkedin.com/in/it-harsh/",      label: "LinkedIn" },
            { icon: Mail,     href: "mailto:it.harsh2197@gmail.com",               label: "Email"    },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border border-card-border bg-card-bg/50 text-muted hover:text-foreground hover:border-accent-light transition-colors"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-wrap gap-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center py-4 px-6 rounded-2xl border border-card-border bg-card-bg/40 backdrop-blur-sm min-w-[100px]"
            >
              <span className="text-2xl font-bold gradient-text font-mono">{stat.value}</span>
              <span className="text-xs text-muted mt-1 text-center whitespace-nowrap">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted hover:text-foreground transition-colors"
        >
          <ArrowDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
}
