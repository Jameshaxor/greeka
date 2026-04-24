"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change using ref comparison
  if (prevPathname.current !== pathname) {
    prevPathname.current = pathname;
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }

  const navLinks = [
    { name: "The Vibe", href: "/vibe" },
    { name: "Menu", href: "/menu" },
    { name: "Visit", href: "/visit" }
  ];

  const getRouteName = (path: string) => {
    if (path.includes('menu')) return "Curated Menu";
    if (path.includes('vibe')) return "The Vibe";
    if (path.includes('visit')) return "Visit Greeka";
    return "";
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "py-6 bg-gradient-to-b from-background via-background/80 to-transparent" : "py-10"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative">
          
          {/* Subtle line indicator for scroll */}
          {scrolled && (
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-0 left-12 right-12 h-px bg-white/5 origin-left"
            />
          )}

          {pathname === "/" ? (
            <Link href="/" className="font-display text-2xl tracking-tight text-white select-none z-50 relative group">
              Greeka<span className="text-accent group-hover:opacity-100 opacity-60 transition-opacity">.</span>
            </Link>
          ) : (
            <Link href="/" className="font-sans text-sm md:text-base tracking-[0.1em] uppercase text-white/50 hover:text-white select-none z-50 relative flex items-center gap-4 transition-colors duration-500">
              <span className="group flex items-center gap-2">
                <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span> 
                <span>Back</span>
              </span>
              <span className="hidden md:inline-block w-px h-4 bg-white/20"></span>
              <span className="hidden md:inline-block font-display normal-case text-xl tracking-tight text-white/90">{getRouteName(pathname)}</span>
            </Link>
          )}

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest text-white/70 z-20">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`hover:text-white transition-colors duration-500 ${pathname === link.href ? 'text-white' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center gap-2 group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`h-px bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? 'w-8 rotate-45 translate-y-[9px]' : 'w-8 group-hover:w-6'}`}></span>
            <span className={`h-px bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? 'w-0 opacity-0' : 'w-6 group-hover:w-8'}`}></span>
            <span className={`h-px bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? 'w-8 -rotate-45 -translate-y-[9px]' : 'w-4 group-hover:w-8'}`}></span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center"
          >
            {/* Ambient glows behind menu */}
            <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="flex flex-col gap-8 text-center">
              <Link href="/" className="font-display text-5xl text-foreground/50 hover:text-foreground transition-colors duration-500">
                Home
              </Link>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={link.href} 
                    className={`font-display text-5xl transition-colors duration-500 ${pathname === link.href ? 'text-accent' : 'text-foreground hover:text-accent'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="absolute bottom-12 text-sm uppercase tracking-widest text-foreground/30 font-sans"
            >
              Ranchi&apos;s Premium Rooftop
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
