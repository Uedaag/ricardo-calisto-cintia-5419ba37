import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Esquadrias em Mãos | Workshop ao Vivo com Ricardo Calisto" },
      {
        name: "description",
        content:
          "Aprenda a fabricar sua primeira janela de alumínio em casa, sem oficina e sem máquinas caras. Workshop ao vivo de 2 horas com Ricardo Calisto.",
      },
      { property: "og:title", content: "Esquadrias em Mãos | Workshop ao Vivo com Ricardo Calisto" },
      {
        property: "og:description",
        content: "Você não precisa aceitar janela cara só porque não sabe por onde começar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <LandingPage variant={0} />,
});
