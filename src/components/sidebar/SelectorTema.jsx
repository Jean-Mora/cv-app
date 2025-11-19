import React from "react";
import { useCv } from "../../context/CvContext";

export default function SelectorTema() {
  const { tema, setTema } = useCv();

  return (
    <section>
      <h3>Tema</h3>

      <select
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        style={{ width: "100%", padding: 5 }}
      >
        <option value="light">Claro</option>
        <option value="dark">Oscuro</option>
      </select>
    </section>
  );
}
