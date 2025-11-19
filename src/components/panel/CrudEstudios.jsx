import { useState } from "react";
import { useCv } from "../../context/CvContext";

export default function CrudEstudios() {
  const { cv, setCv } = useCv();
  const [form, setForm] = useState({
    titulo: "",
    institucion: "",
    año: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const agregar = () => {
    if (!form.titulo || !form.institucion) return;

    const nuevo = { ...form, id: Date.now() };
    setCv({ ...cv, estudios: [...cv.estudios, nuevo] });

    setForm({ titulo: "", institucion: "", año: "" });
  };

  const eliminar = (id) => {
    const filtrado = cv.estudios.filter((item) => item.id !== id);
    setCv({ ...cv, estudios: filtrado });
  };

  return (
    <div className="panel-section">
      <h3>🎓 Estudios</h3>

      <label>Título</label>
      <input
        name="titulo"
        value={form.titulo}
        onChange={handleChange}
        placeholder="Ej: Bachiller, Ingeniería, Certificación…"
      />

      <label>Institución</label>
      <input
        name="institucion"
        value={form.institucion}
        onChange={handleChange}
        placeholder="Ej: Universidad X"
      />

      <label>Año</label>
      <input
        name="año"
        value={form.año}
        onChange={handleChange}
        placeholder="2020"
      />

      <button onClick={agregar} className="btn-agregar">
        + Agregar estudio
      </button>

      <ul className="lista-crud">
        {cv.estudios.map((item) => (
          <li key={item.id}>
            <strong>{item.titulo}</strong>
            <br />
            {item.institucion} — {item.año}
            <button onClick={() => eliminar(item.id)} className="btn-eliminar">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
