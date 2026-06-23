import { ArrowRight, Quote, Shield, Sparkles, Star, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Reveal, Section } from "./primitives";
import expertImg from "@/assets/calisto.png.asset.json";

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

const transformations = [
  {
    before: "Hoje você olha a esquadria pronta e só vê preço alto.",
    after: "Depois, começa a enxergar material, medida, corte e montagem.",
  },
  {
    before: "Hoje parece coisa de fábrica.",
    after: "Depois, parece um processo com começo, meio e fim.",
  },
  {
    before: "Hoje você depende de alguém fazer.",
    after: "Depois, entende como começar com as próprias mãos.",
  },
];

export function Transformation() {
  return (
    <Section>
      <Reveal>
        <div className="text-center">
          <Eyebrow>A transformação</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">De preço alto para começo possível</h2>
        </div>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {transformations.map((t, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card/60 p-7">
              <p className="text-sm text-muted-foreground">{t.before}</p>
              <div className="flex items-center gap-2 text-primary">
                <ArrowRight className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-widest">Depois</span>
              </div>
              <p className="font-medium text-foreground/90">{t.after}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const discoverItems = [
  "Por que esquadria de alumínio parece difícil quando ensinam fora de ordem.",
  "O que você realmente precisa para começar sem montar uma oficina.",
  "Como uma janela simples de 2 folhas é pensada, cortada e montada.",
  "Onde o iniciante mais erra antes de perder material.",
];

export function Discover() {
  return (
    <Section className="border-y border-border bg-card/30">
      <Reveal>
        <div className="text-center">
          <Eyebrow>O que você vai descobrir</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">Clareza do material à montagem</h2>
        </div>
      </Reveal>
      <div className="mx-auto mt-10 max-w-3xl">
        <BulletList items={discoverItems} />
      </div>
    </Section>
  );
}

export function Expert() {
  return (
    <Section id="expert">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-gold)] opacity-20 blur-2xl" />
            <img
              src={expertImg}
              alt="Foto de Ricardo Calisto, especialista em esquadrias de alumínio"
              loading="lazy"
              width={800}
              height={1000}
              className="relative rounded-3xl border border-border object-cover shadow-[var(--shadow-card)]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>Apresentamos</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">Ricardo Calisto</h2>
          <p className="mt-4 text-muted-foreground">
            Ele começou nas esquadrias ainda jovem, no chão de fábrica, quando não existia tutorial
            fácil, curso online ou passo a passo pronto. Aprendeu olhando, errando, cortando,
            montando, corrigindo e vendo material caro virar prejuízo por detalhe pequeno.
          </p>
          <p className="mt-3 text-muted-foreground">
            Com cerca de 30 anos de caminhada em fabricação, montagem, instalação e manutenção,
            descobriu uma verdade que pouca gente fala. Hoje, ele ensina isso de forma simples para
            quem quer começar em casa, sem se perder em teoria difícil.
          </p>
          <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <p className="flex items-start gap-3 text-sm text-foreground/90">
              <Sparkles className="mt-0.5 size-5 shrink-0 text-primary" />
              O grande mistério da esquadria não é a máquina. É entender o material, o perfil e a
              ordem certa.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

const firstThings = [
  "Esquadria não é dom. É sequência.",
  "Máquina cara não corrige medida errada.",
  "Vídeo solto pode custar mais caro que uma aula organizada.",
  "Você não precisa saber tudo. Precisa começar pelo produto certo.",
];

export function Foundations() {
  return (
    <Section className="border-y border-border bg-card/30">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <Reveal>
          <Eyebrow>Entenda primeiro</Eyebrow>
          <h2 className="mt-5 text-2xl font-bold md:text-3xl">
            As primeiras coisas que você precisa entender
          </h2>
          <BulletList items={firstThings} />
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>O que é</Eyebrow>
          <h2 className="mt-5 text-2xl font-bold md:text-3xl">Esquadrias em Mãos</h2>
          <p className="mt-4 text-muted-foreground">
            O Esquadrias em Mãos é um workshop ao vivo de 2 horas para você ver, na prática, como
            fabricar uma primeira janela de alumínio simples em casa, com poucas ferramentas e sem
            oficina profissional.
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-border bg-card/60 p-5">
              <p className="text-sm font-semibold text-primary">Fase 1, Entender o começo certo</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Você vai ver quais materiais, perfis e ferramentas fazem sentido para uma primeira
                janela, sem comprar coisa à toa.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/60 p-5">
              <p className="text-sm font-semibold text-primary">Fase 2, Ver a janela nascer</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Você acompanha medida, plano de corte, corte dos perfis e montagem da janela simples
                de 2 folhas.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

const learnItems = [
  "Quais materiais, perfis e ferramentas fazem sentido para começar",
  "Como tirar a medida e montar o plano de corte",
  "Como cortar os perfis sem desperdiçar material",
  "Como montar uma janela simples de 2 folhas",
  "Onde o iniciante mais erra, e como evitar",
];

export function Learn() {
  return (
    <Section>
      <Reveal>
        <div className="text-center">
          <Eyebrow>Ao vivo</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Durante o workshop ao vivo, você vai aprender:
          </h2>
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
  {
    title: "Bônus 1, Mini-guia de ferramentas essenciais",
    desc: "Para saber o que usar no começo, incluindo alternativas mais baratas.",
  },
  {
    title: "Bônus 2, Modelo de plano de corte",
    desc: "O mesmo modelo usado na aula, pronto para imprimir e adaptar.",
  },
  {
    title: "Bônus 3, Checklist Primeira Produção em Casa",
    desc: "Um passo a passo resumido para seguir depois da aula.",
  },
];

export function Bonus() {
  return (
    <Section className="border-y border-border bg-card/30">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Presentes exclusivos</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">Bônus para repetir o processo</h2>
        </div>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {bonuses.map((bonus, i) => (
          <Reveal key={bonus.title} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-primary/20 bg-primary/5 p-7">
              <Star className="size-7 text-primary" />
              <p className="mt-4 font-semibold">{bonus.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{bonus.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const whyItems = [
  "Porque cada orçamento caro empurra sua obra para trás.",
  "Porque aprender por pedaços aumenta o risco de errar.",
  "Porque uma barra cortada errada custa mais que essa aula.",
  "Porque talvez o que falta não seja coragem. É alguém mostrar a ordem.",
];

const forWho = [
  "Para quem está construindo ou reformando e quer economizar",
  "Para quem trabalha com obra, vidro ou serralheria e quer ampliar o que faz",
  "Para quem busca uma habilidade prática para gerar renda",
  "Para quem quer começar pequeno, sem fábrica e sem máquinas caras",
];

export function ForWho() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
        <Reveal>
          <Eyebrow>Por que isso é essencial</Eyebrow>
          <h2 className="mt-5 text-2xl font-bold md:text-3xl">
            Por que isso é essencial para você
          </h2>
          <BulletList items={whyItems} />
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>Para quem é</Eyebrow>
          <h3 className="mt-5 text-2xl font-bold md:text-3xl">Para quem essa aula faz sentido</h3>
          <BulletList items={forWho} />
          <p className="mt-4 text-sm text-muted-foreground">
            Não é para quem espera teoria avançada de engenharia. E não é para quem não quer colocar
            a mão na massa.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export function Differential() {
  return (
    <Section className="border-y border-border bg-card/30">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card/60 p-10 text-center shadow-[var(--shadow-card)] md:p-14">
          <div className="absolute -right-16 -top-16 size-48 rounded-full bg-[image:var(--gradient-gold)] opacity-15 blur-3xl" />
          <Target className="mx-auto size-10 text-primary" />
          <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-bold md:text-3xl">
            Um diferencial único
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Aqui você não aprende esquadria em pedaços. Você acompanha uma primeira janela simples em
            uma sequência clara:
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-semibold text-gradient-gold md:text-base">
            material → medida → plano de corte → corte → montagem → ajuste
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            É isso que transforma confusão em começo.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

const testimonials = [
  "Antes eu achava que esquadria de alumínio era coisa de fábrica. Depois da aula, entendi a ordem das peças, das medidas e da montagem. Agora eu sei por onde começar sem comprar material no escuro.",
];

export function Testimonials() {
  return (
    <Section>
      <Reveal>
        <div className="text-center">
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">O que dizem sobre a experiência</h2>
        </div>
      </Reveal>
      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6">
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

const offerItems = [
  "Workshop ao vivo de 2 horas",
  "Demonstração prática da primeira janela",
  "Acesso ao grupo de WhatsApp",
  "Replay por 3 dias",
  "Suporte básico no período do workshop",
  "3 bônus de apoio para repetir o processo",
];

export function Offer() {
  return (
    <Section className="border-y border-border bg-card/30">
      <Reveal>
        <div className="mx-auto max-w-2xl rounded-3xl border border-primary/30 bg-card/60 p-10 text-center shadow-[var(--shadow-card)]">
          <Eyebrow>Oferta especial</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">Hoje você recebe</h2>
          <ul className="mt-8 space-y-3 text-left">
            {offerItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                <ArrowRight className="mt-0.5 size-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm uppercase tracking-widest text-muted-foreground">Tudo por:</p>
          <p className="mt-2 text-5xl font-extrabold text-gradient-gold">R$29,90</p>
          <Button variant="hero" size="xl" className="mt-8">
            Quero entrar no workshop
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

export function Guarantee() {
  return (
    <Section>
      <Reveal>
        <div className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl border border-border bg-card/60 p-10 text-center">
          <Shield className="size-10 text-primary" />
          <h2 className="mt-5 text-2xl font-bold md:text-3xl">Garantia de 7 dias</h2>
          <p className="mt-4 text-muted-foreground">
            Você tem 7 dias de garantia. Se entrar e sentir que não é para você, pode pedir a
            devolução dentro do prazo da plataforma. Simples. Sem enrolação.
          </p>
        </div>
      </Reveal>
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
            Comece sua primeira janela com a ordem certa
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Talvez o que falte não seja coragem. É alguém mostrar a ordem. Esse é o momento de dar o
            próximo passo.
          </p>
          <Button variant="hero" size="xl" className="mt-9">
            Garantir minha vaga por R$29,90
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
