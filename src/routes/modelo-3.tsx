import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/modelo-3")({
  head: () => ({
    meta: [
      { title: "Sua Primeira Janela de Alumínio em Casa | Ricardo Calisto" },
      {
        name: "description",
        content:
          "Em 2 horas, veja como fabricar uma janela de alumínio de 2 folhas em casa, sem oficina, sem experiência e sem máquinas caras.",
      },
      { property: "og:title", content: "Sua Primeira Janela de Alumínio em Casa | Ricardo Calisto" },
      {
        property: "og:description",
        content: "Materiais, plano de corte e montagem de uma janela simples em 2 horas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <LandingPage variant={2} />,
});
