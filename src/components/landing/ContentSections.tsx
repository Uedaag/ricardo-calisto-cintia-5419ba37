import { ArrowRight, Quote, Sparkles, Star, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Reveal, Section } from "./primitives";
import expertImg from "@/assets/expert.jpg";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl border border-border bg-card/50 px-4 py-3 text-sm text-foreground/90"
        >
          <ArrowRight className="mt-0.5 size-4 shrink-0 text-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

const lorem = [
  "lorem ipsum dolor sit amet",
  "lorem ipsum dolor sit amet",
  "lorem ipsum dolor sit amet",
];

export function Transformation() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <Reveal>
          <Eyebrow>Qual a transformação?</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            De onde você está para onde quer chegar
          </h2>
          <p className="mt-4 text-muted-foreground">
            Você vai sair de um cenário de <span className="text-foreground/90">[dor/problema]</span>{" "}
            para um novo nível de <span className="text-foreground/90">[resultado/benefício]</span>,
            com mais direção, confiança e previsibilidade.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>O que você vai descobrir?</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">Clareza no caminho certo</h2>
          <p className="mt-4 text-muted-foreground">
            Ao longo desta experiência, você vai entender exatamente o que precisa fazer para
            alcançar <span className="text-foreground/90">[resultado desejado]</span> sem depender de
            tentativa e erro.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export function Expert() {
  return (
    <Section id="expert" className="border-y border-border bg-card/30">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-gold)] opacity-20 blur-2xl" />
            <img
              src={expertImg}
              alt="Foto do expert responsável pela mentoria"
              loading="lazy"
              width={800}
              height={1000}
              className="relative rounded-3xl border border-border object-cover shadow-[var(--shadow-card)]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>Apresentamos</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">[Nome do Expert]</h2>
          <p className="mt-4 text-muted-foreground">
            [Nome do Expert] é especialista em [área de atuação], com experiência em ajudar pessoas a
            conquistarem [resultado]. Sua abordagem une estratégia, prática e aplicação direta.
          </p>
          <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <p className="flex items-start gap-3 text-sm text-foreground/90">
              <Sparkles className="mt-0.5 size-5 shrink-0 text-primary" />
              Esse processo foi criado para gerar clareza, acelerar decisões e conduzir você de forma
              objetiva até o resultado desejado.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Foundations() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <Reveal>
          <Eyebrow>Entenda primeiro</Eyebrow>
          <h2 className="mt-5 text-2xl font-bold md:text-3xl">
            O que você precisa entender primeiro
          </h2>
          <p className="mt-4 text-muted-foreground">
            Antes de avançar, é importante compreender os fundamentos que sustentam esse método e por
            que eles fazem toda a diferença no resultado final.
          </p>
          <BulletList items={lorem} />
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>O método</Eyebrow>
          <h2 className="mt-5 text-2xl font-bold md:text-3xl">
            O que é o protocolo / produto / serviço
          </h2>
          <p className="mt-4 text-muted-foreground">
            É um processo estruturado, desenhado para ajudar você a aplicar os passos certos na ordem
            certa, com foco em resultado e consistência.
          </p>
          <BulletList items={lorem} />
        </Reveal>
      </div>
    </Section>
  );
}

const learnItems = [
  "Como identificar [problema principal]",
  "Como aplicar [método/estratégia]",
  "Como evitar os erros mais comuns",
  "Como acelerar seus resultados com mais segurança",
  "Como construir uma rotina de execução consistente",
];

export function Learn() {
  return (
    <Section className="border-y border-border bg-card/30">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Ao vivo</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Durante a imersão / workshop ao vivo, você aprenderá:
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Você terá acesso a conteúdos práticos e direcionados para colocar em ação aquilo que
            realmente importa.
          </p>
        </div>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {learnItems.map((item, i) => (
          <Reveal key={item} delay={i * 0.06}>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[image:var(--gradient-gold)] font-bold text-primary-foreground">
                {i + 1}
              </span>
              <span className="font-medium">{item}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const bonuses = [
  "Bônus 1: lorem ipsum dolor sit amet",
  "Bônus 2: lorem ipsum dolor sit amet",
  "Bônus 3: lorem ipsum dolor sit amet",
];

export function Bonus() {
  return (
    <Section>
      <Reveal>
        <div className="text-center">
          <Eyebrow>Bônus exclusivos</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">Presentes / bônus exclusivos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Além do conteúdo principal, você também receberá materiais extras para aprofundar seu
            aprendizado e facilitar a aplicação.
          </p>
        </div>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {bonuses.map((bonus, i) => (
          <Reveal key={bonus} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-primary/20 bg-primary/5 p-7">
              <Star className="size-7 text-primary" />
              <p className="mt-4 font-semibold">{bonus}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const forWho = [
  "Para quem está em [situação atual]",
  "Para quem quer [resultado desejado]",
  "Para quem busca [benefício principal]",
  "Para quem quer evitar [dor/problema]",
  "Para quem está pronto para agir com clareza",
];

export function ForWho() {
  return (
    <Section className="border-y border-border bg-card/30">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        <Reveal>
          <Eyebrow>Reflexão</Eyebrow>
          <h2 className="mt-5 text-2xl font-bold md:text-3xl">
            Você ainda não entendeu por que isso é essencial pra você?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Talvez você já tenha tentado outras formas, mas ainda não encontrou uma estrutura clara
            que realmente conecte estratégia, execução e resultado.
          </p>
          <p className="mt-3 text-muted-foreground">
            É exatamente por isso que essa mentoria/imersão existe: para encurtar o caminho, reduzir
            erros e dar mais direção para sua próxima etapa.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="text-xl font-bold">Para quem essa mentoria faz sentido?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Essa mentoria faz sentido para quem quer sair da confusão e ter um caminho mais objetivo
            para evoluir com consistência.
          </p>
          <BulletList items={forWho} />
        </Reveal>
      </div>
    </Section>
  );
}

export function Differential() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card/60 p-10 text-center shadow-[var(--shadow-card)] md:p-14">
          <div className="absolute -right-16 -top-16 size-48 rounded-full bg-[image:var(--gradient-gold)] opacity-15 blur-3xl" />
          <Target className="mx-auto size-10 text-primary" />
          <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-bold md:text-3xl">
            Um diferencial único
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            O grande diferencial está na forma como tudo foi estruturado: simples de entender, direto
            de aplicar e focado no que realmente gera transformação.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

const testimonials = [
  "lorem ipsum dolor sit amet",
  "lorem ipsum dolor sit amet",
  "lorem ipsum dolor sit amet",
];

export function Testimonials() {
  return (
    <Section className="border-y border-border bg-card/30">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">O que dizem sobre a experiência</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Veja o que algumas pessoas dizem sobre a experiência e os resultados conquistados.
          </p>
        </div>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <figure className="h-full rounded-2xl border border-border bg-card/60 p-7">
              <Quote className="size-7 text-primary" />
              <blockquote className="mt-4 text-foreground/90">“{t}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-hero)] p-10 text-center md:p-16">
          <div className="absolute inset-0 border border-primary/30 rounded-3xl" />
          <h2 className="mx-auto max-w-3xl text-3xl font-bold md:text-5xl">
            Comece sua transformação com mais direção
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Se você quer sair de <span className="text-foreground/90">[dor atual]</span> e começar sua
            transformação com mais direção, esse é o momento de dar o próximo passo.
          </p>
          <Button variant="hero" size="xl" className="mt-9">
            Quero começar agora
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
