import Image from "next/image";
import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Link2,
  GraduationCap,
  Briefcase,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Currículo - Gustavo",
};

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

const skills = [
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

export default function CurriculoPage() {
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
            <p className="mb-3 font-mono text-xs tracking-wider text-slate-500">
              habilidades
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-teal-300/20 bg-teal-300/10 px-2.5 py-1 text-xs font-mono text-teal-200"
                >
                  {skill}
                </span>
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
            <Tab label="objetivos.md" color="amber" />
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
            <div className="flex items-start gap-3">
              <Briefcase size={18} className="mt-1 shrink-0 text-amber-400" />
              <div>
                <h3 className="font-medium text-white">
                  Auxiliar Administrativo{" "}
                  <span className="font-normal text-slate-400">
                    — Empresa Kronemberg
                  </span>
                </h3>
                <p className="mt-1 leading-relaxed text-slate-300">
                  Atendimento ao cliente, organização de documentos e suporte
                  administrativo.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
