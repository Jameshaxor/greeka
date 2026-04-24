"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop", // Coffee aesthetic
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2574&auto=format&fit=crop", // Cocktail
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop", // Food
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2670&auto=format&fit=crop", // Ambience
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop", // Restaurant interior
];

export default function VibePage() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 md:w-2/3"
        >
          <h1 className="font-display text-5xl md:text-8xl text-foreground tracking-tighter mb-6">
            The <span className="italic text-accent/90">Vibe.</span>
          </h1>
          <p className="font-sans text-foreground/60 text-lg md:text-xl font-light leading-relaxed">
            More than just a cafe. We are a sanctuary elevated above the city noise. 
            A curation of warmth, conversation, and Mediterranean ease.
          </p>
        </motion.div>

        {/* Masonry-style gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <motion.div style={{ y: y1 }} className="flex flex-col gap-8 md:gap-16">
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden group">
              <Image src={images[0]} alt="Greeka Coffee" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden group">
              <Image src={images[2]} alt="Greeka Food" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden group">
              <Image src={images[4]} alt="Greeka Interior" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="flex flex-col gap-8 md:gap-16 md:mt-32">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden group">
              <Image src={images[1]} alt="Greeka Cocktails" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden group">
              <Image src={images[3]} alt="Greeka Ambience" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
