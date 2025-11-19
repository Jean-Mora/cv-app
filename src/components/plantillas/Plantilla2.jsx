import React from "react";
import { useCv } from "../../context/CvContext";

export default function Plantilla2() {
  const { meta, datos, estudios, experiencia, habilidades, tema } = useCv();

  const bg = tema === "dark" ? "#0e0e0e" : "#f3f6fc";
  const card = tema === "dark" ? "#1b1b1b" : "#ffffff";
  const text = tema === "dark" ? "#fdfdfd" : "#222";
  const accent = tema === "dark" ? "#6ca8ff" : "#2d66c3";

  return (
    <div
      style={{
        width: "850px",
        margin: "0 auto",
        padding: "40px",
        background: bg,
        fontFamily: "'Inter', sans-serif",
        color: text,
      }}
    >
      {/* HEADER PROFESIONAL */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 25,
          paddingBottom: 25,
          borderBottom: `3px solid ${accent}`,
        }}
      >
        {meta?.foto && (
          <img
            src={meta.foto}
            alt="perfil"
            style={{
              width: 140,
              height: 140,
              borderRadius: "10px",
              objectFit: "cover",
              border: `4px solid ${accent}`,
            }}
          />
        )}

        <div>
          <h1 style={{ margin: 0, fontSize: 34 }}>{meta?.nombre || "Nombre"}</h1>
          <p style={{ margin: "6px 0", fontSize: 20, color: accent }}>
            {meta?.titulo || "Título profesional"}
          </p>
          <p style={{ marginTop: 10, opacity: 0.8 }}>
            {datos?.email || "Email no especificado"} ·{" "}
            {datos?.telefono || "Teléfono no especificado"} ·{" "}
            {datos?.direccion || "Dirección no especificada"}
          </p>
        </div>
      </header>

      {/* CONTENIDO */}
      <div style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 25 }}>
        {/* SOBRE MÍ */}
        <section style={section(card)}>
          <h2 style={sectionTitle(accent)}>Sobre mí</h2>
          <p style={{ fontSize: 15 }}>
            {datos?.aficiones || "Persona responsable, organizada y orientada a resultados."}
          </p>
        </section>

        {/* ESTUDIOS */}
        <section style={section(card)}>
          <h2 style={sectionTitle(accent)}>Formación académica</h2>
          {estudios.length > 0 ? (
            estudios.map((e) => (
              <div
                key={e.id}
                style={{
                  paddingLeft: 15,
                  borderLeft: `4px solid ${accent}`,
                  marginBottom: 15,
                }}
              >
                <p style={{ margin: 0 }}>{e.texto}</p>
              </div>
            ))
          ) : (
            <p>No hay estudios registrados.</p>
          )}
        </section>

        {/* EXPERIENCIA */}
        <section style={section(card)}>
          <h2 style={sectionTitle(accent)}>Experiencia laboral</h2>
          {experiencia.length > 0 ? (
            experiencia.map((e) => (
              <div
                key={e.id}
                style={{
                  paddingLeft: 15,
                  borderLeft: `4px solid ${accent}`,
                  marginBottom: 15,
                }}
              >
                <p style={{ margin: 0 }}>{e.texto}</p>
              </div>
            ))
          ) : (
            <p>No hay experiencia registrada.</p>
          )}
        </section>

        {/* HABILIDADES */}
        <section style={section(card)}>
          <h2 style={sectionTitle(accent)}>Habilidades</h2>
          {habilidades.length > 0 ? (
            <ul style={{ paddingLeft: 20, fontSize: 15 }}>
              {habilidades.map((h) => (
                <li key={h.id} style={{ marginBottom: 5 }}>
                  {h.texto}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay habilidades registradas.</p>
          )}
        </section>
      </div>
    </div>
  );
}

/* HELPERS DE ESTILO */
const section = (card) => ({
  background: card,
  padding: "20px",
  borderRadius: 12,
  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
});

const sectionTitle = (color) => ({
  marginBottom: 15,
  color,
  fontSize: 20,
});
