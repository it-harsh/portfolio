"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Courses", href: "#courses", id: "courses" },
  { name: "Contact", href: "#contact", id: "contact" },
];

function useActiveSection() {
  const [activeId, setActiveId] = useState("hero");
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);
  return activeId;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const activeId = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light") setTheme("light");
    } catch (e) {}
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-card-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#hero"
          className="text-xl font-mono font-bold text-foreground hover:text-accent-light transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          hp<span className="text-accent-light cursor-blink">_</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => {
            const isActive = activeId === link.id;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className={`text-sm transition-colors relative group ${
                  isActive ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-accent-light transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-muted hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-card-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 transition-colors ${
                    activeId === link.id ? "text-accent-light" : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
