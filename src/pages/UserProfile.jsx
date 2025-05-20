import { useEffect, useState } from 'react';
import '../styles/UserProfile.css';

function PerfilUsuario({ id }) {

  const usuarioId = JSON.parse(localStorage.getItem('usuario')).id;

  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://mock.apidog.com/m1/878633-860097-default/users/${usuarioId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener los datos');
        return res.json();
      })
      .then((data) => {
        setUsuario(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleModificar = () => {
    console.log('Modificar perfil...');
  };

  const handleBorrar = () => {
    const confirmar = window.confirm('¿Estás seguro de que deseas borrar este perfil?');
    if (!confirmar) return;

    fetch(`https://mock.apidog.com/m1/878633-860097-default/users/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error al borrar el perfil');
        alert('Perfil borrado con éxito');
      })
      .catch((err) => alert(`Error: ${err.message}`));
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!usuario) return <p>No se encontró el usuario.</p>;

  return (
    <div className="perfil-container">
      <h2>MI PERFIL</h2>
      <p><strong>Nombre:</strong> {usuario.nombre}</p>
      <p><strong>Apellidos:</strong> {usuario.apellidos}</p>
      <p><strong>Email:</strong> {usuario.correo}</p>
      <p><strong>Usuario:</strong> {usuario.nombre_usuario}</p>
  
      <div className="botones">
        <button className="boton modificar" onClick={handleModificar}>
          Modificar perfil
        </button>
        <button className="boton borrar" onClick={handleBorrar}>
          Borrar perfil
        </button>
      </div>
    </div>
  );
}

export default PerfilUsuario;