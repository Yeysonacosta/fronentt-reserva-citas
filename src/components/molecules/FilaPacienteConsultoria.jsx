import React from "react";
import BadgeTipoCitaConsultoria from "../atoms/BadgeTipoCitaConsultoria";

export default function FilaPacienteConsultoria({ patient, index }) {
    const fecha = patient.fechaHora
        ? new Date(patient.fechaHora).toLocaleString()
        : "—";

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{patient.nombre}</td>
            <td>{patient.apellido}</td>
            <td>{patient.dni}</td>
            <td>{patient.telefono}</td>
            <td>{patient.direccion}</td>
            <td>{fecha}</td>
            <td>
                <BadgeTipoCitaConsultoria tipo={patient.tipoCita} />
            </td>
        </tr>
    );
}
