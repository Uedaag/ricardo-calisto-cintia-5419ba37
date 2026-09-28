import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Inscrição Confirmada | Esquadrias em Mãos" },
      { name: "description", content: "Sua vaga no workshop Esquadrias em Mãos com Ricardo Calisto está garantida." },
      { property: "og:title", content: "Inscrição Confirmada | Esquadrias em Mãos" },
      { property: "og:description", content: "Sua vaga no workshop ao vivo está garantida." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ObrigadoPage,
});

function ObrigadoPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-16">
      <div className="w-full max-w-xl rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)] md:p-12">
        <CheckCircle2 className="mx-auto size-16 text-primary" aria-hidden="true" />
        <h1 className="mt-6 text-3xl font-extrabold md:text-4xl">
          Parabéns, sua vaga está <span className="text-gradient-gold">garantida</span>!
        </h1>
        <p className="mt-5 text-muted-foreground">
          Agora falta só um passo: entre no grupo de WhatsApp do workshop. É por lá que você vai
          receber o link da aula ao vivo, os avisos e os materiais.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Entrar no grupo do WhatsApp
            </a>
          </Button>
          <Link to="/" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </main>
  );
}
