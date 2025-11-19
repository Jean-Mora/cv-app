import React from "react";
import { useCv } from "../../context/CvContext";

export default function EditMeta() {
  const { meta, setMeta, setFotoDesdeFile } = useCv();

  return (
    <section>
      <h3>Información principal</h3>

      <label>Nombre</label>
      <input
        type="text"
        value={meta.nombre}
        onChange={(e) => setMeta({ ...meta, nombre: e.target.value })}
        style={{ width: "100%", marginBottom: "5px" }}
      />

      <label>Título profesional</label>
      <input
        type="text"
        value={meta.titulo}
        onChange={(e) => setMeta({ ...meta, titulo: e.target.value })}
        style={{ width: "100%", marginBottom: "5px" }}
      />

      <label>Foto</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFotoDesdeFile(e.target.files[0])}
      />

      {meta.foto && (
        <img
          src={meta.foto}
          alt="foto"
          style={{ width: "120px", marginTop: "10px", borderRadius: "10px" }}
        />
      )}
    </section>
  );
}
