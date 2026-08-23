import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { clinica } from "./data";

const depoimentos = [
  { texto: "[Depoimento a confirmar pela clínica]", autor: "[Paciente]" },
  { texto: "[Depoimento a confirmar pela clínica]", autor: "[Paciente]" },
  { texto: "[Depoimento a confirmar pela clínica]", autor: "[Paciente]" },
];

export function Depoimentos() {
  return (
    <section className="bg-ice py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Depoimentos
          </p>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            Histórias de quem voltou a sorrir.
          </h2>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <Star className="size-4 fill-magenta text-magenta" aria-hidden="true" />
            {clinica.nota} de média em {clinica.avaliacoes} avaliações no Google.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 80}
              className="rounded-3xl border border-border bg-background p-8"
            >
              <Quote className="size-6 text-magenta/70" aria-hidden="true" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
              <p className="mt-6 font-display text-sm font-bold text-deep">{d.autor}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
