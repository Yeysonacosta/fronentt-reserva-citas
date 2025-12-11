import { useNavigate } from "react-router-dom";
import TablaPacientesConsultoria from "../organisms/TablaPacientesConsultoria";

export default function PacientesConsultoriaList() {
    const navigate = useNavigate();

    let patients = [];
    try {
        const stored = localStorage.getItem("ginecologia_patients");
        patients = stored ? JSON.parse(stored).slice(0, 80) : [];
    } catch {
        patients = [];
    }

    return (
        <div className="pacientes-consultoria-container">
            <div className="pacientes-header">
                <h2>Lista de Pacientes - Consultoría Médica</h2>
                <button onClick={() => navigate(-1)}>← Volver</button>
            </div>

            {patients.length === 0 ? (
                <p>No hay pacientes registrados</p>
            ) : (
                <TablaPacientesConsultoria patients={patients} />
            )}
        </div>
    );
}
