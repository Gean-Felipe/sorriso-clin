import { Reveal } from "./Reveal";
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

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {equipe.map((p, i) => (
            <Reveal
              as="li"
              key={i}
              delay={200 + i * 150}
              className="group overflow-hidden rounded-3xl border border-border bg-background"
            >
              <div className="overflow-hidden">
                <img
                  src={p.foto}
                  alt={p.alt}
                  className={`aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105 ${p.objeto}`}
                  width={1080}
                height={1440}
                loading="lazy"
              />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold">{p.nome}</h3>
                <p className="mt-1 text-sm font-bold text-primary">{p.especialidade}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
                <p className="mt-4 text-xs tracking-wide text-muted-foreground uppercase">{p.cro}</p>
              </div>
            </Reveal>
          ))}

          <Reveal
            as="li"
            delay={500}
            className="hidden lg:flex flex-col justify-center px-8 py-12"
          >
            {/* Detalhe geométrico discreto */}
            <div className="mb-6 flex items-center gap-2" aria-hidden="true">
              <span className="inline-block size-2 rounded-full bg-primary/40" />
              <span className="inline-block size-2 rounded-full bg-primary/20" />
            </div>

            <p className="max-w-sm font-display text-2xl font-bold leading-snug text-deep sm:text-3xl">
              Cada sorriso é único. E cada profissional também.
            </p>

            {/* Linha fina decorativa */}
            <span className="mt-7 block h-px w-14 bg-primary/25" aria-hidden="true" />

            <p className="mt-7 max-w-sm text-[0.938rem] leading-relaxed text-muted-foreground">
              A equipe da Sorriso Clin reúne diferentes áreas da odontologia para acompanhar cada paciente de forma cuidadosa e individual. Dra.&nbsp;Gabriela e Dr.&nbsp;Valdir atuam em diferentes especialidades, unindo seus conhecimentos para oferecer possibilidades de tratamento voltadas à saúde, à função e à estética do sorriso.
            </p>
            <p className="mt-4 max-w-sm text-[0.938rem] leading-relaxed text-muted-foreground">
              Mais do que apresentar profissionais, esta seção representa as pessoas que fazem parte da experiência da Sorriso Clin e que colocam conhecimento, dedicação e atenção em cada etapa do cuidado.
            </p>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
