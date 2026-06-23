import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Lotes } from "@/components/landing/Lotes";
import { Faq } from "@/components/landing/Faq";
import {
  Bonus,
  Differential,
  Discover,
  Expert,
  FinalCta,
  ForWho,
  Foundations,
  Guarantee,
  Learn,
  Offer,
  Testimonials,
  Transformation,
} from "@/components/landing/ContentSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Esquadrias em Mãos | Workshop ao Vivo com Ricardo Calisto" },
      {
        name: "description",
        content:
          "Aprenda a fabricar sua primeira janela de alumínio em casa, sem oficina e sem máquinas caras. Workshop ao vivo de 2 horas com Ricardo Calisto. Vagas limitadas.",
      },
      {
        property: "og:title",
        content: "Esquadrias em Mãos | Workshop ao Vivo com Ricardo Calisto",
      },
      {
        property: "og:description",
        content:
          "Veja, na prática, como fabricar uma janela de alumínio simples do começo ao fim. Material, medida, corte e montagem na ordem certa.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Transformation />
      <Discover />
      <Lotes />
      <Expert />
      <Foundations />
      <Learn />
      <Bonus />
      <ForWho />
      <Differential />
      <Testimonials />
      <Offer />
      <Guarantee />
      <Faq />
      <FinalCta />
      <footer className="border-t border-border px-5 py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ricardo Calisto, Esquadrias em Mãos. Todos os direitos
        reservados.
      </footer>
    </main>
  );
}
