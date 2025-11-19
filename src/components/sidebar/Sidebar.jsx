import React from "react";
import EditMeta from "./EditMeta";
import EditDatos from "./EditDatos";
import CrudEstudios from "./CrudEstudios";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "320px",
        padding: "20px",
        background: "#f7f7f7",
        borderRight: "1px solid #ddd",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <h2>Editor del CV</h2>

      <EditMeta />
      <hr />

      <EditDatos />
      <hr />

      <CrudEstudios />
      <hr />
    </aside>
  );
}
