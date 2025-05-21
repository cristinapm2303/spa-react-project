import { useEffect, useState } from 'react';
import EventoCard from '../components/EventoCard';

const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://mock.apidog.com/m1/878633-860097-default/events')
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener los eventos');
        return res.json();
      })
      .then((data) => {
        setEventos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="perfil-container">Cargando eventos...</p>;
  if (error) return <p className="perfil-container">Error: {error}</p>;

  return (
    <div className="perfil-container">
      <h2>PRÓXIMOS EVENTOS</h2>
      {eventos.length === 0 ? (
        <p>No hay eventos disponibles.</p>
      ) : (
      eventos.map((evento) => (
        <EventoCard key={evento.id} evento={evento} />
      ))
      )}
    </div>
    
  );
};

export default Eventos;
