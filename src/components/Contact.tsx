"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "it.harsh2197@gmail.com",
    href: "mailto:it.harsh2197@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99049 02671",
    href: "tel:+919904902671",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
  },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/it-harsh" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/it-harsh/" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">
            Contact
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s work{" "}
            <span className="gradient-text">together</span>
          </h3>
          <p className="text-muted max-w-lg mx-auto">
            Have a project in mind or looking for a backend developer?
            I&apos;m always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Info cards */}
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-2xl border border-card-border bg-card-bg/50 backdrop-blur-sm glow-hover transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-accent/10 text-accent-light group-hover:bg-accent/20 transition-colors">
                  <info.icon size={22} />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">
                    {info.label}
                  </p>
                  <p className="text-foreground font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="pt-4"
            >
              <p className="text-sm text-muted mb-3">Find me on</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl border border-card-border bg-card-bg/50 text-muted hover:text-foreground hover:border-accent-light transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 p-6 rounded-2xl border border-card-border bg-card-bg/50 backdrop-blur-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="text-sm text-muted block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-background border border-card-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent-light transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-background border border-card-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent-light transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-muted block mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-background border border-card-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent-light transition-colors resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-xl font-medium transition-all duration-300 glow-hover"
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
