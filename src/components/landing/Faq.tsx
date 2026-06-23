import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow, Section } from "./primitives";

const faqs = [
  {
    q: "Preciso ter experiência com esquadrias?",
    a: "Não. A aula foi pensada para quem precisa começar pelo básico, com linguagem simples.",
  },
  {
    q: "Preciso ter oficina?",
    a: "Não. A proposta é mostrar o começo em um espaço comum, como garagem ou quintal.",
  },
  {
    q: "Vou aprender a instalar também?",
    a: "Você vai receber orientações básicas. A instalação completa e avançada fica para o próximo passo.",
  },
  {
    q: "E se eu não puder assistir ao vivo?",
    a: "O replay ficará disponível por 3 dias.",
  },
  {
    q: "Isso serve para quem quer renda?",
    a: "Sim. A aula mostra o primeiro passo. Para transformar em profissão, o ideal é seguir para o método completo.",
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
