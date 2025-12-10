import React, { useState } from "react";
import TablaPacientesGinecologia from "../organisms/TablaPacientesGinecologia";

export default function GinecologiaPacientesList() {
    const [patients, setPatients] = useState(() => {
        const storedPatients = localStorage.getItem("ginecologiaPatients");
        return storedPatients ? JSON.parse(storedPatients) : [];
    });

    const [editingIndex, setEditingIndex] = useState(null);
    const [editForm, setEditForm] = useState({});

    const eliminarPaciente = (index) => {
        if (window.confirm("¿Está seguro de eliminar este paciente?")) {
            const updated = patients.filter((_, i) => i !== index);
            localStorage.setItem("ginecologiaPatients", JSON.stringify(updated));
            setPatients(updated);
        }
    };

    const editarPaciente = (index) => {
        setEditingIndex(index);
        setEditForm({ ...patients[index] });
    };

    const guardarEdicion = (index) => {
        const updated = [...patients];
        updated[index] = editForm;
        localStorage.setItem("ginecologiaPatients", JSON.stringify(updated));
        setPatients(updated);
        setEditingIndex(null);
        setEditForm({});
    };

    const cancelarEdicion = () => {
        setEditingIndex(null);
        setEditForm({});
    };

    const handleEditChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    return (
        <div className="pacientes-list-container">
            <div className="pacientes-header">
                <h1>Lista de Pacientes de Ginecología</h1>
                <button onClick={() => window.history.back()} className="btn-volver">
                    ← Volver
                </button>
            </div>

            {patients.length === 0 ? (
                <p>📋 No hay pacientes registrados</p>
            ) : (
                <TablaPacientesGinecologia
                    patients={patients}
                    onEliminar={eliminarPaciente}
                    onEditar={editarPaciente}
                    editingIndex={editingIndex}
                    editForm={editForm}
                    onEditChange={handleEditChange}
                    onGuardar={guardarEdicion}
                    onCancelar={cancelarEdicion}
                />
            )}
        </div>
    );
}
