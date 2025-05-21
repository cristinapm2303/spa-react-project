import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/Protected';
import { AuthProvider } from './context/AuthContext';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Jugadores from './pages/Users';
import PerfilUsuario from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import Eventos from './pages/Events';
import Reservas from './pages/Reservations';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppInterno />
      </Router>
    </AuthProvider>
  );
}

function AppInterno() {
  const location = useLocation();

  // Si estamos en login (/), no mostrar Navbar
  const showNavbar = location.pathname !== '/login';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />


        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Jugadores />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/profile"
          element={
            <PrivateRoute>
              <PerfilUsuario />
            </PrivateRoute>
          }
        />
        <Route
          path="/eventos"
          element={
            <PrivateRoute>
              <Eventos/>
            </PrivateRoute>
          }
        />
        <Route
          path="/reservas"
          element={
            <PrivateRoute>
              <Reservas />
            </PrivateRoute>
          }
        />
        <Route
          path="/logout"
          element={
            <PrivateRoute>
              <Logout />
            </PrivateRoute>
          }
        />
      </Routes>
      {showNavbar && <Footer />}
    </>
  );
}
export default App;
