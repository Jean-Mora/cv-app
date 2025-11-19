import { useState } from "react";
import { useCv } from "../../context/CvContext";

export default function CrudExperiencia() {
  const { cv, setCv } = useCv();
  const [form, setForm] = useState({
    puesto: "",
    empresa: "",
    inicio: "",
    fin: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const agregar = () => {
    if (!form.puesto || !form.empresa) return;

    const nuevo = { ...form, id: Date.now() };
    setCv({ ...cv, experiencia: [...cv.experiencia, nuevo] });

    setForm({ puesto: "", empresa: "", inicio: "", fin: "", descripcion: "" });
  };

  const eliminar = (id) => {
    const filtrado = cv.experiencia.filter((item) => item.id !== id);
    setCv({ ...cv, experiencia: filtrado });
  };

  return (
    <div className="panel-section">
      <h3>💼 Experiencia Laboral</h3>

      <label>Puesto</label>
      <input
        name="puesto"
        value={form.puesto}
        onChange={handleChange}
        placeholder="Ej: Desarrollador, Administrador…"
      />

      <label>Empresa</label>
      <input
        name="empresa"
        value={form.empresa}
        onChange={handleChange}
        placeholder="Nombre de la empresa"
      />

      <label>Año inicio</label>
      <input
        name="inicio"
        value={form.inicio}
        onChange={handleChange}
        placeholder="Ej: 2021"
      />

      <label>Año fin</label>
      <input
        name="fin"
        value={form.fin}
        onChange={handleChange}
        placeholder="Ej: 2023 o Actual"
      />

      <label>Descripción</label>
      <textarea
        name="descripcion"
        value={form.descripcion}
        onChange={handleChange}
        placeholder="Describe tus funciones y logros…"
      />

      <button onClick={agregar} className="btn-agregar">
        + Agregar experiencia
      </button>

      <ul className="lista-crud">
        {cv.experiencia.map((item) => (
          <li key={item.id}>
            <strong>{item.puesto}</strong> — {item.empresa}
            <br />
            {item.inicio} - {item.fin}
            <p>{item.descripcion}</p>

            <button
              onClick={() => eliminar(item.id)}
              className="btn-eliminar"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
