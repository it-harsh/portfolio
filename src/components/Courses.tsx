"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const courses = [
  { name: "AWS \u2013 ARC \u2013 Architecting on AWS", provider: "Trainocate", date: "May 2022" },
  { name: "Google Cloud Fundamentals: Core Infrastructure", provider: "Google Cloud Skills Boost", date: "May 2022" },
  { name: "Introduction to Quantum Computing", provider: "Qubit by Qubit (IBM)", date: "Oct 2020 \u2013 May 2021" },
  { name: "Advanced NLP with Python for Machine Learning", provider: "LinkedIn Learning", date: "Aug 2022" },
  { name: "Create a Superhero Name Generator with TensorFlow", provider: "Coursera", date: "Aug 2022" },
  { name: "Aerial Image Segmentation with PyTorch", provider: "Coursera", date: "Jul 2022" },
  { name: "Fine Tune BERT for Text Classification with TensorFlow", provider: "Coursera", date: "Jul 2022" },
  { name: "Tweet Emotion Recognition with TensorFlow", provider: "Coursera", date: "Jul 2022" },
  { name: "Basic Image Classification with TensorFlow", provider: "Coursera", date: "Jul 2022" },
  { name: "Crash Course on Python", provider: "Google \u2013 Coursera", date: "Aug 2020" },
  { name: "Image Classification with CNNs using Keras", provider: "Coursera", date: "May 2020" },
  { name: "Custom Prediction Routine on Google AI Platform", provider: "Coursera", date: "Apr 2020" },
];

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="relative py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-accent-light mb-3 tracking-wider uppercase">
            Certifications
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Courses &{" "}
            <span className="gradient-text">certifications</span>
          </h3>
        </motion.div>

        {/* Courses grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, i) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              whileHover={{ y: -5 }}
              className="group p-5 rounded-2xl border border-card-border bg-card-bg/50 backdrop-blur-sm glow-hover transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent-light shrink-0 mt-0.5">
                  <Award size={16} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground text-sm leading-snug mb-1.5 group-hover:text-accent-light transition-colors">
                    {course.name}
                  </h4>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-muted">{course.provider}</span>
                    <span className="text-xs text-muted/50">&middot;</span>
                    <span className="text-xs font-mono text-muted/70">{course.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
