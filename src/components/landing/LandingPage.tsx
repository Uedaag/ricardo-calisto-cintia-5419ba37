import { Hero, type HeroProps } from "./Hero";
import { Lotes } from "./Lotes";
import { Faq } from "./Faq";
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
} from "./ContentSections";

/** Página de vendas completa; só a copy da dobra 1 muda entre os modelos. */
export function LandingPage({ variant }: HeroProps) {
  return (
    <main className="min-h-screen bg-background">
      <Hero variant={variant} />
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
