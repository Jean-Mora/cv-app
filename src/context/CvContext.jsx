import React, { createContext, useContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

/**
 * CvContext
 * Provee:
 *  - meta: { nombre, titulo, foto } 
 *  - datos: { email, telefono, direccion, aficiones }
 *  - estudios: array de { id, texto }
 *  - experiencia: array de { id, texto }
 *  - habilidades: array de { id, texto }
 *  - tema: 'light' | 'dark'
 *  - plantilla: 'plantilla1'..'plantilla5'
 */

const CvContext = createContext(null);

export function CvProvider({ children }) {
  // Datos básicos / meta
  const [meta, setMeta] = useLocalStorage("cv:meta", {
    nombre: "Tu Nombre",
    titulo: "Título profesional",
    foto: ""
  });

  // Datos personales
  const [datos, setDatos] = useLocalStorage("cv:datos", {
    email: "",
    telefono: "",
    direccion: "",
    aficiones: ""
  });

  // Estudios
  const [estudios, setEstudios] = useLocalStorage("cv:estudios", []);

  // Experiencia
  const [experiencia, setExperiencia] = useLocalStorage("cv:experiencia", []);

  // Habilidades
  const [habilidades, setHabilidades] = useLocalStorage("cv:habilidades", []);

  // Tema
  const [tema, setTema] = useLocalStorage("cv:tema", "light");

  // Plantilla
  const [plantilla, setPlantilla] = useLocalStorage("cv:plantilla", "plantilla1");

  /* ---------- Helpers / CRUD ---------- */
  const uid = (prefix = "") =>
    `${prefix}${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;

  // Estudios CRUD
  const addEstudio = (texto) =>
    setEstudios((prev) => [...prev, { id: uid("est-"), texto }]);

  const updateEstudio = (id, texto) =>
    setEstudios((prev) => prev.map((e) => (e.id === id ? { ...e, texto } : e)));

  const deleteEstudio = (id) =>
    setEstudios((prev) => prev.filter((e) => e.id !== id));

  // Experiencia CRUD
  const addExperiencia = (texto) =>
    setExperiencia((prev) => [...prev, { id: uid("exp-"), texto }]);

  const updateExperiencia = (id, texto) =>
    setExperiencia((prev) => prev.map((e) => (e.id === id ? { ...e, texto } : e)));

  const deleteExperiencia = (id) =>
    setExperiencia((prev) => prev.filter((e) => e.id !== id));

  // Habilidades CRUD
  const addHabilidad = (texto) =>
    setHabilidades((prev) => [...prev, { id: uid("hab-"), texto }]);

  const updateHabilidad = (id, texto) =>
    setHabilidades((prev) => prev.map((h) => (h.id === id ? { ...h, texto } : h)));

  const deleteHabilidad = (id) =>
    setHabilidades((prev) => prev.filter((h) => h.id !== id));

  // Foto desde archivo
  const setFotoDesdeFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setMeta((prev) => ({ ...prev, foto: reader.result })); // Base64
    };
    reader.readAsDataURL(file);
  };

  // Export / Import
  const exportAll = () =>
    JSON.stringify(
      { meta, datos, estudios, experiencia, habilidades, tema, plantilla },
      null,
      2
    );

  const importAll = (obj) => {
    if (!obj) return;
    if (obj.meta) setMeta(obj.meta);
    if (obj.datos) setDatos(obj.datos);
    if (Array.isArray(obj.estudios)) setEstudios(obj.estudios);
    if (Array.isArray(obj.experiencia)) setExperiencia(obj.experiencia);
    if (Array.isArray(obj.habilidades)) setHabilidades(obj.habilidades);
    if (obj.tema) setTema(obj.tema);
    if (obj.plantilla) setPlantilla(obj.plantilla);
  };

  const value = useMemo(
    () => ({
      meta,
      setMeta,
      datos,
      setDatos,
      estudios,
      addEstudio,
      updateEstudio,
      deleteEstudio,
      experiencia,
      addExperiencia,
      updateExperiencia,
      deleteExperiencia,
      habilidades,
      addHabilidad,
      updateHabilidad,
      deleteHabilidad,
      tema,
      setTema,
      plantilla,
      setPlantilla,
      setFotoDesdeFile,
      exportAll,
      importAll,
    }),
    [meta, datos, estudios, experiencia, habilidades, tema, plantilla]
  );

  return (
    <CvContext.Provider value={value}>{children}</CvContext.Provider>
  );
}

export function useCv() {
  const ctx = useContext(CvContext);
  if (!ctx) throw new Error("useCv must be used within CvProvider");
  return ctx;
}
