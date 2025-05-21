import { useEffect, useState } from 'react';
import '../styles/UserProfile.css';

const Users = () => {
  const [jugadores, setJugadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://mock.apidog.com/m1/878633-860097-default/users')
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener los jugadores');
        return res.json();
      })
      .then((data) => {
        setJugadores(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="perfil-container">Cargando jugadores...</p>;
  if (error) return <p className="perfil-container">Error: {error}</p>;

  return (
    <div className="perfil-container">
      <h2>LISTADO DE JUGADORES</h2>
      {jugadores.length === 0 ? (
        <p>No hay jugadores disponibles.</p>
      ) : (
        <ul>
          {jugadores.map((jugador) => (
            <li key={jugador.id} className="jugador-card">
              <div className="jugador-nombre-usuario"><strong>Usuario:</strong> {jugador.nombre_usuario}</div>
              <div className="jugador-nombre-completo"><strong>Nombre:</strong> {jugador.nombre} {jugador.apellidos}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
  