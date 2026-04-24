"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    kicker: "01 / Tapas",
    title: "Mediterranean Shareables",
    desc: "Authentic, vibrant flavors crafted for the table. Every plate a journey.",
    img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1600&q=80",
  },
  {
    kicker: "02 / Roasters",
    title: "Artisan Coffee",
    desc: "Precision-brewed single origin beans capturing the warmth of Mediterranean mornings.",
    img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1600&q=80",
  },
  {
    kicker: "03 / Mixology",
    title: "Signature Libations",
    desc: "Curated rooftop cocktails. Deep ambers, crystalline ice, and the city lights below.",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80",
  },
];

export function MenuFeatures() {
  return (
    <section className="py-32 bg-background relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 text-center md:text-left flex flex-col md:flex-row justify-between items-end border-b border-white/5 pb-10"
        >
          <h2 className="font-display text-5xl md:text-7xl font-light text-foreground tracking-tight">
            Curated <br /> <span className="italic text-accent">Collections.</span>
          </h2>
          <p className="font-sans text-muted max-w-sm text-lg mt-6 md:mt-0 leading-relaxed font-light">
            An exploration of taste, texture, and Mediterranean tradition elevated for the modern palate.
          </p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`relative ${
                idx % 2 === 1 ? "md:mr-24" : "md:ml-24"
              } h-[60vh] md:h-[80vh] w-full md:w-[85%] rounded-3xl overflow-hidden group`}
            >
              {/* Image Background */}
              <div className="absolute inset-0 bg-background/20 z-10 transition-colors duration-700 group-hover:bg-transparent"></div>
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-full object-cover grayscale-[30%] transition-transform duration-[1.5s] group-hover:scale-105 group-hover:grayscale-0 ease-out"
              />
              
              {/* Glassmorphic Content Card */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="max-w-2xl transform transition-transform duration-700 group-hover:-translate-y-4">
                  <span className="font-sans text-xs text-accent tracking-widest uppercase block mb-4 font-medium">
                    {feature.kicker}
                  </span>
                  <h3 className="font-display text-4xl md:text-6xl text-foreground mb-4 drop-shadow-lg">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-white/80 leading-relaxed text-lg font-light">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
