import { Button } from "@/components/ui/button";
import { Countdown } from "./Countdown";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1600}
        height={1200}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-90" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center md:py-32">
        <span className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Workshop ao vivo • Vagas limitadas
        </span>
        <h1 className="mt-7 text-4xl font-extrabold leading-[1.1] md:text-6xl">
          Você não precisa aceitar janela cara só porque{" "}
          <span className="text-gradient-gold">não sabe por onde começar</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          Se você já olhou orçamento, achou caro e pensou “eu queria saber fazer isso”, essa aula
          mostra o primeiro passo. Uma janela simples, em ambiente comum, com poucas ferramentas —
          para você sair da confusão e enxergar um caminho possível.
        </p>
        <div className="mt-10">
          <Countdown />
        </div>
        <Button variant="hero" size="xl" className="mt-9">
          Quero ver como começar por R$29,90
        </Button>
      </div>
    </header>
  );
}
