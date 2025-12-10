import React from "react";
import FilaPacienteGinecologia from "../molecules/FilaPacienteGinecologia";

export default function TablaPacientesGinecologia(props) {
    const {
        patients,
        onEliminar,
        onEditar,
        editingIndex,
        editForm,
        onEditChange,
        onGuardar,
        onCancelar
    } = props;

    return (
        <table className="tabla-pacientes">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>DNI</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                    <th>Fecha y Hora</th>
                    <th>Tipo de Cita</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {patients.map((patient, index) => (
                    <FilaPacienteGinecologia
                        key={index}
                        patient={patient}
                        index={index}
                        onEliminar={onEliminar}
                        onEditar={onEditar}
                        isEditing={editingIndex === index}
                        editForm={editForm}
                        onEditChange={onEditChange}
                        onGuardar={onGuardar}
                        onCancelar={onCancelar}
                    />
                ))}
            </tbody>
        </table>
    );
}
