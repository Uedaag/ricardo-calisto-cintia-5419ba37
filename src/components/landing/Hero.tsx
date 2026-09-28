import { Button } from "@/components/ui/button";
import { Countdown } from "./Countdown";
const heroAsset = { url: "/img/expert-hero.png" };

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
        Você vai ver como fabricar sua primeira janela de alumínio em casa,{" "}
        <span className="text-gradient-gold">sem oficina, sem experiência e sem máquinas caras</span>.
      </>
    ),
    subheadline:
      "Em 2 horas, você entende os materiais, acompanha o plano de corte e vê a montagem de uma janela simples de 2 folhas, pronta para repetir com mais segurança.",
    cta: "Quero minha vaga no workshop",
  },
];

export interface HeroProps {
  /** Índice do modelo de copy (0, 1 ou 2). */
  variant: 0 | 1 | 2;
}

export function Hero({ variant }: HeroProps) {
  const active = variant;
  const model = models[active];

  return (
    <header className="relative">
      <div className="relative overflow-hidden">
        {/* Desktop full-bleed background */}
        <img
          src={heroAsset.url}
          alt="Ricardo Calisto, especialista em esquadrias de alumínio"
          width={1664}
          height={936}
          className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover object-center lg:block"
        />

        <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-5 py-10 lg:min-h-[88svh] lg:py-24">
          {/* Framed image for tablet & mobile */}
          <div className="mb-8 lg:hidden">
            <div className="overflow-hidden rounded-3xl border-4 border-primary/40 shadow-[var(--shadow-card)]">
              <img
                src={heroAsset.url}
                alt="Ricardo Calisto, especialista em esquadrias de alumínio"
                width={1664}
                height={936}
                className="aspect-[4/3] w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl rounded-3xl border border-border/60 bg-background/70 p-7 text-center backdrop-blur-md shadow-[var(--shadow-card)] md:p-10 lg:mx-0 lg:text-left">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {model.badge}
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-[1.12] md:text-5xl">
              {model.headline}
            </h1>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">{model.subheadline}</p>

            <div className="mt-8">
              <Countdown />
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                {model.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

