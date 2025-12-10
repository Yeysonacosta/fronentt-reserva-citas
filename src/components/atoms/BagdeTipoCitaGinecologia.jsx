import React from "react";

export default function BadgeTipoCitaGinecologia({ tipo }) {
    return (
        <span className={`badge badge-${tipo.replace(" ", "-")}`}>
            {tipo.toUpperCase()}
        </span>
    );
}
