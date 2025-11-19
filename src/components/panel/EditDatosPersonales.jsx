import { useCv } from "../../context/CvContext";

export default function EditDatosPersonales() {
  const { cv, setCv } = useCv();

  const updateField = (field, value) => {
    setCv({ ...cv, datos: { ...cv.datos, [field]: value } });
  };

  return (
    <div className="panel-section">
      <h3>📇 Datos Personales</h3>

      <label>Email</label>
      <input
        type="email"
        value={cv.datos.email}
        onChange={(e) => updateField("email", e.target.value)}
      />

      <label>Teléfono</label>
      <input
        type="text"
        value={cv.datos.telefono}
        onChange={(e) => updateField("telefono", e.target.value)}
      />

      <label>Dirección</label>
      <input
        type="text"
        value={cv.datos.direccion}
        onChange={(e) => updateField("direccion", e.target.value)}
      />

      <label>LinkedIn</label>
      <input
        type="text"
        value={cv.datos.linkedin}
        onChange={(e) => updateField("linkedin", e.target.value)}
        placeholder="https://linkedin.com/in/usuario"
      />

      <label>GitHub</label>
      <input
        type="text"
        value={cv.datos.github}
        onChange={(e) => updateField("github", e.target.value)}
        placeholder="https://github.com/usuario"
      />

      <label>Otros (web, portfolio, etc.)</label>
      <input
        type="text"
        value={cv.datos.otros}
        onChange={(e) => updateField("otros", e.target.value)}
        placeholder="https://miportfolio.com"
      />
    </div>
  );
}
