"use client";
import React from "react";
import { Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-32 pb-12 relative overflow-hidden">
      {/* Soft Top Gradient instead of rigid border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-20">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-start pr-12">
            <div className="flex items-center gap-3 mb-8">
              <Coffee className="w-6 h-6 text-accent" />
              <span className="font-display text-4xl tracking-tight text-foreground">
                Greeka
              </span>
            </div>
            <p className="font-sans text-muted font-light leading-relaxed max-w-sm text-lg">
              Rooftop Elegance. A Mediterranean sanctuary suspended above the city of Ranchi.
            </p>
          </div>

          {/* Info Col */}
          <div className="flex flex-col items-start font-sans font-light">
            <h4 className="text-accent text-xs tracking-[0.2em] uppercase mb-6 font-medium">Location</h4>
            <p className="text-foreground/80 leading-loose text-sm">
              4th & 5th Floor, Minu Heights, <br />
              Kanke Rd, Ranchi, <br />
              Jharkhand 834008
            </p>
            <p className="text-foreground mt-4 text-sm hover:text-accent transition-colors">+91 92632 20097</p>
          </div>

          {/* Hours Col */}
          <div className="flex flex-col items-start font-sans font-light">
            <h4 className="text-accent text-xs tracking-[0.2em] uppercase mb-6 font-medium">Hours</h4>
            <div className="text-sm">
              <p className="text-foreground/80 mb-1">Open Daily</p>
              <p className="text-muted">11:30 AM — 12:00 AM</p>
            </div>

            <div className="mt-12 flex gap-6">
              <a href="#" className="text-xs uppercase tracking-widest text-foreground hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="text-xs uppercase tracking-widest text-foreground hover:text-accent transition-colors">Directions</a>
            </div>
          </div>

        </div>
        
        {/* Deep massive logo at bottom */}
        <div className="pt-12 text-center border-t border-white/5 opacity-40 select-none pointer-events-none">
          <span className="font-display text-[12vw] leading-none tracking-tighter text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)"}}>
            GREEKA
          </span>
        </div>

        {/* Designer Credit */}
        <div className="mt-8 pb-4 flex items-center justify-center gap-3">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-accent/40" />
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/25 hover:text-accent transition-colors duration-700 cursor-pointer">
            Designed by <span className="text-accent/60 font-semibold">Manu Haxor</span>
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-accent/40" />
        </div>
      </div>
    </footer>
  );
}
