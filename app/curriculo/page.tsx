import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currículo - Gustavo",
};

export default function CurriculoPage() {
  return (
    <div className="flex-1 bg-[#a5a5a5] p-5">
      <header className="mb-5 flex gap-5">
        <Image
          src="/images/LinuxLogo.png"
          alt="Imagem da logo do Linux"
          width={250}
          height={250}
        />
        <section className="border-[10px] border-red-600 p-5">
          <h1 className="p-0 py-2.5 text-3xl font-bold text-[#ffd900]">
            Gustavo Tavares Ferreira
          </h1>
          <p className="leading-tight text-[#333]">
            <a
              className="rounded bg-[#919191] px-5 py-2.5 text-[rgb(0,68,255)] no-underline"
              href="https://mail.google.com/mail/u/0/?fs=1&to=ferreiratavaresgustavo@gmail.com&su=Contato&tf=cm"
            >
              Email: ferreiratavaresgustavo@gmail.com
            </a>
          </p>
          <p className="leading-tight text-[#333]">Telefone: (24) 98803-3239</p>
          <p className="leading-tight text-[#333]">Cidade: Petrópolis, RJ</p>
          <p className="leading-tight text-[#333]">
            <a
              className="rounded bg-[#919191] px-5 py-2.5 text-[rgb(0,68,255)] no-underline"
              href="https://github.com/GustavoTFPR"
            >
              GitHub
            </a>
          </p>
        </section>
      </header>

      <div className="mb-5 border-[10px] border-[#09ff00] p-5">
        <h2 className="mt-5 text-2xl font-bold text-[#ffd900]">Sobre Mim</h2>
        <p className="leading-tight text-[#333]">
          Sou um estudante de desenvolvimento de sistemas, tenho contato
          direto com a area de tecnologia desde os 7 anos de idade, quando
          comecei a aprender sobre computadores e programação. Desde então,
          tenho me dedicado a aprimorar minhas habilidades e conhecimentos
          nessa área, buscando sempre estar atualizado com as últimas
          tendências e tecnologias. Sou apaixonado por resolver problemas e
          criar soluções inovadoras, e estou ansioso para aplicar meus
          conhecimentos em projetos reais e contribuir para o crescimento da
          empresa na qual eu for atuar.
        </p>
      </div>

      <div className="mb-5 border-[10px] border-[#8c00ff] p-5">
        <h2 className="mt-5 text-2xl font-bold text-[#ffd900]">Objetivos</h2>
        <p className="leading-tight text-[#333]">
          Buscar uma oportunidade para desenvolver minhas habilidades e
          contribuir para a empresa na qual eu for atuar.
        </p>
        <p className="leading-tight text-[#333]">
          Ingressar no mercado de trabalho como desenvolvedor júnior ou
          estagiário de TI
        </p>
        <p className="leading-tight text-[#333]">
          Aprofundar conhecimentos em JavaScript, java, python, c, c++, React,
          Node.js e outras tecnologias relevantes para o desenvolvimento web.
        </p>
        <p className="leading-tight text-[#333]">
          Contribuir com projetos reais e construir um portfólio sólido no
          GitHub
        </p>
        <p className="leading-tight text-[#333]">
          Evoluir para uma posição de Full-Stack Developer nos próximos 3 anos
        </p>
      </div>

      <div className="mb-5 border-[10px] border-[#ff00aa] p-5">
        <h2 className="mt-5 text-2xl font-bold text-[#ffd900]">
          Formação Acadêmica
        </h2>
        <table className="mt-5 w-1/2 border-collapse">
          <tbody>
            <tr>
              <td className="border border-black p-2.5">Inglês Técnico</td>
              <td className="border border-black p-2.5">Escola</td>
              <td className="border border-black p-2.5">2013</td>
            </tr>
            <tr>
              <td className="border border-black p-2.5">
                Curso Técnico em Informática
              </td>
              <td className="border border-black p-2.5">Senac</td>
              <td className="border border-black p-2.5">2015</td>
            </tr>
            <tr>
              <td className="border border-black p-2.5">
                Ensino Médio Completo
              </td>
              <td className="border border-black p-2.5">Escola</td>
              <td className="border border-black p-2.5">2013</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="border-[10px] border-[#1900ff] p-5">
        <h2 className="mt-5 text-2xl font-bold text-[#ffd900]">
          Experiência Profissional
        </h2>
        <ul>
          <li className="mb-2.5 text-[#333]">
            <strong className="text-[#ffd900]">Empresa Kronemberg</strong>{" "}
            Auxiliar Administrativo
            <p className="leading-tight text-[#333]">
              Atendimento ao cliente, organização de documentos e suporte
              administrativo.
            </p>
          </li>
        </ul>

        <h2 className="mt-5 text-2xl font-bold text-[#ffd900]">
          Habilidades
        </h2>
        <ol className="list-decimal pl-5">
          <li className="mb-2.5 text-[#333]">Banco de dados</li>
          <li className="mb-2.5 text-[#333]">HTML básico</li>
          <li className="mb-2.5 text-[#333]">Lógica de programação</li>
          <li className="mb-2.5 text-[#333]">Banco de dados</li>
          <li className="mb-2.5 text-[#333]">JavaScript</li>
          <li className="mb-2.5 text-[#333]">python</li>
        </ol>
      </div>
    </div>
  );
}
