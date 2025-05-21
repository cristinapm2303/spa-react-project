import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('https://mock.apidog.com/m1/878633-860097-default/users');
    const usuario = res.data.find((user)=> user.correo === email && user.contrasena=== password);

      if (usuario) {
        console.log('Log in correcto');
        localStorage.setItem('usuario', JSON.stringify(usuario));
        navigate('/');
      } else {
        alert('Credenciales inválidas');
      }
    } catch (err) {
      console.error('Error al conectar con la API de Apidog',err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo">🏐 VolleyTime</div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder=""
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn login-btn w-100 text-white">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;