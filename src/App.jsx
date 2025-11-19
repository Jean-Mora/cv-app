import React from "react";
import AppLayout from "./layout/AppLayout";
import { CvProvider } from "./context/CvContext";

export default function App() {
  return (
    <CvProvider>
      <AppLayout />
    </CvProvider>
  );
}
