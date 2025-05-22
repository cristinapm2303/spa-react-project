import '../styles/Reservas.css'
import useReservas from '../hooks/useReservas';

const Reservas = () => {

  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const { reservas, loading, error } = useReservas(usuario?.id);

  if (loading) return <p className="perfil-container">Cargando reservas...</p>;
  if (error) return <p className="perfil-container">Error: {error}</p>;

  return (
    <div className="perfil-container">
      <h2>MIS RESERVAS</h2>
      {reservas.length === 0 ? (
        <p className="no-reservas">No tienes reservas activas.</p>
      ) : (
          reservas.map((evento) => (
            <div className="card evento-card mb-3">
            <div className="card-body" key={evento.id}>
                  <h5 className="card-title">Partido en {evento.lugar}</h5>
              <p className="card-text" ><strong>Fecha:</strong> {evento.fecha}</p>
              <p className="card-text"><strong>Hora:</strong> {evento.hora}</p>
              <p className="card-text">
                <strong>Apuntados:</strong> {evento.apuntados.length} / {evento.plazasMaximas}
              </p>
              {evento.suplentes.includes(usuario.id) && (
                <p className="suplente-text">Estás en la lista de suplentes</p>
              )}
              </div>
            </div>
          ))
        )}
      </div>
    );
  };

export default Reservas;

