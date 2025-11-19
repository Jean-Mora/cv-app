import { useState } from "react";
import { useCv } from "../../context/CvContext";

export default function CrudHabilidades() {
  const { cv, setCv } = useCv();
  const [form, setForm] = useState({ habilidad: "", nivel: 50 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const agregar = () => {
    if (!form.habilidad) return;

    const nuevo = {
      id: Date.now(),
      habilidad: form.habilidad,
      nivel: Number(form.nivel),
    };

    setCv({ ...cv, habilidades: [...cv.habilidades, nuevo] });

    setForm({ habilidad: "", nivel: 50 });
  };

  const eliminar = (id) => {
    const filtrado = cv.habilidades.filter((item) => item.id !== id);
    setCv({ ...cv, habilidades: filtrado });
  };

  return (
    <div className="panel-section">
      <h3>⚙️ Habilidades</h3>

      <label>Habilidad</label>
      <input
        name="habilidad"
        value={form.habilidad}
        onChange={handleChange}
        placeholder="Ej: React, SQL, Liderazgo…"
      />

      <label>Nivel (%)</label>
      <input
        type="range"
        min="1"
        max="100"
        name="nivel"
        value={form.nivel}
        onChange={handleChange}
      />
      <div>{form.nivel}%</div>

      <button onClick={agregar} className="btn-agregar">
        + Agregar habilidad
      </button>

      <ul className="lista-crud">
        {cv.habilidades.map((item) => (
          <li key={item.id}>
            <strong>{item.habilidad}</strong>
            <div className="barra">
              <div className="progreso" style={{ width: `${item.nivel}%` }}></div>
            </div>
            <span>{item.nivel}%</span>

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
