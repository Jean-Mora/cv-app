import React, { useState } from "react";
import { useCv } from "../../context/CvContext";

export default function CrudHabilidades() {
  const { habilidades, addHab, deleteHab } = useCv();
  const [hab, setHab] = useState("");

  const handleAdd = () => {
    if (!hab.trim()) return;
    addHab(hab);
    setHab("");
  };

  return (
    <section>
      <h3>Habilidades</h3>

      <div style={{ display: "flex", gap: 5 }}>
        <input
          type="text"
          value={hab}
          onChange={(e) => setHab(e.target.value)}
          placeholder="Nueva habilidad"
          style={{ flex: 1 }}
        />

        <button onClick={handleAdd}>Agregar</button>
      </div>

      <ul>
        {habilidades.map((h) => (
          <li key={h.id} style={{ display: "flex", justifyContent: "space-between" }}>
            {h.texto}

            <button
              onClick={() => deleteHab(h.id)}
              style={{ background: "red", color: "white" }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
