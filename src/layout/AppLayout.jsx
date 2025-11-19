import React, { useState } from "react";
import Formulario from "../components/Formulario";
import Plantilla1 from "../components/plantillas/Plantilla1";
import Plantilla2 from "../components/plantillas/Plantilla2";
import Plantilla3 from "../components/plantillas/Plantilla3";
import Plantilla4 from "../components/plantillas/Plantilla4";
import Plantilla5 from "../components/plantillas/Plantilla5";

export default function AppLayout() {
  const [plantillaSeleccionada, setPlantillaSeleccionada] = useState(1);

  const renderPlantilla = () => {
    switch (plantillaSeleccionada) {
      case 1: return <Plantilla1 />;
      case 2: return <Plantilla2 />;
      case 3: return <Plantilla3 />;
      case 4: return <Plantilla4 />;
      case 5: return <Plantilla5 />;
      default: return <Plantilla1 />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: "#e6e6e6" }}>
      
      {/* PANEL IZQUIERDO */}
      <aside
        style={{
          width: "30%",
          background: "#ffffff",
          padding: "20px",
          overflowY: "auto",
          boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Generador de CV
        </h1>
        <Formulario />

        <hr style={{ margin: "20px 0" }} />

        {/* Selector de plantillas */}
        <h3 style={{ marginBottom: "10px" }}>Elegir Plantilla</h3>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setPlantillaSeleccionada(num)}
              style={{
                padding: "10px 15px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                cursor: "pointer",
                background:
                  plantillaSeleccionada === num ? "#007bff" : "#f0f0f0",
                color: plantillaSeleccionada === num ? "#fff" : "#000",
                transition: "0.2s",
              }}
            >
              Plantilla {num}
            </button>
          ))}
        </div>
      </aside>

      {/* PANEL DERECHO */}
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {renderPlantilla()}
      </main>
    </div>
  );
}
