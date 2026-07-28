import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Formulário",
};

const inputClasses =
  "w-full rounded-lg border border-[#1e3a55] bg-[#0d1b2a] px-3.5 py-3 text-sm text-[#8899aa] placeholder:text-[#445566] box-border";

const selectClasses =
  "w-full appearance-none rounded-lg border border-[#1e3a55] bg-[#0d1b2a] px-3.5 py-3 text-sm text-white box-border cursor-pointer";

const labelClasses = "mt-4 mb-1.5 block text-sm text-white";

const interesses = [
  { id: "computacao", label: "Computação" },
  { id: "biologia", label: "Biologia" },
  { id: "meio-ambiente", label: "Meio Ambiente" },
  { id: "engenharia", label: "Engenharia" },
  { id: "historia", label: "História" },
];

export default function FormularioPage() {
  return (
    <div className="flex-1 bg-[#0d1b2a] p-7.5 text-white">
      <form
        action=""
        className="mx-auto max-w-[500px] rounded-2xl border border-[#1e3a55] bg-[#0f2035] p-7.5"
      >
        <fieldset className="mb-5 rounded-xl border border-[#1e3a55] bg-[#112233] p-5">
          <legend className="rounded-full bg-[#39ff14] px-3.5 py-1 text-[13px] font-bold uppercase tracking-wider text-[#0d1b2a] shadow-[0_0_6px_#39ff14,0_0_18px_#39ff14,0_0_40px_rgba(57,255,20,0.6)]">
            Dados Pessoais
          </legend>

          <label className={labelClasses} htmlFor="nome">
            Nome:
          </label>
          <input className={inputClasses} id="nome" type="text" />

          <label className={labelClasses} htmlFor="endereco">
            Endereço:
          </label>
          <input className={inputClasses} id="endereco" type="text" />

          <label className={labelClasses} htmlFor="cidade">
            Cidade:
          </label>
          <input className={inputClasses} id="cidade" type="text" />

          <label className={labelClasses} htmlFor="estado">
            Estado:
          </label>
          <div className="relative">
            <select className={selectClasses} id="estado">
              <option>Rio de Janeiro</option>
              <option>São Paulo</option>
              <option>Minas Gerais</option>
              <option>Bahia</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#39ff14]"
              size={16}
            />
          </div>
        </fieldset>

        <fieldset className="mb-5 rounded-xl border border-[#1e3a55] bg-[#112233] p-5">
          <legend className="rounded-full bg-[#39ff14] px-3.5 py-1 text-[13px] font-bold uppercase tracking-wider text-[#0d1b2a] shadow-[0_0_6px_#39ff14,0_0_18px_#39ff14,0_0_40px_rgba(57,255,20,0.6)]">
            Dados Profissionais
          </legend>

          <label className={labelClasses} htmlFor="natureza-do-cargo">
            Natureza do Cargo:
          </label>
          <div className="relative mb-4">
            <select className={selectClasses} id="natureza-do-cargo">
              <option>Gerência</option>
              <option>x</option>
              <option>y</option>
              <option>z</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#39ff14]"
              size={16}
            />
          </div>

          <label className={labelClasses}>Área de Interesse:</label>

          {interesses.map(({ id, label }) => (
            <div key={id} className="mt-2 flex items-center gap-2">
              <input
                className="h-4 w-4 cursor-pointer accent-[#39ff14]"
                type="checkbox"
                id={id}
                name={id}
              />
              <label className="text-sm text-white" htmlFor={id}>
                {label}
              </label>
            </div>
          ))}

          <label className={labelClasses} htmlFor="bio">
            Mini Currículo:
          </label>
          <textarea
            className={`${inputClasses} min-h-[100px] resize-y`}
            id="bio"
            placeholder=""
            rows={3}
            cols={30}
          />
        </fieldset>

        <button
          className="mr-2.5 mt-2.5 rounded-full bg-[#39ff14] px-7 py-3 text-[15px] font-bold text-[#0d1b2a] shadow-[0_0_6px_#39ff14,0_0_18px_#39ff14,0_0_40px_rgba(57,255,20,0.5)] transition-opacity hover:opacity-85"
          type="submit"
        >
          Enviar
        </button>

        <button
          className="mt-2.5 rounded-full border-2 border-white bg-transparent px-7 py-3 text-[15px] font-bold text-white shadow-[0_0_6px_rgba(255,255,255,0.6),0_0_18px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.15)] transition-opacity hover:opacity-85"
          type="reset"
        >
          Limpar
        </button>
      </form>
    </div>
  );
}
