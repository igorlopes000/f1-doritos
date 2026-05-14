import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  Flag,
  Zap,
  Target,
  Layers,
  Activity,
  BarChart3,
  Trophy,
  Sparkles,
  Radio,
  Gauge,
} from "lucide-react";
import { SlideShell, SlideHeader } from "./slide-shell";
import f1Hero from "@/assets/f1-hero.jpg";
import f1Living from "@/assets/f1-livingroom.jpg";
import speedAbstract from "@/assets/speed-abstract.jpg";
import f1Tires from "@/assets/f1-tires.jpg";
import checkered from "@/assets/checkered.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
});

export const TOTAL = 15;

/* ---------- 01 CAPA ---------- */
export function Slide01() {
  return (
    <SlideShell
      bgImage={f1Hero}
      overlay="linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.95) 100%)"
    >
      <SlideHeader index={1} total={TOTAL} label="CAPA" />
      <div className="absolute inset-x-0 bottom-0 px-16 pb-20">
        <motion.div {...stagger(0)} className="mb-6 flex items-center gap-3">
          <span className="h-px w-16 bg-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">SMART STACKING · MARKET4U</span>
        </motion.div>
        <motion.h1 {...stagger(1)} className="max-w-5xl font-display text-5xl font-black leading-[0.95] md:text-6xl">
          DORITOS <span className="text-primary text-glow">×</span> F1 2026
        </motion.h1>
        <motion.p
          {...stagger(2)}
          className="mt-8 max-w-2xl text-xl font-light text-muted-foreground md:text-2xl subtitle"
        >
          Pise fundo na adrenalina, Velocidade em cada bite
        </motion.p>
        <motion.div
          {...stagger(3)}
          className="mt-12 flex items-center gap-8 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <div>
            <div className="text-primary">12</div>
            <div>CORRIDAS</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <div className="text-primary">36</div>
            <div>ATIVAÇÕES</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <div className="text-primary">2.6K</div>
            <div>UNIDADES</div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ---------- 02 RESUMO ---------- */
export function Slide02() {
  const items = [
    {
      label: "OBJETIVO",
      value: "Consolidar Doritos como escolha automática em 12 GPs, crocância que acompanha cada curva.",
    },
    { label: "ESCOPO", value: "Julho a Novembro de 2026, temperatura máxima de sabor em 100% das corridas pós-Copa." },
    {
      label: "CRISTALIZAR CONEXÃO",
      value: "Doritos e F1 para o consumidor, experiência que transforma espectadores em fãs engajados.",
    },
  ];
  return (
    <SlideShell>
      <SlideHeader index={2} total={TOTAL} label="RESUMO EXECUTIVO" />
      <div className="grid h-[calc(100%-7rem)] grid-cols-12 gap-12 px-16 pb-16">
        <div className="col-span-5 flex flex-col justify-center">
          <motion.span {...stagger(0)} className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
            02 · BRIEFING
          </motion.span>
          <motion.h2 {...stagger(1)} className="mt-6 font-display text-5xl font-black leading-none">
            Resumo
            <br />
            Executivo
          </motion.h2>
          <motion.div {...stagger(2)} className="mt-8 h-1 w-24 bg-primary" />
        </div>
        <div className="col-span-7 flex flex-col justify-center gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              {...stagger(i + 1)}
              className="border-l-2 border-primary bg-card/40 p-6 backdrop-blur-sm"
            >
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{it.label}</div>
              <div className="mt-3 text-2xl font-light leading-snug">{it.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------- 03 CONTEXTO ---------- */
export function Slide03() {
  return (
    <SlideShell
      bgImage={f1Living}
      overlay="linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 100%)"
    >
      <SlideHeader index={3} total={TOTAL} label="CONTEXTO" />
      <div className="flex h-[calc(100%-7rem)] flex-col justify-center px-16 pb-16">
        <motion.span {...stagger(0)} className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
          03 · CONTEXTO ESTRATÉGICO
        </motion.span>
        <motion.h2 {...stagger(1)} className="mt-6 max-w-3xl font-display text-5xl font-black leading-[0.95]">
          Onde a <span className="text-primary">Experiência</span> Acontece
        </motion.h2>
        <div className="mt-12 grid max-w-4xl grid-cols-3 gap-8">
          {[
            {
              k: "FOCO",
              v: "Dominar o território real de decisão quando a adrenalina dispara, galera que entende F1.",
            },
            { k: "DADO", v: "12 corridas ditam o ritmo, Pise fundo desde o primeiro bite." },
            { k: "VEREDITO", v: "Quem ocupa o momento de consumo, domina a preferência. Doritos tá aqui com você." },
          ].map((x, i) => (
            <motion.div key={x.k} {...stagger(i + 2)} className="border-t border-primary/40 pt-4">
              <div className="text-xs font-bold tracking-[0.3em] text-primary">{x.k}</div>
              <div className="mt-3 text-base font-light leading-relaxed text-foreground/90">{x.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------- 04 TESE CENTRAL ---------- */
export function Slide04() {
  return (
    <SlideShell bgImage={speedAbstract} overlay="linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%)">
      <SlideHeader index={4} total={TOTAL} label="TESE" />
      <div className="flex h-[calc(100%-7rem)] flex-col items-center justify-center px-16 pb-16 text-center">
        <motion.span {...stagger(0)} className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
          CAPÍTULO 01
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 font-display text-[10rem] font-black leading-none text-glow"
        >
          TESE
          <br />
          <span className="text-primary">CENTRAL</span>
        </motion.h2>
        <motion.div
          {...stagger(3)}
          className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-muted-foreground"
        >
          <span className="h-px w-12 bg-primary" />
          Sincronia absoluta
          <span className="h-px w-12 bg-primary" />
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ---------- 05 PRESENÇA VS MÍDIA ---------- */
export function Slide05() {
  return (
    <SlideShell>
      <SlideHeader index={5} total={TOTAL} label="DIFERENÇA ESTRATÉGICA" />
      <div className="flex h-[calc(100%-7rem)] flex-col px-16 pb-16">
        <motion.h2 {...stagger(0)} className="font-display text-4xl font-black">
          A Diferença Estratégica
        </motion.h2>
        <div className="mt-12 grid flex-1 grid-cols-2 gap-8">
          <motion.div
            {...stagger(1)}
            className="flex flex-col justify-between rounded-lg border border-destructive/40 bg-destructive/5 p-10"
          >
            <div>
              <div className="flex items-center gap-3 text-destructive">
                <X size={32} strokeWidth={3} />
                <span className="text-xs font-bold uppercase tracking-[0.3em]">MODELO COMMODITY</span>
              </div>
              <div className="mt-6 font-display text-4xl font-black">
                Mídia
                <br />
                Tradicional
              </div>
              <p className="mt-6 text-lg font-light text-muted-foreground">
                Interrompe fora do contexto. Atenção passiva. A associação se dissolve no scroll.
              </p>
            </div>
            <div className="mt-8 text-xs uppercase tracking-[0.3em] text-destructive/80">Interrupção</div>
          </motion.div>
          <motion.div
            {...stagger(2)}
            className="flex flex-col justify-between rounded-lg border-2 border-primary bg-primary/5 p-10 pulse-glow"
          >
            <div>
              <div className="flex items-center gap-3 text-primary">
                <Check size={32} strokeWidth={3} />
                <span className="text-xs font-bold uppercase tracking-[0.3em]">MODELO CONTEXTUAL</span>
              </div>
              <div className="mt-6 font-display text-4xl font-black">
                Presença
                <br />
                Contextual
              </div>
              <ul className="mt-6 list-disc pl-5 text-lg font-light text-foreground/90">
                <li>Intercepta no momento exato da decisão</li>
                <li>Atenção ativa</li>
                <li>Estrutura-se na repetição contextual</li>
              </ul>
            </div>
            <div className="mt-8 text-xs uppercase tracking-[0.3em] text-primary">Sincronia</div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------- 06 CONCEITO 1 ---------- */
export function Slide06() {
  return (
    <SlideShell
      bgImage={f1Tires}
      overlay="linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.3) 100%)"
    >
      <SlideHeader index={6} total={TOTAL} label="CONCEITO 01" />
      <div className="flex h-[calc(100%-7rem)] flex-col justify-center px-16 pb-16">
        <motion.div {...stagger(0)} className="flex items-center gap-4 text-primary">
          <Zap size={20} />
          <span className="text-xs font-bold uppercase tracking-[0.4em]">CONCEITO 01 · OFICIAL F1 2026</span>
        </motion.div>
        <motion.h2 {...stagger(1)} className="mt-6 max-w-3xl font-display text-6xl font-black leading-[0.9]">
          Reforço de
          <br />
          <span className="text-primary text-glow">Presença</span>
        </motion.h2>
        <motion.p {...stagger(2)} className="mt-10 max-w-2xl text-2xl font-light leading-snug text-foreground/90">
          A marca conecta a presença oficial à percepção real, intensidade que não freia.
        </motion.p>
      </div>
    </SlideShell>
  );
}

/* ---------- 07 CONCEITO 2 ---------- */
export function Slide07() {
  return (
    <SlideShell
      bgImage={speedAbstract}
      overlay="linear-gradient(270deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.3) 100%)"
    >
      <SlideHeader index={7} total={TOTAL} label="CONCEITO 02" />
      <div className="flex h-[calc(100%-7rem)] flex-col items-end justify-center px-16 pb-16 text-right">
        <motion.div {...stagger(0)} className="flex items-center gap-4 text-primary">
          <span className="text-xs font-bold uppercase tracking-[0.4em]">CONCEITO 02 · CONSIDERAÇÃO</span>
          <Target size={20} />
        </motion.div>
        <motion.h2 {...stagger(1)} className="mt-6 max-w-3xl font-display text-6xl font-black leading-[0.9]">
          Impacto
          <br />
          <span className="text-primary text-glow">Transcendente</span>
        </motion.h2>
        <motion.p {...stagger(2)} className="mt-10 max-w-2xl text-2xl font-light leading-snug text-foreground/90">
          A elevação de consideração gera transbordamento da preferência para a compra de proximidade e canais diretos.
        </motion.p>
      </div>
    </SlideShell>
  );
}

/* ---------- 08 CONCEITO 3 ---------- */
export function Slide08() {
  const dims = [
    { k: "01", t: "Gatilho Cultural" },
    { k: "02", t: "Consumo Real" },
    { k: "03", t: "Recorrência Diária" },
  ];
  return (
    <SlideShell
      bgImage={speedAbstract}
      overlay="linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.95) 100%)"
    >
      <SlideHeader index={8} total={TOTAL} label="CONCEITO 03" />
      <div className="grid h-[calc(100%-7rem)] grid-cols-12 gap-8 px-16 pb-16">
        {/* LEFT: copy */}
        <div className="col-span-7 flex flex-col justify-center">
          <motion.div {...stagger(0)} className="flex items-center gap-4 text-primary">
            <Layers size={20} />
            <span className="text-xs font-bold uppercase tracking-[0.4em]">CONCEITO 03 · ECOSSISTEMA</span>
          </motion.div>
          <motion.h2 {...stagger(1)} className="mt-6 font-display text-6xl font-black leading-[0.9]">
            Smart Stacking <span className="text-primary text-glow">F1</span>
          </motion.h2>
          <motion.p {...stagger(2)} className="mt-8 max-w-xl text-xl font-light leading-snug text-foreground/90">
            Sobreposição de gatilho cultural e consumo real. A comunicação constante ao longo do período estrutura o
            hábito automático.
          </motion.p>
          <motion.div {...stagger(3)} className="mt-8 flex flex-col gap-2">
            {dims.map((d) => (
              <div key={d.k} className="flex items-center gap-3 text-sm">
                <span className="font-mono text-xs text-primary">{d.k}</span>
                <span className="font-display font-bold">{d.t}</span>
              </div>
            ))}
          </motion.div>
          <motion.div {...stagger(6)} className="mt-10 text-xs italic uppercase tracking-[0.3em] text-muted-foreground">
            O consumidor não pensa, reage.
          </motion.div>
        </div>

        {/* RIGHT: Venn diagram */}
        <div className="col-span-5 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[460px] w-[460px]"
          >
            {/* circle 1 - top */}
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full border-2 border-primary bg-primary/15 mix-blend-screen" />
            {/* circle 2 - bottom-left */}
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full border-2 border-primary bg-primary/15 mix-blend-screen" />
            {/* circle 3 - bottom-right */}
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full border-2 border-primary bg-primary/15 mix-blend-screen" />

            {/* labels outside */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap text-center">
              <div className="font-mono text-[10px] text-primary">01</div>
              <div className="font-display text-sm font-black">Gatilho Cultural</div>
            </div>
            <div className="absolute -bottom-2 left-0 -translate-x-4 translate-y-full text-center">
              <div className="font-mono text-[10px] text-primary">02</div>
              <div className="font-display text-sm font-black">Consumo Real</div>
            </div>
            <div className="absolute -bottom-2 right-0 translate-x-4 translate-y-full text-center">
              <div className="font-mono text-[10px] text-primary">03</div>
              <div className="font-display text-sm font-black">Recorrência Diária</div>
            </div>

            {/* center: STACKING */}
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
              <div className="rounded-full bg-primary px-5 py-2 font-display text-base font-black text-primary-foreground shadow-[0_0_40px_rgba(255,165,0,0.6)]">
                STACKING
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Sobreposição</div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------- 09 ARQUITETURA OPERACIONAL ---------- */
export function Slide09() {
  const sessions = [
    { k: "HOJE TEM...", t: "Dia do Evento", c: "Banner Home / E-MKT (1x GP)" },
    { k: "JÁ VAI COMEÇAR...", t: "T-120m", c: "Banner / Pop-Up" },
    { k: "SINAL VERDE!", t: "Sinal Verde · T0", c: "Push / Banner/ Pop-Up" },
  ];
  const races = [
    { code: "HUN", flag: "🇭🇺", date: "24-26 JUL" },
    { code: "NED", flag: "🇳🇱", date: "21-23 AGO" },
    { code: "ITA", flag: "🇮🇹", date: "04-06 SET" },
    { code: "ESP", flag: "🇪🇸", date: "11-13 SET" },
    { code: "AZE", flag: "🇦🇿", date: "24-26 SET" },
    { code: "SGP", flag: "🇸🇬", date: "09-11 OUT" },
    { code: "USA", flag: "🇺🇸", date: "23-25 OUT" },
    { code: "MEX", flag: "🇲🇽", date: "30 OUT-01 NOV" },
    { code: "BRA", flag: "🇧🇷", date: "06-08 NOV" },
    { code: "LVG", flag: "🇺🇸", date: "19-22 NOV" },
    { code: "QAT", flag: "🇶🇦", date: "27-29 NOV" },
    { code: "ABU", flag: "🇦🇪", date: "04-06 DEZ" },
  ];
  return (
    <SlideShell>
      <SlideHeader index={9} total={TOTAL} label="ARQUITETURA OPERACIONAL" />
      <div className="flex h-[calc(100%-7rem)] flex-col px-16 pb-12">
        <motion.h2 {...stagger(0)} className="font-display text-4xl font-black">
          Ciclo de Ativação Sincronizada
        </motion.h2>
        <motion.p {...stagger(1)} className="mt-2 text-sm text-muted-foreground">
          3 ativações por sessão. Criativos distintos por gatilho. O ciclo se repete. A intensidade escala.
        </motion.p>

        <div className="mt-8 flex-1">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary">MICRO · FIM DE SEMANA</div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {sessions.map((s, i) => (
              <motion.div
                key={s.k}
                {...stagger(i + 2)}
                className="relative rounded border border-primary/30 bg-card/60 p-5"
              >
                <div className="absolute -top-2 left-4 bg-background px-2 font-mono text-[10px] text-primary">
                  PULSO {i + 1}
                </div>
                <div className="font-display text-xl font-black text-primary">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.t}</div>
                <div className="mt-3 text-sm">{s.c}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            MACRO · 12 GPs · JUL → DEZ
          </div>
          <motion.div {...stagger(6)} className="mt-4 grid grid-cols-12 gap-2">
            {races.map((r) => {
              const isBR = r.code === "BRA";
              return (
                <div key={r.code} className="flex flex-col items-center">
                  <div
                    className={`flex h-20 w-full flex-col items-center justify-center gap-1 rounded ${isBR ? "bg-primary pulse-glow" : "bg-card border border-primary/30"} px-1`}
                  >
                    <div className="text-2xl leading-none">{r.flag}</div>
                    <div
                      className={`font-mono text-[10px] font-bold ${isBR ? "text-primary-foreground" : "text-foreground"}`}
                    >
                      {r.code}
                    </div>
                  </div>
                  <div
                    className={`mt-1 font-mono text-[9px] ${isBR ? "font-black text-primary" : "text-muted-foreground"}`}
                  >
                    {r.date}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------- 10 DIFERENCIAL ESTRUTURAL ---------- */
export function Slide10() {
  const rows = [
    { sys: "Mídia", g: true, c: false, r: false, win: false },
    { sys: "Varejo", g: false, c: true, r: false, win: false },
    { sys: "CRM", g: false, c: false, r: true, win: false },
    { sys: "Market4U", g: true, c: true, r: true, win: true },
  ];
  const cell = (v: boolean) =>
    v ? (
      <Check className="mx-auto text-primary" size={22} strokeWidth={3} />
    ) : (
      <X className="mx-auto text-muted-foreground/50" size={22} />
    );
  return (
    <SlideShell>
      <SlideHeader index={10} total={TOTAL} label="DIFERENCIAL" />
      <div className="flex h-[calc(100%-7rem)] flex-col px-16 pb-12">
        <motion.div {...stagger(0)} className="flex items-baseline justify-between">
          <h2 className="font-display text-4xl font-black">Imune à Replicação</h2>
          <div className="font-mono text-sm text-primary">
            12 × 3 = <span className="text-3xl font-black">36</span> ATIVAÇÕES
          </div>
        </motion.div>
        <motion.div {...stagger(1)} className="mt-10 overflow-hidden rounded-lg border border-border">
          <div className="grid grid-cols-5 bg-card/60 px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <div>Sistema</div>
            <div className="text-center">Gatilho</div>
            <div className="text-center">Consumo</div>
            <div className="text-center">Recorrência</div>
            <div className="text-center">Resultado</div>
          </div>
          {rows.map((r, i) => (
            <motion.div
              key={r.sys}
              {...stagger(i + 2)}
              className={`grid grid-cols-5 items-center px-6 py-6 ${r.win ? "bg-primary/10 border-l-4 border-primary" : "border-t border-border"}`}
            >
              <div className={`font-display text-2xl font-black ${r.win ? "text-primary" : ""}`}>{r.sys}</div>
              <div>{cell(r.g)}</div>
              <div>{cell(r.c)}</div>
              <div>{cell(r.r)}</div>
              <div className="text-center text-xs font-bold uppercase tracking-[0.2em]">
                {r.win ? (
                  <span className="text-primary">VENCE</span>
                ) : (
                  <span className="text-muted-foreground">PARCIAL</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p {...stagger(6)} className="mt-8 text-lg font-light text-muted-foreground">
          Market4U opera os três simultaneamente, em escala nacional, sincronizado ao segundo.
        </motion.p>
      </div>
    </SlideShell>
  );
}

/* ---------- 11 REFORÇO CONCEITUAL ---------- */
export function Slide11() {
  return (
    <SlideShell bgImage={speedAbstract} overlay="linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 100%)">
      <SlideHeader index={11} total={TOTAL} label="REFORÇO CONCEITUAL" />
      <div className="flex h-[calc(100%-7rem)] flex-col justify-center px-16 pb-16">
        <motion.div {...stagger(0)} className="flex items-center gap-4 text-primary">
          <Radio size={20} />
          <span className="text-xs font-bold uppercase tracking-[0.4em]">PRESENÇA CONTÍNUA · ATIVO</span>
        </motion.div>
        <motion.h2 {...stagger(1)} className="mt-6 max-w-4xl font-display text-5xl font-black leading-[0.95]">
          Presença Contínua
          <br />
          vira <span className="text-primary text-glow">Ativo</span>.
        </motion.h2>
        <motion.p {...stagger(2)} className="mt-10 max-w-3xl text-2xl font-light leading-snug text-foreground/90">
          Market4U opera os 3 pilares simultaneamente. Inteligência comportamental sobre quando, como e por que o
          consumidor escolhe Doritos em momentos culturalmente carregados.
        </motion.p>
      </div>
    </SlideShell>
  );
}

/* ---------- 12 DADOS & INTELIGÊNCIA ---------- */
export function Slide12() {
  const metrics = [
    { k: "CTR", v: "Relevância Contextual", icon: Activity },
    { k: "GMV", v: "Faturamento Total", icon: BarChart3 },
    { k: "MARKET SHARE", v: "Participação na Categoria", icon: Trophy },
    { k: "USUÁRIOS ÚNICOS", v: "Alcance Real de Compradores", icon: Target },
  ];
  return (
    <SlideShell>
      <SlideHeader index={12} total={TOTAL} label="MENSURAÇÃO" />
      <div className="flex h-[calc(100%-7rem)] flex-col px-16 pb-16">
        <motion.h2 {...stagger(0)} className="font-display text-4xl font-black">
          Mensuração de Resultados
        </motion.h2>
        <motion.p {...stagger(1)} className="mt-3 max-w-2xl text-base text-muted-foreground">
          Indicadores de Sucesso
        </motion.p>

        <div className="mt-12 grid flex-1 grid-cols-4 gap-6">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.k}
                {...stagger(i + 2)}
                className="flex flex-col justify-between rounded-lg border border-primary/30 bg-card/40 p-6 backdrop-blur-sm"
              >
                <Icon className="text-primary" size={32} />
                <div>
                  <div className="font-display text-3xl font-black text-primary">{m.k}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{m.v}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          {...stagger(6)}
          className="mt-10 flex items-center gap-4 rounded border-l-2 border-primary bg-card/40 p-5"
        >
          <Gauge className="text-primary" size={28} />
          <div className="text-sm text-foreground/80">Leitura contínua de performance ao longo dos 12 GPs — vereditos por corrida e consolidado de temporada.</div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ---------- 13 MÓDULO COMERCIAL ---------- */
export function Slide13() {
  const cards = [
    {
      tag: "MANDATÓRIO",
      title: "CORE",
      price: "R$ 170k",
      items: [
        "E-MKT · 10% (R$ 17k) — 12 disparos/redação",
        "Banner · 35% (R$ 59,5k) — 108 criativos (3 momentos × 3 dias × 12 GPs)",
        "Pop-up · 55% (R$ 93,5k) — 72 criativos (2 momentos × 3 dias × 12 GPs)",
      ],
      featured: true,
    },
    {
      tag: "OPCIONAL",
      title: "GP Brasil · Intensidade Máxima",
      price: "+ R$ 80k",
      items: [
        "Expansão para 6 mídias",
        "Densidade máxima de ativações",
        "Intensificação dedicada ao GP do Brasil",
      ],
    },
  ];
  return (
    <SlideShell>
      <SlideHeader index={13} total={TOTAL} label="INVESTIMENTO" />
      <div className="flex h-[calc(100%-7rem)] flex-col px-16 pb-16">
        <motion.h2 {...stagger(0)} className="font-display text-4xl font-black">
          Estrutura de Investimento
        </motion.h2>
        <div className="mt-12 grid flex-1 grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              {...stagger(i + 1)}
              className={`flex flex-col rounded-lg p-8 ${c.featured ? "border-2 border-primary bg-primary/5 pulse-glow" : "border border-border bg-card/40"}`}
            >
              <div
                className={`text-xs font-bold uppercase tracking-[0.3em] ${c.featured ? "text-primary" : "text-muted-foreground"}`}
              >
                {c.tag}
              </div>
              <div className="mt-4 font-display text-3xl font-black">{c.title}</div>
              <div className={`mt-6 font-display text-5xl font-black ${c.featured ? "text-primary text-glow" : ""}`}>
                {c.price}
              </div>
              <ul className="mt-8 space-y-3 text-sm">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <Check size={16} className="mt-1 shrink-0 text-primary" />
                    <span className="text-foreground/80">{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------- 14 OBJETIVO FINAL ---------- */
export function Slide14() {
  return (
    <SlideShell
      bgImage={f1Hero}
      overlay="linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.95) 100%)"
    >
      <SlideHeader index={14} total={TOTAL} label="OBJETIVO" />
      <div className="flex h-[calc(100%-7rem)] flex-col items-center justify-center px-16 pb-16 text-center">
        <motion.span {...stagger(0)} className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
          CAPÍTULO FINAL · CONSOLIDAÇÃO
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-5xl font-display text-6xl font-black leading-[0.95]"
        >
          Doritos é a <span className="text-primary text-glow">escolha automática</span>.
        </motion.h2>
        <motion.p {...stagger(3)} className="mt-12 max-w-2xl text-xl font-light text-foreground/80">
          Sinal verde para o sabor. Quando a adrenalina dispara, Doritos tá aqui com você, crocante desde o primeiro
          bite.
        </motion.p>
      </div>
    </SlideShell>
  );
}

/* ---------- 15 FECHAMENTO ---------- */
export function Slide15() {
  return (
    <SlideShell
      bgImage={checkered}
      overlay="linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.95) 100%)"
    >
      <SlideHeader index={15} total={TOTAL} label="FECHAMENTO" />
      <div className="flex h-[calc(100%-7rem)] flex-col justify-end px-16 pb-20">
        <motion.div {...stagger(0)} className="flex items-center gap-3">
          <Flag className="text-primary" size={28} />
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary"></span>
        </motion.div>
        <motion.h2 {...stagger(1)} className="mt-6 max-w-5xl font-display text-6xl font-black leading-[0.9]">
          Em todas as corridas,<span className="text-primary text-glow"> Doritos é Pole Position</span>
        </motion.h2>
      </div>
    </SlideShell>
  );
}

export const SLIDES = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  SlideGatilhos,
  Slide09,
  SlideGPBrasil,
  Slide12,
  SlideCaseCarnaval,
  Slide13,
  Slide15,
];

/* ---------- GP BRASIL · DENSIDADE MÁXIMA ---------- */
export function SlideGPBrasil() {
  const bands = [
    {
      label: "PREPARANDO OS PILOTOS",
      meta: "2 SEMANAS ANTES",
      tag: "VERMELHO · TENSÃO",
      desc: "Banners / Pop-Up / E-MKT",
      gradient: "linear-gradient(90deg, hsl(0 85% 45%) 0%, hsl(0 70% 22%) 100%)",
      border: "border-red-500/60",
      text: "text-red-200",
    },
    {
      label: "AQUECENDO OS MOTORES",
      meta: "1 SEMANA ANTES",
      tag: "AMARELO · COMPRESSÃO",
      desc: "Banners / Pop-Up / E-MKT",
      gradient: "linear-gradient(90deg, hsl(48 95% 50%) 0%, hsl(38 80% 25%) 100%)",
      border: "border-yellow-500/60",
      text: "text-yellow-100",
    },
    {
      label: "FOI DADA A LARGADA",
      meta: "SEMANA DO GP · SEG A QUI",
      tag: "VERDE · PICO",
      desc: "Banners / Pop-Up / E-MKT",
      gradient: "linear-gradient(90deg, hsl(140 70% 40%) 0%, hsl(140 60% 18%) 100%)",
      border: "border-green-500/60",
      text: "text-green-100",
    },
  ];
  return (
    <SlideShell>
      <SlideHeader index={10} total={TOTAL} label="DENSIDADE MÁXIMA · GP BRASIL" />
      <div className="flex h-[calc(100%-7rem)] flex-col px-16 pb-16">
        <motion.div {...stagger(0)} className="flex items-center gap-3 text-primary">
          <Flag size={20} />
          <span className="text-xs font-bold uppercase tracking-[0.4em]">DENSIDADE MÁXIMA · GP BRASIL</span>
        </motion.div>
        <motion.h2 {...stagger(1)} className="mt-3 font-display text-5xl font-black leading-[0.95]">
          Densidade Concentrada: <span className="text-primary text-glow">GP Brasil</span>
        </motion.h2>
        <motion.p {...stagger(2)} className="mt-2 text-sm text-muted-foreground">
          22 Dias <span className="text-border">|</span> Variação Semanal de Criativos
        </motion.p>

        <div className="mt-6 flex flex-col gap-3">
          {bands.map((b, i) => (
            <motion.div
              key={b.label}
              {...stagger(i + 3)}
              className={`relative flex items-center justify-between overflow-hidden rounded-md border ${b.border} px-6 py-4`}
              style={{ background: b.gradient }}
            >
              <div className="flex items-baseline gap-5">
                <span className="font-display text-lg font-black uppercase tracking-wider text-white">
                  {b.label}
                </span>
                <span className={`text-xs uppercase tracking-[0.3em] ${b.text}`}>{b.meta}</span>
              </div>
              <span className={`text-xs uppercase tracking-[0.3em] ${b.text}`}>{b.tag}</span>
            </motion.div>
          ))}
        </div>

        <motion.div {...stagger(6)} className="mt-6 flex items-center gap-3 text-primary">
          <Radio size={16} />
          <span className="text-xs font-bold uppercase tracking-[0.4em]">DESCRIÇÃO · CANAIS POR FASE</span>
        </motion.div>

        <div className="mt-3 grid flex-1 grid-cols-3 gap-4">
          {bands.map((b, i) => (
            <motion.div
              key={`desc-${b.label}`}
              {...stagger(i + 7)}
              className={`flex flex-col justify-between rounded-lg border ${b.border} bg-card/40 p-4 backdrop-blur-sm`}
            >
              <div>
                <div className={`text-xs font-bold uppercase tracking-[0.3em] ${b.text}`}>{b.tag.split(" · ")[0]}</div>
                <div className="mt-2 font-display text-base font-black uppercase leading-tight text-white">
                  {b.label}
                </div>
              </div>
              <div className="mt-3 border-t border-border/40 pt-3 text-sm text-foreground/85">
                {b.desc}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...stagger(6)} className="mt-8 flex items-center gap-3 text-primary">
          <Radio size={16} />
          <span className="text-xs font-bold uppercase tracking-[0.4em]">DESCRIÇÃO · CANAIS POR FASE</span>
        </motion.div>

        <div className="mt-4 grid flex-1 grid-cols-3 gap-5">
          {bands.map((b, i) => (
            <motion.div
              key={`desc-${b.label}`}
              {...stagger(i + 7)}
              className={`flex flex-col justify-between rounded-lg border ${b.border} bg-card/40 p-5 backdrop-blur-sm`}
            >
              <div>
                <div className={`text-xs font-bold uppercase tracking-[0.3em] ${b.text}`}>{b.tag.split(" · ")[0]}</div>
                <div className="mt-2 font-display text-lg font-black uppercase leading-tight text-white">
                  {b.label}
                </div>
              </div>
              <div className="mt-4 border-t border-border/40 pt-3 text-sm text-foreground/85">
                {b.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------- CASE CARNAVAL ---------- */
export function SlideCaseCarnaval() {
  const metrics = [
    { v: "+0,7 p.p.", k: "Market Share x Q4", icon: Trophy },
    { v: "+31,2%", k: "Transações Diárias x Q4", icon: BarChart3 },
    { v: "+31,9%", k: "Usuários Distintos Diários x Q4", icon: Target },
    { v: "3,65%", k: "CTR", icon: Activity },
  ];
  return (
    <SlideShell>
      <SlideHeader index={13} total={TOTAL} label="CASE CARNAVAL" />
      <div className="flex h-[calc(100%-7rem)] flex-col px-16 pb-16">
        <motion.div {...stagger(0)} className="flex items-center gap-3 text-primary">
          <Sparkles size={20} />
          <span className="text-xs font-bold uppercase tracking-[0.4em]">CASE DE SMART STACKING · CARNAVAL</span>
        </motion.div>
        <motion.h2 {...stagger(1)} className="mt-4 font-display text-5xl font-black leading-[0.95]">
          Case Smart Stacking <span className="text-primary text-glow">Carnaval</span>
        </motion.h2>
        <motion.p {...stagger(2)} className="mt-3 text-base text-muted-foreground">
          Categoria: Cervejas <span className="text-border">|</span> Carnaval de São Paulo <span className="text-border">|</span> 16 dias
        </motion.p>

        <div className="mt-10 grid grid-cols-4 gap-5">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.k}
                {...stagger(i + 3)}
                className="flex flex-col justify-between rounded-lg border border-primary/30 bg-card/40 p-6 backdrop-blur-sm"
              >
                <Icon className="text-primary" size={28} />
                <div className="mt-6">
                  <div className="font-display text-4xl font-black text-primary text-glow">{m.v}</div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{m.k}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 grid flex-1 grid-cols-2 gap-5">
          <motion.div
            {...stagger(7)}
            className="flex flex-col justify-center rounded-lg border-2 border-primary bg-primary/5 p-6 pulse-glow"
          >
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Comparativo</div>
            <div className="mt-3 font-display text-3xl font-black leading-tight">
              Uplift GMV <span className="text-primary text-glow">+20,9 p.p.</span>
            </div>
            <div className="mt-2 text-sm text-foreground/80">vs. Líder da Categoria</div>
          </motion.div>

          <motion.div
            {...stagger(8)}
            className="flex flex-col justify-center rounded border-l-2 border-primary bg-card/40 p-6"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-primary">
              <Zap size={14} /> Insight
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">
              Sinais quantitativos claros de mudança de comportamento de consumo. Expansão de momentos target da ação.
            </p>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------- 16 GATILHOS TEMPORAIS (NOVO) ---------- */
export function SlideGatilhos() {
  return (
    <SlideShell bgImage={speedAbstract} overlay="linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 100%)">
      <SlideHeader index={16} total={TOTAL} label="GATILHOS TEMPORAIS" />
      <div className="flex h-[calc(100%-7rem)] flex-col justify-center px-16 pb-16">
        <motion.span {...stagger(0)} className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
          ATIVAÇÃO SINCRONIZADA · MARKET4U
        </motion.span>
        <motion.h2 {...stagger(1)} className="mt-6 font-display text-4xl font-black">
          Doritos <span className="text-primary text-glow">no Ritmo da F1</span>
        </motion.h2>

        <div className="mt-12 grid grid-cols-3 gap-6">
          {/* T-72h */}
          <motion.div {...stagger(2)} className="rounded-lg border border-primary/30 bg-card/40 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-primary">
              <Radio size={20} />
              <span className="font-mono text-xs font-bold">T-72h</span>
            </div>
            <div className="mt-4 font-display text-2xl font-black text-primary">Hoje tem...</div>
            <p className="mt-3 text-base font-light text-foreground/90">
              "Hoje tem treino livre. Doritos tá preparado. Pise fundo na ação."
            </p>
          </motion.div>

          {/* T-120m */}
          <motion.div {...stagger(3)} className="rounded-lg border-2 border-primary bg-primary/5 p-6 pulse-glow">
            <div className="flex items-center gap-2 text-primary">
              <Gauge size={20} />
              <span className="font-mono text-xs font-bold">T-120m</span>
            </div>
            <div className="mt-4 font-display text-2xl font-black text-primary">Já vai começar...</div>
            <p className="mt-3 text-base font-light text-foreground/90">
              "Sinal amarelo. Já vai começar. Temperatura máxima de sabor, Doritos aqui com você."
            </p>
          </motion.div>

          {/* T0 */}
          <motion.div {...stagger(4)} className="rounded-lg border border-primary/30 bg-card/40 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-primary">
              <Zap size={20} />
              <span className="font-mono text-xs font-bold">T0</span>
            </div>
            <div className="mt-4 font-display text-2xl font-black text-primary">Sinal verde!</div>
            <p className="mt-3 text-base font-light text-foreground/90">
              "Sinal verde. Começou. Pise fundo. Doritos, velocidade em cada bite."
            </p>
          </motion.div>
        </div>

        <motion.div
          {...stagger(5)}
          className="mt-10 flex items-center gap-3 rounded border-l-2 border-primary bg-card/40 p-4"
        >
          <Activity className="text-primary" size={24} />
          <div className="text-sm text-foreground/80">
            <span className="font-bold text-primary">3 pulsos por GP</span> · 36 ativações no total · Presença contínua
            do primeiro treino até a bandeirada.
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
