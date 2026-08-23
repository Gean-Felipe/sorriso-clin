import { Reveal } from "./Reveal";
import { img } from "./data";

const equipe = [
  {
    foto: img.dentistaJaleco,
    alt: "Profissional da Sorriso Clin de jaleco branco em frente à clínica",
    nome: "[Nome a confirmar]",
    especialidade: "[Especialidade a confirmar]",
    cro: "CRO [a confirmar]",
    bio: "Apresentação profissional [A CONFIRMAR] pela clínica.",
    objeto: "object-top",
  },
  {
    foto: img.profissionalMagenta,
    alt: "Profissional da Sorriso Clin com uniforme magenta em ambiente clínico",
    nome: "[Nome a confirmar]",
    especialidade: "[Especialidade a confirmar]",
    cro: "CRO [a confirmar]",
    bio: "Apresentação profissional [A CONFIRMAR] pela clínica.",
    objeto: "object-center",
  },
];

export function Equipe() {
  return (
    <section id="equipe" className="bg-ice py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Equipe</p>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            Quem está por trás de cada sorriso.
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            Nomes, especialidades e registros profissionais estão{" "}
            <strong className="font-semibold text-magenta">[A CONFIRMAR]</strong> pela clínica.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {equipe.map((p, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 90}
              className="overflow-hidden rounded-3xl border border-border bg-background"
            >
              <img
                src={p.foto}
                alt={p.alt}
                className={`aspect-[3/4] w-full object-cover ${p.objeto}`}
                width={1080}
                height={1440}
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold">{p.nome}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{p.especialidade}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
                <p className="mt-4 text-xs tracking-wide text-muted-foreground uppercase">{p.cro}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
