import React, { useState } from "react";
import { useCv } from "../../context/CvContext";

export default function CrudEstudios() {
  const { estudios, addEstudio, updateEstudio, deleteEstudio } = useCv();
  const [nuevo, setNuevo] = useState({
    titulo: "",
    institucion: "",
    desde: "",
    hasta: "",
    descripcion: "",
  });

  const handleAdd = () => {
    addEstudio(nuevo);
    setNuevo({ titulo: "", institucion: "", desde: "", hasta: "", descripcion: "" });
  };

  return (
    <section>
      <h3>Estudios</h3>

      {/* Agregar estudio */}
      <strong>Nuevo estudio:</strong>
      <input
        type="text"
        placeholder="Título"
        value={nuevo.titulo}
        onChange={(e) => setNuevo({ ...nuevo, titulo: e.target.value })}
        style={{ width: "100%", marginBottom: "5px" }}
      />

      <input
        type="text"
        placeholder="Institución"
        value={nuevo.institucion}
        onChange={(e) => setNuevo({ ...nuevo, institucion: e.target.value })}
        style={{ width: "100%", marginBottom: "5px" }}
      />

      <input
        type="text"
        placeholder="Desde (año)"
        value={nuevo.desde}
        onChange={(e) => setNuevo({ ...nuevo, desde: e.target.value })}
        style={{ width: "49%", marginRight: "2%" }}
      />

      <input
        type="text"
        placeholder="Hasta"
        value={nuevo.hasta}
        onChange={(e) => setNuevo({ ...nuevo, hasta: e.target.value })}
        style={{ width: "49%" }}
      />

      <textarea
        placeholder="Descripción"
        value={nuevo.descripcion}
        onChange={(e) => setNuevo({ ...nuevo, descripcion: e.target.value })}
        style={{ width: "100%" }}
      />

      <button onClick={handleAdd} style={{ marginTop: "10px" }}>
        Agregar
      </button>

      <hr />

      {/* Lista */}
      <strong>Lista de estudios:</strong>

      {estudios.map((est) => (
        <div key={est.id} style={{ background: "#fff", padding: "10px", margin: "5px 0" }}>
          <input
            type="text"
            value={est.titulo}
            onChange={(e) => updateEstudio(est.id, { titulo: e.target.value })}
            style={{ width: "100%" }}
          />

          <input
            type="text"
            value={est.institucion}
            onChange={(e) => updateEstudio(est.id, { institucion: e.target.value })}
            style={{ width: "100%" }}
          />

          <div style={{ display: "flex", gap: "5px" }}>
            <input
              type="text"
              value={est.desde}
              onChange={(e) => updateEstudio(est.id, { desde: e.target.value })}
              style={{ width: "50%" }}
            />

            <input
              type="text"
              value={est.hasta}
              onChange={(e) => updateEstudio(est.id, { hasta: e.target.value })}
              style={{ width: "50%" }}
            />
          </div>

          <textarea
            value={est.descripcion}
            onChange={(e) => updateEstudio(est.id, { descripcion: e.target.value })}
            style={{ width: "100%" }}
          />

          <button
            style={{ marginTop: "5px", background: "red", color: "white" }}
            onClick={() => deleteEstudio(est.id)}
          >
            eliminar
          </button>
        </div>
      ))}
    </section>
  );
}
