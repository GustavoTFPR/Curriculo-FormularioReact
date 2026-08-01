import type { Metadata } from "next";
import CurriculoInterativo from "./CurriculoInterativo";

export const metadata: Metadata = {
  title: "Currículo - Gustavo",
};

export default function CurriculoPage() {
  return <CurriculoInterativo />;
}
