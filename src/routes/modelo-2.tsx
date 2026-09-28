import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/modelo-2")({
  head: () => ({
    meta: [
      { title: "Aprenda Esquadria na Ordem Certa | Ricardo Calisto" },
      {
        name: "description",
        content:
          "O problema não é não ter oficina, é aprender esquadria em pedaços. Acompanhe uma janela simples do começo ao fim no workshop ao vivo.",
      },
      { property: "og:title", content: "Aprenda Esquadria na Ordem Certa | Ricardo Calisto" },
      {
        property: "og:description",
        content: "Corte, perfil e montagem juntos, na ordem certa, em um workshop ao vivo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <LandingPage variant={1} />,
});
