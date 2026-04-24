import React from "react";

export function SectionLabel({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`flex items-center gap-4 mb-4 ${className}`}>
      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent">
        {children}
      </span>
      <div className="h-[1px] w-12 bg-border"></div>
    </div>
  );
}
