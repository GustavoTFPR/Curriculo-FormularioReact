import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 bg-zinc-50 p-16 text-center dark:bg-black">
      <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
        Gustavo Tavares Ferreira
      </h1>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          className="rounded-full bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          href="/curriculo"
        >
          Ver Currículo
        </Link>
        <Link
          className="rounded-full border border-solid border-black/[.08] px-6 py-3 font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          href="/formulario"
        >
          Ver Formulário
        </Link>
      </div>
    </div>
  );
}
