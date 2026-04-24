"use client";
import React from "react";
import { motion } from "framer-motion";

export default function VisitPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-1/4 -left-1/4 w-[70vw] h-[70vw] bg-accent/5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h1 className="font-display text-5xl md:text-8xl text-foreground tracking-tighter mb-6">
            Find <span className="italic text-accent/90">Us.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-12"
          >
            <div>
              <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">Location</h2>
              <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed">
                4th & 5th Floor, Minu Heights,<br/>
                Kanke Rd, Ranchi,<br/>
                Jharkhand 834008
              </p>
            </div>

            <div>
              <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">Hours</h2>
              <ul className="flex flex-col gap-2 font-sans text-foreground/70 font-light">
                <li className="flex justify-between max-w-xs"><span>Mon - Thu</span> <span>12:00 PM - 11:00 PM</span></li>
                <li className="flex justify-between max-w-xs"><span>Fri - Sun</span> <span>12:00 PM - 12:30 AM</span></li>
              </ul>
            </div>

            <div>
              <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">Reservations</h2>
              <p className="font-sans text-foreground/70 font-light mb-2">
                We recommend booking in advance for sunset hours and weekends.
              </p>
              <a href="tel:+919876543210" className="font-display text-2xl hover:text-accent transition-colors duration-300">
                +91 98765 43210
              </a>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
             className="w-full h-[60vh] min-h-[400px] border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm p-2"
          >
            {/* Embedded Google Map using the exact place ID from the previous scrape */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.3394625291244!2d85.31828851167735!3d23.37688000300958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e172a9bad0c3%3A0xa120d63383101cd1!2sGreeka%20Ranchi!5e0!3m2!1sen!2sin!4v1714151234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.75rem', filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
