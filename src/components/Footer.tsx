"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-card-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted"
        >
          &copy; {new Date().getFullYear()} Harsh Patel. All rights reserved.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted flex items-center gap-1"
        >
          Built with <Heart size={14} className="text-red-500 inline" /> using
          Next.js & Tailwind
        </motion.p>
      </div>
    </footer>
  );
}
