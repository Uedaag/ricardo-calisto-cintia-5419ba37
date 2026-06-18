import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Reveal, Section } from "./primitives";

const lotes = [
  {
    name: "Lote 1",
    tag: "Essencial",
    desc: "Ideal para quem quer começar com o essencial e ter uma base sólida.",
    items: [
      "Entrega 1: lorem ipsum dolor sit amet",
      "Entrega 2: lorem ipsum dolor sit amet",
      "Entrega 3: lorem ipsum dolor sit amet",
    ],
    featured: false,
  },
  {
    name: "Lote 2",
    tag: "Mais escolhido",
    desc: "Indicado para quem deseja avançar com mais profundidade e clareza na execução.",
    items: [
      "Entrega 1: lorem ipsum dolor sit amet",
      "Entrega 2: lorem ipsum dolor sit amet",
      "Entrega 3: lorem ipsum dolor sit amet",
    ],
    featured: true,
  },
  {
    name: "Lote 3",
    tag: "Completo",
    desc: "A opção mais completa para quem busca uma experiência mais estratégica e transformadora.",
    items: [
      "Entrega 1: lorem ipsum dolor sit amet",
      "Entrega 2: lorem ipsum dolor sit amet",
      "Entrega 3: lorem ipsum dolor sit amet",
    ],
    featured: false,
  },
];

export function Lotes() {
  return (
    <Section id="lotes">
      <div className="text-center">
        <Eyebrow>Escolha seu acesso</Eyebrow>
        <h2 className="mt-5 text-3xl font-bold md:text-4xl">
          Lote 1 <span className="text-muted-foreground">|</span> Lote 2{" "}
          <span className="text-muted-foreground">|</span> Lote 3
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {lotes.map((lote, i) => (
          <Reveal key={lote.name} delay={i * 0.1}>
            <div
              className={`flex h-full flex-col rounded-2xl border p-7 shadow-[var(--shadow-card)] ${
                lote.featured
                  ? "border-primary/60 bg-card ring-1 ring-primary/30"
                  : "border-border bg-card/60"
              }`}
            >
              <span
                className={`inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                  lote.featured
                    ? "bg-[image:var(--gradient-gold)] text-primary-foreground"
                    : "border border-border text-muted-foreground"
                }`}
              >
                {lote.tag}
              </span>
              <h3 className="mt-4 text-2xl font-bold">{lote.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{lote.desc}</p>
              <ul className="mt-6 space-y-3">
                {lote.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={lote.featured ? "hero" : "heroOutline"}
                size="lg"
                className="mt-7 w-full"
              >
                Quero garantir minha vaga
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
