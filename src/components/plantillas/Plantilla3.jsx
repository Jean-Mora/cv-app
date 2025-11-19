import React from "react";
import { useCv } from "../../context/CvContext";

export default function Plantilla3() {
  const { meta, datos, estudios, experiencia, habilidades, tema } = useCv();

  const bg = tema === "dark" ? "#121212" : "#ffffff";
  const text = tema === "dark" ? "#e6e6e6" : "#222";
  const accent = tema === "dark" ? "#4dabf7" : "#1976d2";

  const sectionStyle = {
    marginTop: 30,
    padding: "20px",
    borderRadius: 12,
    background: tema === "dark" ? "#1b1b1b" : "#f9f9f9",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: accent,
    marginBottom: 15,
  };

  return (
    <div
      style={{
        width: "820px",
        margin: "auto",
        background: bg,
        color: text,
        padding: "40px",
        fontFamily: "Segoe UI, Arial, sans-serif",
        lineHeight: "1.6",
        borderRadius: "12px",
        boxShadow:
          tema === "dark"
            ? "0 0 25px rgba(0,0,0,0.4)"
            : "0 0 20px rgba(0,0,0,0.1)",
      }}
    >
      {/* ENCABEZADO */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "34px" }}>
            {meta?.nombre || "Nombre Apellido"}
          </h1>
          <h3
            style={{
              marginTop: 5,
              fontWeight: 400,
              color: accent,
              fontSize: "18px",
            }}
          >
            {meta?.titulo || "Título Profesional"}
          </h3>
        </div>

        {meta?.foto && (
          <img
            src={meta.foto}
            alt="Foto de perfil"
            style={{
              width: 130,
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          />
        )}
      </header>

      {/* DATOS PERSONALES */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Datos personales</h2>
        <p style={{ fontSize: "15px" }}>
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
          estudios.map((e) => (
            <p key={e.id}>{e.texto}</p>
          ))
        ) : (
          <p>No hay estudios registrados.</p>
        )}
      </section>

      {/* EXPERIENCIA */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Experiencia</h2>
        {experiencia?.length > 0 ? (
          experiencia.map((e) => (
            <p key={e.id}>{e.texto}</p>
          ))
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
              <li key={h.id} style={{ marginBottom: 5 }}>
                {h.texto || "Habilidad sin nombre"}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay habilidades registradas.</p>
        )}
      </section>
    </div>
  );
}
