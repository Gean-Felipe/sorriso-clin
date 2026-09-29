import { Reveal } from "./Reveal";
import { Arc } from "./Arc";
import { img } from "./data";

const equipe = [
  {
    foto: img.profissionalMagenta,
    alt: "Dra. Gabriela Aparecida Galiego Reis",
    nome: "Dra. Gabriela Aparecida Galiego Reis",
    especialidade: "Implantodontia • Ortodontia • Ortopedia Facial • Clínico Geral",
    cro: "CRO 5550",
    bio: "Cirurgiã-dentista com atuação em Implantodontia, Ortodontia, Ortopedia Facial e Clínico Geral, oferecendo atendimento personalizado e soluções completas para a saúde, função e estética do sorriso.",
    objeto: "object-top",
  },
  {
    foto: img.dentistaJaleco,
    alt: "Dr. Valdir Silva Reis",
    nome: "Dr. Valdir Silva Reis",
    especialidade: "Ortodontia • Ortopedia Facial • Clínico Geral",
    cro: "CRO 7681",
    bio: "Cirurgião-dentista com atuação em Ortodontia, Ortopedia Facial e Clínico Geral, com foco no cuidado integral da saúde bucal e no acompanhamento personalizado de cada paciente.",
    objeto: "object-center",
  },
];

export function Equipe() {
  return (
    <section id="equipe" className="bg-ice py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Reveal delay={0}>
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Equipe</p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Quem está por trás de cada sorriso.
            </h2>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {equipe.map((p, i) => (
            <Reveal
              as="li"
              key={i}
              delay={200 + i * 150}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={p.foto}
                  alt={p.alt}
                  className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${p.objeto}`}
                  width={1080}
                  height={1350}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{p.nome}</h3>
                  <p className="mt-1.5 text-xs font-bold tracking-wide text-primary uppercase">
                    {p.especialidade}
                  </p>
                  <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
                </div>
                <p className="mt-5 text-[11px] font-semibold tracking-wider text-muted-foreground/80 uppercase">
                  {p.cro}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal
            as="li"
            delay={500}
            className="col-span-full lg:col-span-1 flex flex-col justify-center rounded-3xl border border-border/80 bg-background/60 p-8 sm:p-10 backdrop-blur-sm shadow-sm"
          >
            {/* Detalhe geométrico discreto */}
            <div className="mb-6 flex items-center gap-2" aria-hidden="true">
              <span className="inline-block size-2 rounded-full bg-primary/40" />
              <span className="inline-block size-2 rounded-full bg-primary/20" />
            </div>

            <p className="font-display text-2xl font-bold leading-snug text-deep lg:text-[1.75rem]">
              Cada sorriso é único. E cada profissional também.
            </p>

            {/* Linha azul decorativa */}
            <span className="mt-6 block h-px w-12 bg-primary/30" aria-hidden="true" />

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                A equipe da Sorriso Clin reúne diferentes áreas da odontologia para acompanhar cada paciente de forma cuidadosa e individual. Dra.&nbsp;Gabriela e Dr.&nbsp;Valdir atuam em diferentes especialidades, unindo seus conhecimentos para oferecer possibilidades de tratamento voltadas à saúde, à função e à estética do sorriso.
              </p>
              <p>
                Mais do que apresentar profissionais, esta seção representa as pessoas que fazem parte da experiência da Sorriso Clin e que colocam conhecimento, dedicação e atenção em cada etapa do cuidado.
              </p>
            </div>

            {/* Acento vermelho/magenta — identidade visual do Hero */}
            <div className="mt-8 flex items-center">
              <Arc className="h-3 w-16 text-magenta" width={3} />
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
