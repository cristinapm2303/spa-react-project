import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("usuario");
    window.location.reload();
    navigate('/');
  }, [navigate]);

  return <p>Cerrando sesión...</p>;
};

export default Logout;