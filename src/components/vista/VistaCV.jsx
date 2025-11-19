import React from "react";
import { useCv } from "../../context/CvContext";

// Plantillas
import Plantilla1 from "../plantillas/Plantilla1";
import Plantilla2 from "../plantillas/Plantilla2";
import Plantilla3 from "../plantillas/Plantilla3";
import Plantilla4 from "../plantillas/Plantilla4";
import Plantilla5 from "../plantillas/Plantilla5";

export default function VistaCV() {
  const { plantilla } = useCv();

  const renderPlantilla = () => {
    switch (plantilla) {
      case 1: return <Plantilla1 />;
      case 2: return <Plantilla2 />;
      case 3: return <Plantilla3 />;
      case 4: return <Plantilla4 />;
      case 5: return <Plantilla5 />;
      default: return <Plantilla1 />;
    }
  };

  return (
    <div style={{ padding: 20, width: "100%", height: "100vh", overflowY: "auto" }}>
      {renderPlantilla()}
    </div>
  );
}
