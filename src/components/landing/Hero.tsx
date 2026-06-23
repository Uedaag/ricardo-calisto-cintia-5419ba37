import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Countdown } from "./Countdown";
import heroAsset from "@/assets/expert-hero.png.asset.json";

interface Model {
  id: string;
  label: string;
  badge: string;
  headline: React.ReactNode;
  subheadline: string;
  cta: string;
}

const models: Model[] = [
  {
    id: "modelo-1",
    label: "Modelo 1",
    badge: "Workshop ao vivo • Vagas limitadas",
    headline: (
      <>
        Você não precisa aceitar janela cara só porque{" "}
        <span className="text-gradient-gold">não sabe por onde começar</span>.
      </>
    ),
    subheadline:
      "Se você já olhou orçamento, achou caro e pensou “eu queria saber fazer isso”, essa aula mostra o primeiro passo. Uma janela simples, em ambiente comum, com poucas ferramentas, para você sair da confusão e enxergar um caminho possível.",
    cta: "Quero ver como começar por R$29,90",
  },
  {
    id: "modelo-2",
    label: "Modelo 2",
    badge: "Verdade que ninguém te conta",
    headline: (
      <>
        O problema não é não ter oficina. É tentar aprender esquadria{" "}
        <span className="text-gradient-gold">em pedaços</span>.
      </>
    ),
    subheadline:
      "Um vídeo ensina corte. Outro fala de perfil. Outro mostra montagem. Mas ninguém junta tudo na ordem certa. Nesta aula, você acompanha uma janela simples do começo ao fim.",
    cta: "Quero aprender na ordem certa",
  },
  {
    id: "modelo-3",
    label: "Modelo 3",
    badge: "Resultado concreto em 2 horas",
    headline: (
      <>
        Veja como fabricar sua primeira janela de alumínio em casa,{" "}
        <span className="text-gradient-gold">sem oficina e sem máquinas caras</span>.
      </>
    ),
    subheadline:
      "Em 2 horas, você entende os materiais, acompanha o plano de corte e vê a montagem de uma janela simples de 2 folhas, pronta para repetir com mais segurança.",
    cta: "Quero minha vaga no workshop",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const model = models[active];

  return (
    <header className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroAsset.url}
        alt="Expert em esquadrias de alumínio em sua fábrica"
        width={1664}
        height={936}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 py-16 md:py-24">
        <div className="w-full max-w-xl rounded-3xl border border-border/60 bg-background/70 p-7 backdrop-blur-md shadow-[var(--shadow-card)] md:p-10">
          <div className="flex flex-wrap gap-2">
            {models.map((m, i) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  i === active
                    ? "bg-[image:var(--gradient-gold)] text-primary-foreground"
                    : "border border-border bg-card/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <span className="mt-6 inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {model.badge}
          </span>

          <h1 className="mt-5 text-3xl font-extrabold leading-[1.12] md:text-5xl">
            {model.headline}
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">{model.subheadline}</p>

          <div className="mt-8">
            <Countdown />
          </div>

          <Button variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
            {model.cta}
          </Button>
        </div>
      </div>
    </header>
  );
}
