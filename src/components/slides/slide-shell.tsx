import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SlideShell({
  children,
  bgImage,
  overlay = "linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.85) 100%)",
}: {
  children: ReactNode;
  bgImage?: string;
  overlay?: string;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      {bgImage && (
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className="absolute inset-0" style={{ background: overlay }} />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}

export function SlideHeader({ index, total, label }: { index: number; total: number; label: string }) {
  return (
    <div className="flex items-center justify-between px-16 py-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
      <div className="flex items-center gap-4">
        <span className="font-display font-black text-primary">DORITOS</span>
        <span className="text-border">×</span>
        <span className="font-display">F1 2026</span>
      </div>
      <div className="flex items-center gap-3 font-mono">
        <span className="text-primary">{String(index).padStart(2, "0")}</span>
        <span className="text-border">/</span>
        <span>{String(total).padStart(2, "0")}</span>
        <span className="ml-4 hidden md:inline">{label}</span>
      </div>
    </div>
  );
}
