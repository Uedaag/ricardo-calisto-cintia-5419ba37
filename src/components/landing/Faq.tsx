import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow, Section } from "./primitives";

const faqs = [
  {
    q: "Para quem é essa mentoria?",
    a: "Ela é indicada para pessoas que desejam [resultado] e querem um caminho mais claro para chegar lá.",
  },
  {
    q: "Preciso ter experiência prévia?",
    a: "Não necessariamente. O conteúdo foi pensado para atender desde iniciantes até pessoas que já têm alguma base.",
  },
  {
    q: "O que está incluso?",
    a: "Você terá acesso a [conteúdo principal], [bônus] e [suporte/benefícios], conforme o formato da oferta.",
  },
  {
    q: "Como vou receber o acesso?",
    a: "Após a confirmação, você receberá todas as instruções de acesso ao material e às etapas do processo.",
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "Isso depende da sua aplicação, mas a proposta é acelerar sua evolução com clareza e método.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <div className="text-center">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-5 text-3xl font-bold md:text-4xl">Dúvidas frequentes</h2>
      </div>
      <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={faq.q}
            value={`item-${i}`}
            className="border-border"
          >
            <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
              {`${i + 1}. ${faq.q}`}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
