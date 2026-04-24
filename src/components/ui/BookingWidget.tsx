"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, X } from "lucide-react";

export function BookingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });

  // Handle Scroll Visibility
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Magnetic Pull Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distance = Math.sqrt(Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2));
      
      // If mouse is within 100px radius, pull the button towards it
      if (distance < 100) {
        setMagneticPosition({
          x: (clientX - centerX) * 0.3,
          y: (clientY - centerY) * 0.3
        });
      } else {
        setMagneticPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <AnimatePresence>
        {scrolled && !isOpen && (
          <motion.button
            ref={buttonRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              x: magneticPosition.x, 
              y: magneticPosition.y 
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 bg-accent text-background px-6 py-4 rounded-full font-sans shadow-[0_0_30px_rgba(226,168,122,0.3)] border border-accent/50 cursor-pointer"
          >
            <CalendarDays className="w-5 h-5 pointer-events-none" />
            <span className="text-xs uppercase tracking-widest font-semibold pointer-events-none">Book a Table</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/60 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-surface border border-border w-full max-w-lg rounded-3xl p-8 relative overflow-hidden"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-muted hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="font-display text-4xl text-foreground mb-2">Reserve your spot.</h3>
              <p className="font-sans text-muted font-light mb-8">Secure your table at the rooftop.</p>
              
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full bg-background border border-border rounded-xl px-6 py-4 text-sm font-sans focus:outline-none focus:border-accent text-white" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" className="w-full bg-background border border-border rounded-xl px-6 py-4 text-sm font-sans focus:outline-none focus:border-accent text-muted" />
                  <select className="w-full bg-background border border-border rounded-xl px-6 py-4 text-sm font-sans focus:outline-none focus:border-accent text-muted">
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
                <button 
                  onClick={() => {
                    alert("Reservation sent to Greeka Ranchi!");
                    setIsOpen(false);
                  }}
                  className="w-full bg-accent text-background rounded-xl px-6 py-4 font-sans text-sm tracking-widest uppercase font-semibold hover:bg-white transition-colors mt-4 cursor-pointer"
                >
                  Confirm Reservation
                </button>
                <p className="text-center font-sans text-[10px] text-muted tracking-wide mt-4 uppercase">No credit card required. Cancel anytime.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
