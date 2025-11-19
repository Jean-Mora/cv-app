import React from "react";
import { useCv } from "../../context/CvContext";

export default function Plantilla5() {
  const { meta, datos, estudios, experiencia, habilidades, tema } = useCv();

  const bg = tema === "dark" ? "#121212" : "#ffffff";
  const text = tema === "dark" ? "#e6e6e6" : "#222";
  const accent = tema === "dark" ? "#4dabf7" : "#1976d2";

  const sectionStyle = {
    marginTop: 25,
    padding: 25,
    borderRadius: 16,
    background: tema === "dark" ? "rgba(255,111,97,0.05)" : "rgba(211,47,47,0.03)",
    border: `2px solid ${tema === "dark" ? "rgba(255,111,97,0.2)" : "rgba(211,47,47,0.1)"}`,
    boxShadow: tema === "dark" ? "0 4px 15px rgba(0,0,0,0.3)" : "0 4px 15px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
  };
  const titleStyle = {
    fontSize: 22,
    fontWeight: "700",
    color: accent,
    marginBottom: 18,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    borderBottom: `3px solid ${accent}`,
    paddingBottom: 10,
    display: "inline-block",
  };

  return (
    <div
      style={{
        width: "820px",
        margin: "auto",
        background: bg,
        color: text,
        padding: 40,
        fontFamily: "Segoe UI, Arial, sans-serif",
        borderRadius: 12,
        boxShadow:
          tema === "dark"
            ? "0 0 25px rgba(0,0,0,0.4)"
            : "0 0 20px rgba(0,0,0,0.1)",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: 34 }}>{meta?.nombre || "Nombre Apellido"}</h1>
          <h3 style={{ marginTop: 5, fontWeight: 400, color: accent, fontSize: 18 }}>
            {meta?.titulo || "Título Profesional"}
          </h3>
        </div>
        {meta?.foto && (
          <img
            src={meta.foto}
            alt="Foto de perfil"
            style={{
              width: 130,
              borderRadius: 12,
              objectFit: "cover",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          />
        )}
      </header>

      {/* DATOS */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Datos personales</h2>
        <p>
          <strong>Email:</strong> {datos?.email || "No especificado"} <br />
          <strong>Teléfono:</strong> {datos?.telefono || "No especificado"} <br />
          <strong>Dirección:</strong> {datos?.direccion || "No especificada"}
        </p>
        {datos?.aficiones && (
          <>
            <h4 style={{ marginTop: 10 }}>Aficiones</h4>
            <p>{datos.aficiones}</p>
          </>
        )}
      </section>

      {/* ESTUDIOS */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Estudios</h2>
        {estudios?.length > 0 ? (
          estudios.map((e) => <p key={e.id}>{e.texto}</p>)
        ) : (
          <p>No hay estudios registrados.</p>
        )}
      </section>

      {/* EXPERIENCIA */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Experiencia</h2>
        {experiencia?.length > 0 ? (
          experiencia.map((e) => <p key={e.id}>{e.texto}</p>)
        ) : (
          <p>No hay experiencia registrada.</p>
        )}
      </section>

      {/* HABILIDADES */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Habilidades</h2>
        {habilidades?.length > 0 ? (
          <ul style={{ paddingLeft: 20 }}>
            {habilidades.map((h) => (
              <li key={h.id}>{h.texto}</li>
            ))}
          </ul>
        ) : (
          <p>No hay habilidades registradas.</p>
        )}
      </section>
    </div>
  );
}









