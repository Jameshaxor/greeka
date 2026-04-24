"use client";
import React from "react";
import { motion } from "framer-motion";

export function Problem() {
  const statement = "Imagine escaping the rush. Stepping into a space where deep Mediterranean blues blend with warm embers.".split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const wordAnim = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative py-48 bg-background overflow-hidden relative z-20">
      {/* Decorative Glows */}
      <div className="ambient-glow top-1/2 left-0 -translate-y-1/2 opacity-30"></div>
      <div className="ambient-glow-blue top-0 right-0 opacity-40 mix-blend-screen"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-20">
        <div className="text-center">
          <motion.h2 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="font-display font-medium text-4xl md:text-6xl lg:text-[5rem] leading-[1.15] tracking-tight text-foreground flex flex-wrap justify-center gap-x-4 gap-y-2"
          >
            {statement.map((word, i) => {
              const isItalicHighlight = ["blues", "blend", "with", "warm", "embers."].includes(word);
              return (
                <motion.span 
                  variants={wordAnim} 
                  key={i} 
                  className={isItalicHighlight ? "text-accent italic font-light pt-2 pb-2" : "pt-2 pb-2"}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.h2>
          
          <div className="mt-20 flex justify-center">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: 120 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-[1px] bg-gradient-to-b from-accent/50 to-transparent"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
