import React from "react";
import { useCv } from "../../context/CvContext";

export default function Plantilla4() {
  const { meta, datos, estudios, experiencia, habilidades, tema } = useCv();

  const card = tema === "dark" ? "#1e1e1e" : "#ffffff";
  const bg = tema === "dark" ? "#111" : "#f6f7fb";
  const text = tema === "dark" ? "#eee" : "#222";
  const accent = tema === "dark" ? "#00c4ff" : "#005bbb";

  return (
    <div
      style={{
        width: "900px",
        margin: "auto",
        background: bg,
        padding: 40,
        fontFamily: "Inter, sans-serif",
        color: text,
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: card,
          padding: 20,
          borderRadius: 12,
          marginBottom: 30,
          display: "flex",
          alignItems: "center",
          gap: 20,
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          color: text,
        }}
      >
        {meta?.foto && (
          <img
            src={meta.foto}
            alt="Foto"
            style={{
              width: 110,
              height: 110,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        )}
        <div>
          <h1 style={{ margin: 0 }}>{meta?.nombre || "Nombre no especificado"}</h1>
          <p style={{ margin: 0, opacity: 0.8 }}>{meta?.titulo || "Título profesional"}</p>
        </div>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
        }}
      >
        {/* CONTACTO */}
        <div
          style={{
            background: card,
            padding: 20,
            borderRadius: 10,
            boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h2>Contacto</h2>
          <p>{datos?.email || "No especificado"}</p>
          <p>{datos?.telefono || "No especificado"}</p>
          <p>{datos?.direccion || "No especificado"}</p>
        </div>

        {/* HABILIDADES */}
        <div
          style={{
            background: card,
            padding: 20,
            borderRadius: 10,
            boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h2>Habilidades</h2>
          <ul>
            {habilidades?.length > 0 ? (
              habilidades.map((h) => <li key={h.id}>{h.texto}</li>)
            ) : (
              <p>No hay habilidades registradas.</p>
            )}
          </ul>
        </div>

        {/* ESTUDIOS */}
        <div
          style={{
            background: card,
            padding: 20,
            borderRadius: 10,
            boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h2>Estudios</h2>
          {estudios?.length > 0 ? (
            estudios.map((e) => <p key={e.id}>{e.texto}</p>)
          ) : (
            <p>No hay estudios registrados.</p>
          )}
        </div>

        {/* EXPERIENCIA */}
        <div
          style={{
            background: card,
            padding: 20,
            borderRadius: 10,
            boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h2>Experiencia</h2>
          {experiencia?.length > 0 ? (
            experiencia.map((e) => <p key={e.id}>{e.texto}</p>)
          ) : (
            <p>No hay experiencia registrada.</p>
          )}
        </div>
      </div>
    </div>
  );
}
