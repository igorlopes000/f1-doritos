import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { SLIDES, TOTAL } from "@/components/slides/slides";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Doritos × F1 2026 — Smart Stacking via Market4U" },
      {
        name: "description",
        content: "Proposta de ativação Doritos × Formula 1 2025 — 27 ativações sincronizadas em 9 GPs via Market4U.",
      },
      { property: "og:title", content: "Doritos × F1 2026 — Smart Stacking" },
      { property: "og:description", content: "Proposta 1: Ativação Ano Completo. 36 ativaçõees em 12 corridas." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Montserrat:wght@700;800;900&display=swap",
      },
    ],
  }),
  component: Deck,
});

function Deck() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDir(next > i ? 1 : -1);
      setI(Math.max(0, Math.min(TOTAL - 1, next)));
    },
    [i],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") go(i + 1);
      if (e.key === "ArrowLeft") go(i - 1);
      if (e.key === "f" || e.key === "F") document.documentElement.requestFullscreen?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, go]);

  const Current = SLIDES[i];

  return (
    <div className="fixed inset-0 bg-black text-foreground">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={i}
            custom={dir}
            initial={{ opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Current />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-50 flex h-1 gap-1 px-2 pt-2">
        {Array.from({ length: TOTAL }).map((_, k) => (
          <div
            key={k}
            className={`h-0.5 flex-1 rounded-full transition-all ${k <= i ? "bg-primary" : "bg-white/15"}`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-2 backdrop-blur-md">
        <button
          onClick={() => go(i - 1)}
          disabled={i === 0}
          className="rounded-full p-2 text-foreground/70 transition hover:bg-primary hover:text-primary-foreground disabled:opacity-30"
          aria-label="Anterior"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="px-3 font-mono text-xs text-muted-foreground">
          <span className="text-primary">{String(i + 1).padStart(2, "0")}</span> / {String(TOTAL).padStart(2, "0")}
        </div>
        <button
          onClick={() => go(i + 1)}
          disabled={i === TOTAL - 1}
          className="rounded-full p-2 text-foreground/70 transition hover:bg-primary hover:text-primary-foreground disabled:opacity-30"
          aria-label="Próximo"
        >
          <ChevronRight size={18} />
        </button>
        <div className="mx-1 h-5 w-px bg-border" />
        <button
          onClick={() => document.documentElement.requestFullscreen?.()}
          className="rounded-full p-2 text-foreground/70 transition hover:bg-primary hover:text-primary-foreground"
          aria-label="Fullscreen"
        >
          <Maximize2 size={16} />
        </button>
      </div>
    </div>
  );
}
