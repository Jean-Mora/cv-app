import React from "react";
import { useCv } from "../../context/CvContext";

export default function SelectorPlantillas() {
  const { plantilla, setPlantilla } = useCv();

  return (
    <section>
      <h3>Plantillas</h3>

      <select
        style={{ width: "100%", padding: 5 }}
        value={plantilla}
        onChange={(e) => setPlantilla(Number(e.target.value))}
      >
        <option value={1}>Plantilla 1 (Elegante)</option>
        <option value={2}>Plantilla 2 (Minimalista)</option>
        <option value={3}>Plantilla 3 (Corporativa)</option>
        <option value={4}>Plantilla 4 (Moderna)</option>
        <option value={5}>Plantilla 5 (Creativa)</option>
      </select>
    </section>
  );
}
