import React, { useState } from "react";
import { useCv } from "../../context/CvContext";

export default function CrudExperiencia() {
  const { experiencia, addExp, updateExp, deleteExp } = useCv();

  const [nuevo, setNuevo] = useState({
    puesto: "",
    empresa: "",
    desde: "",
    hasta: "",
    descripcion: "",
  });

  const handleAdd = () => {
    addExp(nuevo);
    setNuevo({ puesto: "", empresa: "", desde: "", hasta: "", descripcion: "" });
  };

  return (
    <section>
      <h3>Experiencia Laboral</h3>

      {/* Agregar nueva experiencia */}
      <input
        type="text"
        placeholder="Puesto"
        value={nuevo.puesto}
        onChange={(e) => setNuevo({ ...nuevo, puesto: e.target.value })}
        style={{ width: "100%", marginBottom: 5 }}
      />

      <input
        type="text"
        placeholder="Empresa"
        value={nuevo.empresa}
        onChange={(e) => setNuevo({ ...nuevo, empresa: e.target.value })}
        style={{ width: "100%", marginBottom: 5 }}
      />

      <div style={{ display: "flex", gap: 5 }}>
        <input
          type="text"
          placeholder="Desde"
          value={nuevo.desde}
          onChange={(e) => setNuevo({ ...nuevo, desde: e.target.value })}
          style={{ flex: 1 }}
        />
        <input
          type="text"
          placeholder="Hasta"
          value={nuevo.hasta}
          onChange={(e) => setNuevo({ ...nuevo, hasta: e.target.value })}
          style={{ flex: 1 }}
        />
      </div>

      <textarea
        placeholder="Descripción"
        value={nuevo.descripcion}
        onChange={(e) => setNuevo({ ...nuevo, descripcion: e.target.value })}
        style={{ width: "100%", marginTop: 5 }}
      />

      <button style={{ marginTop: 10 }} onClick={handleAdd}>
        Agregar
      </button>

      <hr />

      {/* Lista de experiencias */}
      {experiencia.map((exp) => (
        <div
          key={exp.id}
          style={{
            background: "#fff",
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
          }}
        >
          <input
            type="text"
            value={exp.puesto}
            onChange={(e) => updateExp(exp.id, { puesto: e.target.value })}
            style={{ width: "100%" }}
          />

          <input
            type="text"
            value={exp.empresa}
            onChange={(e) => updateExp(exp.id, { empresa: e.target.value })}
            style={{ width: "100%" }}
          />

          <div style={{ display: "flex", gap: 5 }}>
            <input
              type="text"
              value={exp.desde}
              onChange={(e) => updateExp(exp.id, { desde: e.target.value })}
              style={{ flex: 1 }}
            />
            <input
              type="text"
              value={exp.hasta}
              onChange={(e) => updateExp(exp.id, { hasta: e.target.value })}
              style={{ flex: 1 }}
            />
          </div>

          <textarea
            value={exp.descripcion}
            onChange={(e) => updateExp(exp.id, { descripcion: e.target.value })}
            style={{ width: "100%", marginTop: 5 }}
          />

          <button
            onClick={() => deleteExp(exp.id)}
            style={{
              marginTop: 8,
              background: "red",
              color: "white",
              padding: "5px 10px",
            }}
          >
            eliminar
          </button>
        </div>
      ))}
    </section>
  );
}
