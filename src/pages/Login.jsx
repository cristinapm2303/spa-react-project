import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        navigate('/vista1');
      } else {
        alert('Credenciales inválidas');
      }
    } catch (err) {
      console.error('Error al conectar con la API de Apidog',err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default Login;
