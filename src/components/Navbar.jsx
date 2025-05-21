import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    setIsLoggedIn(!!usuarioGuardado);
  }, []);

  return (
    <nav className="navbar px-5">
      <div className="navbar-logo">
        <Link to="/" className="logo">🏐 VolleyTime</Link>
      </div>
      {isLoggedIn ? (
      <ul className="navbar-links">
        <li><Link to="/users">Jugadores</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
        <li><Link to="/reservas">Reservas</Link></li>
        <li><Link to="/user/profile">Mi perfil</Link></li>
        <li><Link to="/logout">Cerrar sesión</Link></li>
      </ul>
      ) : (
      <ul className="navbar-links">
        <li><Link to="/login">Iniciar sesión</Link></li>
      </ul>
      )}
    </nav>
  );
};

export default Navbar;