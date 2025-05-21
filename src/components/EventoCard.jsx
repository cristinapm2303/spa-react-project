import '../styles/EventoCard.css';
import React, { useState } from 'react';
import axios from 'axios';

const EventoCard = ({ evento }) => {
    const [estadoEvento, setEstadoEvento] = useState(evento);

    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const { apuntados, suplentes, plazasMaximas } = estadoEvento;
    const yaApuntado = estadoEvento.apuntados.includes(usuario.id);
    const esSuplente = suplentes.includes(usuario.id);
  
    const handleApuntarse = async () => {
        try {
            let nuevosApuntados = [...apuntados];
            let nuevosSuplentes = [...suplentes];
      
            if (apuntados.length < plazasMaximas) {
              nuevosApuntados.push(usuario.id);
            } else {
              nuevosSuplentes.push(usuario.id);
            }

          const respuesta = await axios.put(
            `https://mock.apidog.com/m1/878633-860097-default/events/${evento.id}`,
            {
              ...estadoEvento,
              apuntados: nuevosApuntados,
              suplentes: nuevosSuplentes,
            }
          );
    
          setEstadoEvento(respuesta.data);
          alert('¡Te has apuntado correctamente!');
        } catch (err) {
          console.error('Error al apuntarse al evento', err);
          alert('Error al apuntarse. Inténtalo más tarde.');
        }
      };

      const handleCancelar = async () => {
    try {
      const nuevosApuntados = apuntados.filter(id => id !== usuario.id);
      const nuevosSuplentes = suplentes.filter(id => id !== usuario.id);

      const res = await axios.put(
        `https://mock.apidog.com/m1/878633-860097-default/events/${evento.id}`,
        {
          ...estadoEvento,
          apuntados: nuevosApuntados,
          suplentes: nuevosSuplentes,
        }
      );

      setEstadoEvento(res.data);
      alert('Te has dado de baja del evento');
    } catch (err) {
      console.error('Error al cancelar:', err);
      alert('Error al cancelar');
    }
  };

  return (
    <div className="card evento-card mb-3">
      <div className="card-body">
        <h5 className="card-title">🏐 Partido en {estadoEvento.lugar}</h5>
        <p className="card-text">
          <strong>Fecha:</strong> {estadoEvento.fecha}<br />
          <strong>Hora:</strong> {estadoEvento.hora}<br />
          <strong>Plazas:</strong> {plazasMaximas}<br />
          <strong>Apuntados:</strong> {apuntados.length}<br />
          <strong>Suplentes:</strong> {suplentes.length}
        </p>

        {yaApuntado || esSuplente ? (
          <button className="btn btn-danger" onClick={handleCancelar}>
            Cancelar inscripción
          </button>
        ) : (
          <button className="btn btn-warning" onClick={handleApuntarse}>
            Apuntarse
          </button>
        )}

        {esSuplente && (
          <div className="mt-2 text-secondary">
            🕓 Estás en la <strong>lista de suplentes</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventoCard;