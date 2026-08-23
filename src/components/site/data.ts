import logo from "@/assets/logo-sorrisoclin.png.asset.json";
import logoBranco from "@/assets/logo-sorrisoclin-branco.png.asset.json";
import dentistaJaleco from "@/assets/dentista-jaleco.jpg.asset.json";
import profissionalMagenta from "@/assets/profissional-magenta.jpg.asset.json";
import sedacao from "@/assets/sedacao-consciente.jpg.asset.json";
import sorrisoPaciente from "@/assets/sorriso-paciente.jpg.asset.json";
import antesDepois from "@/assets/antes-depois.jpg.asset.json";
import fotografiaOdonto from "@/assets/fotografia-odontologica.jpg.asset.json";
import casoAntes from "@/assets/caso-antes.jpg.asset.json";
import casoDepois from "@/assets/caso-depois.jpg.asset.json";

export const img = {
  logo: logo.url,
  logoBranco: logoBranco.url,
  dentistaJaleco: dentistaJaleco.url,
  profissionalMagenta: profissionalMagenta.url,
  sedacao: sedacao.url,
  sorrisoPaciente: sorrisoPaciente.url,
  antesDepois: antesDepois.url,
  fotografiaOdonto: fotografiaOdonto.url,
  casoAntes: casoAntes.url,
  casoDepois: casoDepois.url,
};

export const clinica = {
  nome: "Sorriso Clin",
  endereco: "Av. Gonçalo Botelho de Campos, 2446",
  bairro: "Cristo Rei — Várzea Grande — MT",
  cep: "78118-070",
  telefone: "(65) 3685-7299",
  telefoneLink: "tel:+556536857299",
  instagram: "https://www.instagram.com/sorrisoclin_varzeagrande/",
  nota: "4,5",
  avaliacoes: 27,
  mapsBusca:
    "https://www.google.com/maps/search/?api=1&query=Av.+Gon%C3%A7alo+Botelho+de+Campos%2C+2446+-+Cristo+Rei%2C+V%C3%A1rzea+Grande+-+MT%2C+78118-070",
  mapsRota:
    "https://www.google.com/maps/dir/?api=1&destination=Av.+Gon%C3%A7alo+Botelho+de+Campos%2C+2446+-+Cristo+Rei%2C+V%C3%A1rzea+Grande+-+MT%2C+78118-070",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.%20Gon%C3%A7alo%20Botelho%20de%20Campos%2C%202446%20-%20Cristo%20Rei%2C%20V%C3%A1rzea%20Grande%20-%20MT%2C%2078118-070&output=embed",
};

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];
