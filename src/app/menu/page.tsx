"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const menuData = [
  {
    category: "Tapas & Mezze",
    items: [
      { name: "Hummus Beiruti", description: "Silky chickpea purée, roasted garlic, olive oil, fresh pita", price: "₹450" },
      { name: "Muhammara Walnut Dip", description: "Roasted red peppers, walnuts, pomegranate molasses", price: "₹495" },
      { name: "Truffle Feta Fries", description: "Hand-cut fries, truffle essence, crumbled feta cheese", price: "₹385" },
      { name: "Smoked Aubergine Mutabal", description: "Charred eggplant, tahini, lemon, pomegranate", price: "₹420" },
    ]
  },
  {
    category: "Wood-Fired Neapolitan Pizzas",
    items: [
      { name: "Classic Margherita", description: "San Marzano tomatoes, fresh mozzarella, basil", price: "₹650" },
      { name: "Truffle Mushroom", description: "Wild mushrooms, truffle oil, parmesan cream", price: "₹850" },
      { name: "Spicy Diavola", description: "Spicy pepperoni, jalapeños, hot honey drizzle", price: "₹900" },
      { name: "Burrata & Pesto", description: "Fresh burrata, basil pesto, cherry tomatoes", price: "₹950" },
    ]
  },
  {
    category: "Signature Libations",
    items: [
      { name: "Mediterranean Sunset", description: "Aperol, prosecco, blood orange, rosemary", price: "₹750" },
      { name: "Smoked Fig Old Fashioned", description: "Bourbon, fig syrup, aromatic bitters, smoke", price: "₹850" },
      { name: "Ranchi Breeze", description: "Gin, cucumber, elderflower, tonic", price: "₹695" },
      { name: "Espresso Martini", description: "Vodka, fresh espresso, coffee liqueur", price: "₹750" },
    ]
  }
];

export default function MenuPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden pointer-events-auto">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h1 className="font-display text-5xl md:text-8xl text-foreground tracking-tighter mb-4">
            Curated <span className="italic text-accent/90">Selections.</span>
          </h1>
          <p className="font-sans text-foreground/60 tracking-widest uppercase text-xs md:text-sm max-w-xl mx-auto">
            A fusion of Mediterranean techniques and local elements, designed to be experienced on the rooftop.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-24"
        >
          {menuData.map((section, idx) => (
            <motion.section key={idx} variants={itemVariants} className="flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <h2 className="font-display text-3xl md:text-4xl text-accent">{section.category}</h2>
                <div className="h-px bg-white/10 flex-grow" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors duration-500">{item.name}</h3>
                      <span className="font-display text-lg text-foreground/70">{item.price}</span>
                    </div>
                    <p className="font-sans text-sm text-foreground/50 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
