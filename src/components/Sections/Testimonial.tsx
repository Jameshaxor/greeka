"use client";
import React from "react";
import { motion } from "framer-motion";

export function Testimonial() {
  return (
    <section className="relative py-48 bg-surface overflow-hidden">
      <div className="ambient-glow top-0 right-0 translate-x-1/2 opacity-20"></div>

      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80" 
          alt="Restaurant Ambiance"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/90 to-background"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="w-12 h-[1px] bg-accent mb-12"></div>
          <p className="font-display italic text-4xl md:text-6xl leading-[1.2] text-foreground font-light md:px-12">
            &ldquo;The velvet contrast against cold marble... Greeka is a meticulously crafted oasis suspended above the cityscape.&rdquo;
          </p>
          <span className="font-sans text-xs tracking-[0.2em] text-muted uppercase mt-12 block">
            The Ambiance Note
          </span>
        </motion.div>
      </div>
    </section>
  );
}
