"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Framer motion variants for staggering text
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Immersive Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 origin-top">
        <div className="absolute inset-0 bg-background/50 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30 z-20"></div>
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop" 
          alt="Greeka Ranchi Rooftop" 
          className="w-full h-[120%] object-cover object-center grayscale-[20%]"
        />
      </motion.div>

      {/* Glow Pass */}
      <div className="ambient-glow top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="ambient-glow-blue bottom-0 right-0 opacity-40 mix-blend-screen"></div>

      {/* Added pt-24 to clear navigation overlap */}
      <div className="container mx-auto px-6 max-w-7xl relative z-30 flex flex-col items-center pb-32 pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ opacity }}
          className="text-center"
        >
          <motion.div 
            variants={item} 
            className="mb-8 md:mb-6 flex items-center justify-center gap-4"
          >
            <div className="h-[1px] w-8 bg-accent/60"></div>
            <motion.span 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-accent font-medium"
              style={{ textShadow: "0px 0px 15px rgba(226,168,122,0.5)", willChange: "transform" }}
            >
              Elevated Experience
            </motion.span>
            <div className="h-[1px] w-8 bg-accent/60"></div>
          </motion.div>

          <h1 className="font-display font-medium text-[17vw] md:text-[10rem] text-foreground leading-[1] md:leading-[0.9] tracking-tighter mb-8 flex flex-col pointer-events-none drop-shadow-2xl">
            <span className="block p-4 -m-4">
              <motion.span variants={item} className="block">Rooftop</motion.span>
            </span>
            <span className="italic text-accent/90 block p-8 -m-8">
              <motion.span variants={item} className="block pr-8 -ml-8">Elegance.</motion.span>
            </span>
          </h1>

          <motion.div variants={item} className="mb-12">
            <p className="font-sans text-sm md:text-base tracking-[0.2em] uppercase text-foreground/80 font-light">
              A sanctuary of Mediterranean warmth suspended above the city.
            </p>
          </motion.div>
          
          <Link href="/menu">
            <motion.div 
              variants={item}
              className="inline-block relative group mb-12 md:mb-6"
            >
              <button className="relative border border-white/25 text-white font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-full shadow-[0_0_50px_15px_rgba(226,168,122,0.2)] group-hover:shadow-[0_0_60px_20px_rgba(226,168,122,0.4)] group-hover:bg-white group-hover:text-black group-hover:border-transparent transition-all duration-500">
                Discover Menu
              </button>
            </motion.div>
          </Link>

          <motion.div variants={item} className="flex items-center justify-center gap-2 text-foreground/80 font-sans text-xs z-20 relative">
            <div className="flex text-yellow-500 text-sm">★★★★★</div>
            <span className="font-light">4.8 from <span className="font-medium text-white border-b border-white/20">Google Reviews</span></span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - positioned absolutely at the very bottom of the viewport, well below content */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] tracking-widest text-foreground/30 uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-[1px] bg-gradient-to-b from-foreground/30 to-transparent"
        />
      </motion.div>

    </section>
  );
}
