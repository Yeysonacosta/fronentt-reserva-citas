import React from "react";
import FilaPacienteConsultoria from "../molecules/FilaPacienteConsultoria";

export default function TablaPacientesConsultoria({ patients }) {
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
                    <th>Tipo</th>
                </tr>
            </thead>
            <tbody>
                {patients.map((p, i) => (
                    <FilaPacienteConsultoria
                        key={i}
                        patient={p}
                        index={i}
                    />
                ))}
            </tbody>
        </table>
    );
}
