import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Reveal, Section } from "./primitives";

const lotes = [
  {
    name: "1º Lote",
    tag: "Melhor preço",
    price: "R$29,90",
    desc: "O custo mais baixo para dar o seu primeiro passo na esquadria de alumínio.",
    items: [
      "Workshop ao vivo de 2 horas",
      "Demonstração prática da primeira janela",
      "Acesso ao grupo de WhatsApp",
    ],
    featured: true,
  },
  {
    name: "2º Lote",
    tag: "Intermediário",
    price: "R$97,00",
    desc: "Para quem deixou para depois e ainda quer garantir a vaga no workshop.",
    items: [
      "Workshop ao vivo de 2 horas",
      "Demonstração prática da primeira janela",
      "Acesso ao grupo de WhatsApp",
    ],
    featured: false,
    locked: true,
  },
  {
    name: "3º Lote",
    tag: "Último lote",
    price: "R$197,00",
    desc: "A última oportunidade de entrar antes do encerramento das vagas.",
    items: [
      "Workshop ao vivo de 2 horas",
      "Demonstração prática da primeira janela",
      "Acesso ao grupo de WhatsApp",
    ],
    featured: false,
    locked: true,
  },
];

export function Lotes() {
  return (
    <Section id="lotes">
      <div className="text-center">
        <Eyebrow>Escolha seu acesso</Eyebrow>
        <h2 className="mt-5 text-3xl font-bold md:text-4xl">Lotes do workshop</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Quanto antes você entra, menor o custo do seu primeiro passo.
        </p>
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
              <p className="mt-2 text-4xl font-extrabold text-gradient-gold">{lote.price}</p>
              <p className="mt-3 text-sm text-muted-foreground">{lote.desc}</p>
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
                Garantir minha vaga
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
