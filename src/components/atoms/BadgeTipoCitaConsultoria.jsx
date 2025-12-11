export default function BadgeTipoCitaConsultoria({ tipo }) {
    return <span className={`badge badge-${tipo}`}>{tipo}</span>;
}
