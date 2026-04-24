"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    
    checkViewport();
    window.addEventListener("resize", checkViewport);

    if (!isDesktop) return;

    const checkHover = (x: number, y: number) => {
      const el = document.elementFromPoint(x, y) as HTMLElement | null;
      if (!el) return;
      const isClickable = window.getComputedStyle(el).cursor === "pointer" || el.closest('a, button');
      setIsHovering(!!isClickable);
    };

    const updateMousePosition = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      setMousePosition({ x: e.clientX, y: e.clientY });
      checkHover(e.clientX, e.clientY);
    };

    const onScroll = () => {
      checkHover(mousePosRef.current.x, mousePosRef.current.y);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", checkViewport);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Outer trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 md:w-12 md:h-12 border border-accent rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - (isHovering ? 32 : 24),
          y: mousePosition.y - (isHovering ? 32 : 24),
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 1.5,
        }}
        style={{
           mixBlendMode: "screen",
        }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - (isHovering ? 6 : 6),
          y: mousePosition.y - (isHovering ? 6 : 6),
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
           mixBlendMode: "screen",
        }}
      />
    </>
  );
}
