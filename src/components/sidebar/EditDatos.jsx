import React from "react";
import { useCv } from "../../context/CvContext";

export default function EditDatos() {
  const { datos, setDatos } = useCv();

  const update = (field, value) => {
    setDatos({ ...datos, [field]: value });
  };

  return (
    <section>
      <h3>Datos personales</h3>

      <label>Email</label>
      <input
        type="email"
        value={datos.email}
        onChange={(e) => update("email", e.target.value)}
        style={{ width: "100%", marginBottom: "5px" }}
      />

      <label>Teléfono</label>
      <input
        type="text"
        value={datos.telefono}
        onChange={(e) => update("telefono", e.target.value)}
        style={{ width: "100%", marginBottom: "5px" }}
      />

      <label>Dirección</label>
      <input
        type="text"
        value={datos.direccion}
        onChange={(e) => update("direccion", e.target.value)}
        style={{ width: "100%", marginBottom: "5px" }}
      />

      <label>Aficiones</label>
      <textarea
        value={datos.aficiones}
        onChange={(e) => update("aficiones", e.target.value)}
        style={{ width: "100%" }}
      />
    </section>
  );
}
