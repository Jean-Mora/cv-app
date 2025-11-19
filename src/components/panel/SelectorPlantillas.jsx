import { useCv } from "../../context/CvContext";

export default function SelectorPlantillas() {
  const { cv, setCv } = useCv();

  const cambiarPlantilla = (num) => {
    setCv({ ...cv, plantilla: num });
  };

  return (
    <div className="panel-section">
      <h3>🖼 Seleccionar Plantilla</h3>

      <div className="plantillas-grid">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`btn-plantilla ${
              cv.plantilla === num ? "plantilla-activa" : ""
            }`}
            onClick={() => cambiarPlantilla(num)}
          >
            Plantilla {num}
          </button>
        ))}
      </div>
    </div>
  );
}
