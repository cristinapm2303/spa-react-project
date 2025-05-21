import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Reservas.css'

const Reservas = () => {
  const [reservas, setEventos] = useState([]);
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const res = await axios.get('https://mock.apidog.com/m1/878633-860097-default/events');
        const misEventos = res.data.filter(evento =>
          evento.apuntados.includes(usuario.id) || evento.suplentes.includes(usuario.id)
        );
        setEventos(misEventos);
      } catch (err) {
        console.error('Error al obtener eventos:', err);
      }
    };

    fetchEventos();
  }, [usuario.id]);

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

