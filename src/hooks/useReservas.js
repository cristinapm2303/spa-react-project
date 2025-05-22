// src/hooks/useReservas.js
import { useState, useEffect } from 'react';

const useReservas = (usuarioId) => {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!usuarioId) return;

    fetch('https://mock.apidog.com/m1/878633-860097-default/events')
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener los eventos');
        return res.json();
      })
      .then((data) => {
        const reservasUsuario = data.filter(evento =>
          evento.apuntados.includes(usuarioId) || evento.suplentes.includes(usuarioId)
        );
        setReservas(reservasUsuario);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [usuarioId]);

  return { reservas, loading, error };
};

export default useReservas;
