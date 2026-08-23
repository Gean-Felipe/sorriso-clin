import { Sparkles, Anchor, Layers, AlignHorizontalDistributeCenter, Sun, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const tratamentos = [
  {
    icon: Sparkles,
    nome: "Estética Dental",
    desc: "Categoria estrutural sugerida — escopo e procedimentos [A CONFIRMAR] pela clínica.",
  },
  {
    icon: Anchor,
    nome: "Implantes",
    desc: "Categoria estrutural sugerida — escopo e procedimentos [A CONFIRMAR] pela clínica.",
  },
  {
    icon: Layers,
    nome: "Próteses",
    desc: "Categoria estrutural sugerida — escopo e procedimentos [A CONFIRMAR] pela clínica.",
  },
  {
    icon: AlignHorizontalDistributeCenter,
    nome: "Ortodontia",
    desc: "Categoria estrutural sugerida — escopo e procedimentos [A CONFIRMAR] pela clínica.",
  },
  {
    icon: Sun,
    nome: "Clareamento",
    desc: "Categoria estrutural sugerida — escopo e procedimentos [A CONFIRMAR] pela clínica.",
  },
  {
    icon: Stethoscope,
    nome: "Dentística",
    desc: "Categoria estrutural sugerida — escopo e procedimentos [A CONFIRMAR] pela clínica.",
  },
];

export function Tratamentos() {
  return (
    <section id="tratamentos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Tratamentos
          </p>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            Encontre o cuidado que seu sorriso precisa.
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            As categorias abaixo são estruturais. A lista oficial de tratamentos oferecidos está{" "}
            <strong className="font-semibold text-magenta">[A CONFIRMAR]</strong> pela clínica.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tratamentos.map(({ icon: Icon, nome, desc }, i) => (
            <Reveal
              as="li"
              key={nome}
              delay={(i % 3) * 80}
              className="group flex flex-col rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-ice text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{nome}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <Button
                asChild
                variant="ghost"
                className="mt-5 h-11 w-fit px-0 text-primary hover:bg-transparent hover:text-deep"
              >
                <a href="#contato" aria-label={`Saiba mais sobre ${nome}`}>
                  Saiba mais →
                </a>
              </Button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
