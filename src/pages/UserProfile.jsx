import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserProfile.css';

const PerfilUsuario = () => {
  const usuarioId = JSON.parse(localStorage.getItem('usuario')).id;

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editando, setEditando] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    nombre_usuario: ''
  });

  useEffect(() => {
    fetch(`https://mock.apidog.com/m1/878633-860097-default/users/${usuarioId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener los datos');
        return res.json();
      })
      .then((data) => {
        setUsuario(data);
        setFormData({
          nombre: data.nombre,
          apellidos: data.apellidos,
          correo: data.correo,
          nombre_usuario: data.nombre_usuario,
        });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [usuarioId]);

  const handleModificar = () => {
    setEditando(true);
  };

  const handleCancelar = () => {
    setEditando(false);
    setFormData({
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      correo: usuario.correo,
      nombre_usuario: usuario.nombre_usuario,
    });
  };

  const handleGuardar = () => {
    fetch(`https://mock.apidog.com/m1/878633-860097-default/users/edit/${usuarioId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error al guardar los cambios');
        return res.json();
      })
      .then((data) => {
        setUsuario(data);
        setEditando(false);
        alert('Perfil actualizado correctamente');
      })
      .catch((err) => alert(`Error: ${err.message}`));
  };

  const handleBorrar = () => {
    const confirmar = window.confirm('¿Estás seguro de que deseas borrar este perfil?');
    if (!confirmar) return;

    fetch(`https://mock.apidog.com/m1/878633-860097-default/users/delete/${usuarioId}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error al borrar el perfil');
        localStorage.removeItem('usuario');
        window.location.reload();
        navigate('/');
      })
      .catch((err) => alert(`Error: ${err.message}`));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!usuario) return <p>No se encontró el usuario.</p>;

  return (
    <div className="perfil-container">
      <h2>MI PERFIL</h2>

      {editando ? (
        <>
          <label>
            Nombre:
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
          </label>
          <label>
            Apellidos:
            <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="correo" value={formData.correo} onChange={handleChange} />
          </label>
          <label>
            Usuario:
            <input type="text" name="nombre_usuario" value={formData.nombre_usuario} onChange={handleChange} />
          </label>

          <div className="botones">
            <button className="boton guardar" onClick={handleGuardar}>
              Guardar
            </button>
            <button className="boton volver" onClick={handleCancelar}>
              Volver
            </button>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default PerfilUsuario;