import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import ConsultoriaMedica from "./components/pages/ConsultoriaMedica";
import Pediatria from "./components/pages/Pediatria";
import PacientesList from "./components/pages/PacienteList";
import PacientesGinecologiaList from "./components/pages/PacientesGinecologiaList";
import PacientesConsultoriaList from "./components/pages/PacientesConsultoriaList";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ConsultoriaMedica" element={<ConsultoriaMedica />} />
        <Route path="/pediatria" element={<Pediatria />} />
        <Route path="/pediatria/pacientes" element={<PacientesList />} />
        <Route path="/pacientes-ginecologia" element={<PacientesGinecologiaList/>} />
        <Route path="/consultoria/pacientes" element={<PacientesConsultoriaList />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
