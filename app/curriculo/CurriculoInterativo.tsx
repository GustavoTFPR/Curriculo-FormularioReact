"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Link2,
  GraduationCap,
  Briefcase,
  Target,
  Eye,
  EyeOff,
  Search,
  MousePointerClick,
  ChevronDown,
  PlusCircle,
} from "lucide-react";

function Tab({ label, color = "teal" }: { label: string; color?: "teal" | "amber" }) {
  const dot = color === "teal" ? "bg-teal-300" : "bg-amber-400";
  return (
    <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-3">
      <span className={`h-2 w-2 rounded-full ${dot}`} />
      <span className="font-mono text-xs tracking-wider text-slate-400">
        {label}
      </span>
    </div>
  );
}

const skillsIniciais = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Lógica de Programação",
  "Banco de Dados",
  "HTML",
];

const formacao = [
  { titulo: "Ensino Médio Completo", instituicao: "Escola", ano: "2013" },
  { titulo: "Inglês Técnico", instituicao: "Escola", ano: "2013" },
  {
    titulo: "Curso Técnico em Informática",
    instituicao: "Senac",
    ano: "2015",
  },
];

type Experiencia = {
  cargo: string;
  empresa: string;
  tipo: string;
  atual: boolean;
};

const experienciaInicial: Experiencia = {
  cargo: "Auxiliar Administrativo",
  empresa: "Empresa Kronemberg",
  tipo: "CLT",
  atual: false,
};

const tiposContrato = ["Estágio", "CLT", "PJ", "Freelance"];

type NovaExperienciaForm = {
  cargo: string;
  empresa: string;
  tipo: string;
  atual: boolean;
};

const formVazio: NovaExperienciaForm = {
  cargo: "",
  empresa: "",
  tipo: tiposContrato[0],
  atual: false,
};

export default function CurriculoInterativo() {
  // ---- Estado: lista de habilidades (alimentada também pelo formulário) ----
  const [skills, setSkills] = useState<string[]>(skillsIniciais);

  // 1) useState<boolean> — mostra/esconde a seção de objetivos
  const [mostrarObjetivos, setMostrarObjetivos] = useState<boolean>(true);

  // 2) input controlado — filtra as habilidades exibidas
  const [busca, setBusca] = useState<string>("");

  // 3) contador com onClick — conta cliques nas habilidades
  const [cliquesHabilidades, setCliquesHabilidades] = useState<number>(0);

  // ---- Lista de experiências (alimentada pelo formulário controlado) ----
  const [experiencias, setExperiencias] = useState<Experiencia[]>([
    experienciaInicial,
  ]);

  // ---- Formulário controlado para adicionar nova experiência ----
  const [novaExperiencia, setNovaExperiencia] =
    useState<NovaExperienciaForm>(formVazio);
  const [erro, setErro] = useState<string>("");

  const habilidadesFiltradas = skills.filter((skill) =>
    skill.toLowerCase().includes(busca.toLowerCase())
  );

  function handleClickSkill() {
    setCliquesHabilidades((atual) => atual + 1);
  }

  function handleChangeForm(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setNovaExperiencia((atual) => ({
      ...atual,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!novaExperiencia.cargo.trim() || !novaExperiencia.empresa.trim()) {
      setErro("Preencha cargo e empresa antes de adicionar.");
      return;
    }

    setErro("");
    setExperiencias((atual) => [...atual, { ...novaExperiencia }]);

    // Bônus: se o cargo ainda não estiver nas habilidades, também soma como
    // um "skill" rápido, só para mostrar a lista de habilidades crescendo.
    setSkills((atual) =>
      atual.includes(novaExperiencia.cargo)
        ? atual
        : [...atual, novaExperiencia.cargo]
    );

    setNovaExperiencia(formVazio);
  }

  return (
    <div className="flex-1 bg-[#0b0f14] px-4 py-10 text-slate-200 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[280px_1fr] lg:items-start">
        {/* Sidebar */}
        <aside className="rounded-2xl border border-white/10 bg-[#11161d] p-6 lg:sticky lg:top-10">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full border-2 border-teal-300/40 p-1 shadow-[0_0_25px_rgba(94,234,212,0.15)]">
              <Image
                src="/images/LinuxLogo.png"
                alt="Foto de perfil"
                width={96}
                height={96}
                className="rounded-full"
              />
            </div>
            <h1 className="mt-4 text-lg font-semibold text-white">
              Gustavo Tavares Ferreira
            </h1>
            <p className="mt-1 font-mono text-xs tracking-wide text-teal-300">
              dev.web // estudante
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm">
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=ferreiratavaresgustavo@gmail.com&su=Contato&tf=cm"
              className="flex items-center gap-2.5 text-slate-300 transition-colors hover:text-teal-300"
            >
              <Mail size={15} className="shrink-0 text-slate-500" />
              <span className="break-all">ferreiratavaresgustavo@gmail.com</span>
            </a>
            <p className="flex items-center gap-2.5 text-slate-300">
              <Phone size={15} className="shrink-0 text-slate-500" />
              (24) 98803-3239
            </p>
            <p className="flex items-center gap-2.5 text-slate-300">
              <MapPin size={15} className="shrink-0 text-slate-500" />
              Petrópolis, RJ
            </p>
            <a
              href="https://github.com/GustavoTFPR"
              className="flex items-center gap-2.5 text-slate-300 transition-colors hover:text-teal-300"
            >
              <Link2 size={15} className="shrink-0 text-slate-500" />
              GustavoTFPR
            </a>
          </div>

          <div className="mt-6 border-t border-white/10 pt-6">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-mono text-xs tracking-wider text-slate-500">
                habilidades ({habilidadesFiltradas.length}/{skills.length})
              </p>
              <span className="flex items-center gap-1 font-mono text-xs text-amber-300">
                <MousePointerClick size={13} />
                {cliquesHabilidades}
              </span>
            </div>

            {/* Input controlado: busca/filtra habilidades */}
            <div className="relative mb-3">
              <Search
                size={14}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar habilidade..."
                className="w-full rounded-lg border border-white/10 bg-[#0b0f14] py-2 pl-8 pr-3 text-xs text-slate-200 placeholder:text-slate-600 focus:border-teal-300/40 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {habilidadesFiltradas.length === 0 && (
                <span className="text-xs text-slate-500">
                  Nenhuma habilidade encontrada.
                </span>
              )}
              {habilidadesFiltradas.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={handleClickSkill}
                  title="Clique para contar"
                  className="rounded-full border border-teal-300/20 bg-teal-300/10 px-2.5 py-1 text-xs font-mono text-teal-200 transition-colors hover:bg-teal-300/20"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex flex-col gap-6">
          <section className="rounded-2xl border border-white/10 bg-[#11161d] p-6 sm:p-8">
            <Tab label="sobre-mim.md" />
            <p className="leading-relaxed text-slate-300">
              Sou um estudante de desenvolvimento de sistemas, tenho contato
              direto com a área de tecnologia desde os 7 anos de idade, quando
              comecei a aprender sobre computadores e programação. Desde
              então, tenho me dedicado a aprimorar minhas habilidades e
              conhecimentos nessa área, buscando sempre estar atualizado com
              as últimas tendências e tecnologias. Sou apaixonado por
              resolver problemas e criar soluções inovadoras, e estou ansioso
              para aplicar meus conhecimentos em projetos reais e contribuir
              para o crescimento da empresa na qual eu for atuar.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#11161d] p-6 sm:p-8">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="font-mono text-xs tracking-wider text-slate-400">
                  objetivos.md
                </span>
              </div>
              {/* Botão que mostra/esconde a seção (useState<boolean>) */}
              <button
                type="button"
                onClick={() => setMostrarObjetivos((atual) => !atual)}
                className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 transition-colors hover:border-amber-400/40 hover:text-amber-300"
              >
                {mostrarObjetivos ? <EyeOff size={13} /> : <Eye size={13} />}
                {mostrarObjetivos ? "Ocultar" : "Mostrar"}
              </button>
            </div>

            {mostrarObjetivos && (
              <ul className="flex flex-col gap-3">
                {[
                  "Buscar uma oportunidade para desenvolver minhas habilidades e contribuir para a empresa na qual eu for atuar.",
                  "Ingressar no mercado de trabalho como desenvolvedor júnior ou estagiário de TI.",
                  "Aprofundar conhecimentos em JavaScript, Java, Python, C, C++, React, Node.js e outras tecnologias relevantes para o desenvolvimento web.",
                  "Contribuir com projetos reais e construir um portfólio sólido no GitHub.",
                  "Evoluir para uma posição de Full-Stack Developer nos próximos 3 anos.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-slate-300">
                    <Target
                      size={16}
                      className="mt-0.5 shrink-0 text-amber-400"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#11161d] p-6 sm:p-8">
            <Tab label="formacao.ts" />
            <div className="flex flex-col">
              {formacao.map((item, index) => (
                <div key={item.titulo} className="relative pb-6 pl-8 last:pb-0">
                  {index !== formacao.length - 1 && (
                    <span className="absolute left-[5px] top-3 h-full w-px bg-white/10" />
                  )}
                  <span className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-teal-300 bg-[#11161d]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-medium text-white">{item.titulo}</h3>
                    <span className="font-mono text-xs text-teal-300">
                      {item.ano}
                    </span>
                  </div>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm text-slate-400">
                    <GraduationCap size={13} />
                    {item.instituicao}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#11161d] p-6 sm:p-8">
            <Tab label="experiencia.md" color="amber" />
            <div className="flex flex-col gap-5">
              {experiencias.map((exp, index) => (
                <div key={`${exp.cargo}-${index}`} className="flex items-start gap-3">
                  <Briefcase size={18} className="mt-1 shrink-0 text-amber-400" />
                  <div>
                    <h3 className="font-medium text-white">
                      {exp.cargo}{" "}
                      <span className="font-normal text-slate-400">
                        — {exp.empresa}
                      </span>
                    </h3>
                    <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-400">
                      <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-xs text-teal-300">
                        {exp.tipo}
                      </span>
                      {exp.atual && (
                        <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 font-mono text-xs text-amber-300">
                          emprego atual
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ---- Formulário controlado para adicionar nova experiência ---- */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 rounded-xl border border-white/10 bg-[#0b0f14] p-5"
            >
              <p className="mb-4 flex items-center gap-2 font-mono text-xs tracking-wider text-slate-500">
                <PlusCircle size={14} className="text-teal-300" />
                adicionar-experiencia.tsx
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="cargo"
                    className="mb-1.5 block text-sm text-slate-300"
                  >
                    Cargo
                  </label>
                  <input
                    id="cargo"
                    name="cargo"
                    type="text"
                    value={novaExperiencia.cargo}
                    onChange={handleChangeForm}
                    placeholder="Ex.: Desenvolvedor Júnior"
                    className="w-full rounded-lg border border-white/10 bg-[#11161d] px-3 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:border-teal-300/40 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="empresa"
                    className="mb-1.5 block text-sm text-slate-300"
                  >
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    value={novaExperiencia.empresa}
                    onChange={handleChangeForm}
                    placeholder="Ex.: Acme LTDA"
                    className="w-full rounded-lg border border-white/10 bg-[#11161d] px-3 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:border-teal-300/40 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tipo"
                    className="mb-1.5 block text-sm text-slate-300"
                  >
                    Tipo de contrato
                  </label>
                  <div className="relative">
                    <select
                      id="tipo"
                      name="tipo"
                      value={novaExperiencia.tipo}
                      onChange={handleChangeForm}
                      className="w-full appearance-none rounded-lg border border-white/10 bg-[#11161d] px-3 py-2.5 text-sm text-slate-200 focus:border-teal-300/40 focus:outline-none"
                    >
                      {tiposContrato.map((tipo) => (
                        <option key={tipo} value={tipo}>
                          {tipo}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-teal-300"
                      size={16}
                    />
                  </div>
                </div>

                <div className="flex items-end pb-2.5">
                  <label className="flex items-center gap-2 text-sm text-slate-300">
                    <input
                      type="checkbox"
                      name="atual"
                      checked={novaExperiencia.atual}
                      onChange={handleChangeForm}
                      className="h-4 w-4 cursor-pointer accent-teal-300"
                    />
                    Este é meu emprego atual
                  </label>
                </div>
              </div>

              {erro && (
                <p className="mt-3 rounded-lg border border-red-400/30 bg-red-400/10 px-3 py-2 text-sm text-red-300">
                  {erro}
                </p>
              )}

              <button
                type="submit"
                className="mt-4 rounded-full bg-teal-300 px-6 py-2.5 text-sm font-semibold text-[#0b0f14] transition-opacity hover:opacity-85"
              >
                Adicionar experiência
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
