import React from "react";
import AppLayout from "../layout/AppLayout";
import VistaPrevia from "../components/vista";

export default function Home() {
  return (
    <AppLayout
      left={<Formulario />}
      right={<VistaPrevia />}
    />
  );
}
