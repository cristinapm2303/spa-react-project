import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/Protected';
import { AuthProvider } from './context/AuthContext';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Jugadores from './pages/Users';
import PerfilUsuario from './pages/UserProfile';
import Vista3 from './pages/Events';
import Vista4 from './pages/Reservations';
import Vista5 from './pages/Dashboard';

// import Protected from './components/Protected'

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
  const showNavbar = location.pathname !== '/' && location.pathname !== '/login';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
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
          path="/vista3"
          element={
            <PrivateRoute>
              <Vista3 />
            </PrivateRoute>
          }
        />
        <Route
          path="/vista4"
          element={
            <PrivateRoute>
              <Vista4 />
            </PrivateRoute>
          }
        />
        <Route
          path="/vista5"
          element={
            <PrivateRoute>
              <Vista5 />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
export default App;
