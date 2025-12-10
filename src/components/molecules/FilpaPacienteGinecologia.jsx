import React from "react";
import BadgeTipoCita from "../atoms/BadgeTipoCita";

export default function FilaPacienteGinecologia({
    patient,
    index,
    onEliminar,
    onEditar,
    isEditing,
    editForm,
    onEditChange,
    onGuardar,
    onCancelar
}) {

    const formatearFecha = (fechaHora) => {
        if (!fechaHora) return "No especificada";
        return new Date(fechaHora).toLocaleString("es-ES");
    };

    if (isEditing) {
        return (
            <tr>
                <td>{index + 1}</td>
                <td><input name="nombre" value={editForm.nombre} onChange={onEditChange} /></td>
                <td><input name="apellido" value={editForm.apellido} onChange={onEditChange} /></td>
                <td><input name="dni" value={editForm.dni} onChange={onEditChange} /></td>
                <td><input name="telefono" value={editForm.telefono} onChange={onEditChange} /></td>
                <td><input name="direccion" value={editForm.direccion} onChange={onEditChange} /></td>
                <td><input type="datetime-local" name="fechaHora" value={editForm.fechaHora} onChange={onEditChange} /></td>
                <td>
                    <select name="tipoCita" value={editForm.tipoCita} onChange={onEditChange}>
                        <option value="control">Control</option>
                        <option value="emergencia">Emergencia</option>
                        <option value="primera vez">Primera vez</option>
                    </select>
                </td>
                <td>
                    <button onClick={() => onGuardar(index)}>Guardar</button>
                    <button onClick={onCancelar}>Cancelar</button>
                </td>
            </tr>
        );
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{patient.nombre}</td>
            <td>{patient.apellido}</td>
            <td>{patient.dni}</td>
            <td>{patient.telefono}</td>
            <td>{patient.direccion}</td>
            <td>{formatearFecha(patient.fechaHora)}</td>
            <td><BadgeTipoCita tipo={patient.tipoCita} /></td>
            <td>
                <button onClick={() => onEditar(index)}>Editar</button>
                <button onClick={() => onEliminar(index)}>Eliminar</button>
            </td>
        </tr>
    );
}
