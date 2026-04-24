"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    const duration = 1500; // 1.5 seconds
    const intervalTime = 15; // update every 15ms
    const totalSteps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step += 1;
      const progress = Math.min((step / totalSteps) * 100, 100);
      
      // Use an ease-out easing function for the counter so it slows down near 100
      const easeOutProgress = 1 - Math.pow(1 - progress / 100, 3);
      setCounter(Math.floor(easeOutProgress * 100));

      if (step >= totalSteps) {
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "auto";
        }, 300); // Tiny pause at 100% before sliding up
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-background flex flex-col items-center justify-between p-12 pointer-events-none"
        >
          {/* Top Logo */}
          <div className="font-display text-2xl tracking-tight text-white/50 w-full text-center">
            Greeka.
          </div>

          {/* Central Percentage */}
          <div className="font-display text-[20vw] md:text-[15rem] leading-none text-accent drop-shadow-2xl">
            {counter}%
          </div>

          {/* Bottom Wait Text */}
          <div className="font-sans text-xs tracking-[0.3em] uppercase text-white/30 w-full text-center animate-pulse">
            Curating Experience
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
