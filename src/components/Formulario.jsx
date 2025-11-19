import React from "react";
import { useCv } from "../context/CvContext";

export default function Formulario() {
  const {
    meta,
    setMeta,
    datos,
    setDatos,
    estudios,
    addEstudio,
    updateEstudio,
    deleteEstudio,
    experiencia,
    addExperiencia,
    updateExperiencia,
    deleteExperiencia,
    habilidades,
    addHabilidad,
    updateHabilidad,
    deleteHabilidad,
    setFotoDesdeFile,
  } = useCv();

  const inputStyle = {
    width: "100%",
    padding: "8px 10px",
    margin: "5px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const btnStyle = {
    padding: "6px 12px",
    margin: "5px 0",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    background: "#007bff",
    color: "#fff",
    fontWeight: "bold",
  };

  const deleteBtnStyle = { ...btnStyle, background: "#dc3545", marginLeft: "10px" };

  // Renderizar listas dinámicas (Habilidades, Estudios, Experiencia)
  const renderList = (items, addFn, updateFn, deleteFn, label) => (
    <div style={{ marginBottom: "30px" }}>
      <h3>{label}</h3>
      <button style={btnStyle} onClick={() => addFn(`Nuevo ${label.slice(0, -1)}`)}>
        + Agregar {label.slice(0, -1)}
      </button>
      {items.map((item) => (
        <div key={item.id} style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
          <input
            style={{ ...inputStyle, flex: 1 }}
            type="text"
            value={item.texto}
            onChange={(e) => updateFn(item.id, e.target.value)}
          />
          <button style={deleteBtnStyle} onClick={() => deleteFn(item.id)}>❌</button>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", background: "#f9f9f9", borderRadius: "10px" }}>
      <h2>Información Personal</h2>
      <input
        style={inputStyle}
        type="text"
        placeholder="Nombre"
        value={meta.nombre}
        onChange={(e) => setMeta({ ...meta, nombre: e.target.value })}
      />
      <input
        style={inputStyle}
        type="text"
        placeholder="Título Profesional"
        value={meta.titulo}
        onChange={(e) => setMeta({ ...meta, titulo: e.target.value })}
      />
      <input
        style={inputStyle}
        type="file"
        accept="image/*"
        onChange={(e) => setFotoDesdeFile(e.target.files[0])}
      />
      {meta.foto && <img src={meta.foto} alt="Foto" style={{ width: "120px", marginTop: "10px", borderRadius: "10px" }} />}

      <div style={{ marginBottom: "30px" }}>
        <h2>Datos de Contacto</h2>
        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          value={datos.email}
          onChange={(e) => setDatos({ ...datos, email: e.target.value })}
        />
        <input
          style={inputStyle}
          type="text"
          placeholder="Teléfono"
          value={datos.telefono}
          onChange={(e) => setDatos({ ...datos, telefono: e.target.value })}
        />
        <input
          style={inputStyle}
          type="text"
          placeholder="Dirección"
          value={datos.direccion}
          onChange={(e) => setDatos({ ...datos, direccion: e.target.value })}
        />
        <input
          style={inputStyle}
          type="text"
          placeholder="Aficiones"
          value={datos.aficiones}
          onChange={(e) => setDatos({ ...datos, aficiones: e.target.value })}
        />
      </div>

      {renderList(habilidades, addHabilidad, updateHabilidad, deleteHabilidad, "Habilidades")}
      {renderList(estudios, addEstudio, updateEstudio, deleteEstudio, "Estudios")}
      {renderList(experiencia, addExperiencia, updateExperiencia, deleteExperiencia, "Experiencia")}
    </div>
  );
}
