import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Lotes } from "@/components/landing/Lotes";
import { Faq } from "@/components/landing/Faq";
import {
  Bonus,
  Differential,
  Expert,
  FinalCta,
  ForWho,
  Foundations,
  Learn,
  Testimonials,
  Transformation,
} from "@/components/landing/ContentSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imersão Transformadora | Garanta Sua Vaga" },
      {
        name: "description",
        content:
          "Descubra como transformar seu resultado desejado em benefício real com um método simples, prático e validado. Vagas limitadas — garanta a sua.",
      },
      { property: "og:title", content: "Imersão Transformadora | Garanta Sua Vaga" },
      {
        property: "og:description",
        content:
          "Uma jornada para sair da dor atual e conquistar o resultado final com clareza e segurança.",
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
      <Lotes />
      <Expert />
      <Foundations />
      <Learn />
      <Bonus />
      <ForWho />
      <Differential />
      <Testimonials />
      <Faq />
      <FinalCta />
      <footer className="border-t border-border px-5 py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} [Nome do Expert]. Todos os direitos reservados.
      </footer>
    </main>
  );
}
