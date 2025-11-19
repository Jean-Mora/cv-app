import React from "react";
import { useCv } from "../../context/CvContext";

export default function Plantilla1() {
  const { meta, datos, estudios, experiencia, habilidades, tema } = useCv();

  const isDark = tema === "dark";

  const styles = {
    container: {
      display: "flex",
      background: isDark ? "#1e1e1e" : "#f9f9f9",
      color: isDark ? "#eaeaea" : "#202020",
      padding: "25px",
      borderRadius: "14px",
      width: "900px",
      margin: "0 auto",
      fontFamily: "Arial, Helvetica, sans-serif",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },

    left: {
      width: "30%",
      background: isDark ? "#2c3e50" : "#1e88e5",
      color: "white",
      padding: "25px",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    right: {
      width: "70%",
      padding: "25px",
    },

    foto: {
      width: "100%",
      borderRadius: "12px",
      marginBottom: "20px",
      objectFit: "cover",
    },

    nombre: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "5px",
    },

    titulo: {
      fontSize: "14px",
      opacity: 0.9,
      marginBottom: "20px",
    },

    sectionTitle: {
      fontSize: "20px",
      borderBottom: "2px solid #ccc",
      paddingBottom: "5px",
      marginTop: "20px",
      marginBottom: "15px",
    },

    item: {
      marginBottom: "15px",
    },

    small: {
      fontSize: "12px",
      opacity: 0.8,
    },
  };

  return (
    <div style={styles.container}>
      {/* ==== LADO IZQUIERDO ==== */}
      <aside style={styles.left}>
        {meta?.foto && <img src={meta.foto} alt="foto" style={styles.foto} />}
        <h2 style={styles.nombre}>{meta?.nombre || "Nombre Apellido"}</h2>
        <p style={styles.titulo}>{meta?.titulo || "Profesión o Cargo"}</p>

        <div style={{ width: "100%" }}>
          <h3>Contacto</h3>
          <p>Email: {datos?.email || "correo@example.com"}</p>
          <p>Teléfono: {datos?.telefono || "000000000"}</p>
          <p>Dirección: {datos?.direccion || "Dirección aquí"}</p>

          <h3>Aficiones</h3>
          <p>{datos?.aficiones || "Sin aficiones registradas"}</p>
        </div>
      </aside>

      {/* ==== LADO DERECHO ==== */}
      <main style={styles.right}>
        {/* Estudios */}
        <h2 style={styles.sectionTitle}>Estudios</h2>
        {Array.isArray(estudios) && estudios.length > 0 ? (
          estudios.map((e) => (
            <div key={e.id} style={styles.item}>
              <p>{e.texto}</p>
            </div>
          ))
        ) : (
          <p>No hay estudios registrados.</p>
        )}

        {/* Experiencia */}
        <h2 style={styles.sectionTitle}>Experiencia</h2>
        {Array.isArray(experiencia) && experiencia.length > 0 ? (
          experiencia.map((e) => (
            <div key={e.id} style={styles.item}>
              <p>{e.texto}</p>
            </div>
          ))
        ) : (
          <p>No hay experiencia registrada.</p>
        )}

        {/* Habilidades */}
        <h2 style={styles.sectionTitle}>Habilidades</h2>
        {Array.isArray(habilidades) && habilidades.length > 0 ? (
          <ul>
            {habilidades.map((h) => (
              <li key={h.id} style={{ marginBottom: "6px" }}>
                {h.texto}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay habilidades registradas.</p>
        )}
      </main>
    </div>
  );
}
