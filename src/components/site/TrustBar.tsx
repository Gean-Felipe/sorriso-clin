import { Reveal } from "./Reveal";

const itens = [
  { valor: "[A CONFIRMAR]", label: "Anos de experiência" },
  { valor: "4,5 ★", label: "Avaliação no Google" },
  { valor: "27", label: "Avaliações" },
  { valor: "Várzea Grande", label: "MT" },
];

export function TrustBar() {
  return (
    <section aria-label="Indicadores de confiança" className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:py-12">
        {itens.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 70}
            className="px-2 text-center lg:border-r lg:border-border lg:last:border-r-0"
          >
            <p className="font-display text-2xl leading-tight font-extrabold text-deep sm:text-3xl">
              {item.valor}
            </p>
            <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase sm:text-sm">
              {item.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
