import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Dashboard.css';
import { useEffect, useState } from 'react';

const Dashboard = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    setIsLoggedIn(!!usuarioGuardado);
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-content container text-center">
        <h2 className="mb-4">Bienvenido a VolleyTime</h2>
        <p className="lead mb-4">
          Tu plataforma para organizar y reservar partidos y eventos de voley de forma rápida y sencilla.
        </p>

        <div id="volleyCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://imgs.search.brave.com/46FLN9SCnApahDHSauyWNlyVam5phGkJDT3NR-Xk7BA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcy/LnJ0dmUuZXMvcC8x/MDAwNTQ3L2ltZ3Bv/cnRhZGEvP2g9NDAw" className="d-block w-100 rounded" alt="Partido amistoso" />
            </div>
            <div className="carousel-item">
              <img src="https://imgs.search.brave.com/2rJZhiXdD2sFksYmazLMlIl3BwCMlCVJR02exL29bao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzhjL0V1cm9wZWlf/ZGlfcGFsbGF2b2xv/XzIwMDVfLV9JdGFs/aWEtUnVzc2lhLmpw/Zw" className="d-block w-100 rounded" alt="Torneo local" />
            </div>
            <div className="carousel-item">
              <img src="https://imgs.search.brave.com/oWMqRL-DtwhRBsu0300SYUylwDbl2TYDgy-AN1E-BSA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcG9y/dGdhcnJpZG8uY29t/L2Nkbi9zaG9wL3By/b2R1Y3RzL00xMTE5/NTBUUklCQUxMRlVO/Vk9MRVlQTEFZQS5q/cGc_dj0xNjU4MjI3/MTQ4JndpZHRoPTEy/ODA" className="d-block w-100 rounded" alt="Jugadores en acción" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#volleyCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#volleyCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        <p>
          Nuestra plataforma conecta a jugadores y organizadores para crear una comunidad activa de voley. 
          Ya sea que busques un partido amistoso o un torneo competitivo, aquí es donde empieza el juego.
        </p>

        {isLoggedIn ? (
          <a href="/users" className="btn btn-success btn-lg">
            Encontrar jugadores
          </a>
        ) : (
          <a href="/login" className="btn btn-outline-primary btn-lg">
            ¡Empezar a jugar!
          </a>
        )}
      </div>
    </div>
  );
};

export default Dashboard;