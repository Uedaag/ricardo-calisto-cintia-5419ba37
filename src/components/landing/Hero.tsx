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
          Imersão • Vagas limitadas
        </span>
        <h1 className="mt-7 text-4xl font-extrabold leading-[1.1] md:text-6xl">
          Descubra como transformar{" "}
          <span className="text-gradient-gold">[resultado desejado]</span> em{" "}
          <span className="text-gradient-gold">[benefício principal]</span> com um método simples,
          prático e validado.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          Uma jornada pensada para quem quer sair de{" "}
          <span className="text-foreground/90">[dor atual]</span> e conquistar{" "}
          <span className="text-foreground/90">[resultado final]</span> com clareza e segurança.
        </p>
        <div className="mt-10">
          <Countdown />
        </div>
        <Button variant="hero" size="xl" className="mt-9">
          Quero garantir minha vaga
        </Button>
      </div>
    </header>
  );
}
