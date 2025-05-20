import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo">🏐 VolleyTime</div>
      </div>
      <ul className="navbar-links">
        <li><a href="/users">Jugadores</a></li>
        <li><a href="/eventos">Eventos</a></li>
        <li><a href="/reservas">Reservas</a></li>
        <li><a href="/user/profile">Mi perfil</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;