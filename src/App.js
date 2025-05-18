import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/Protected';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Vista1 from './pages/Vista1';
import Vista2 from './pages/Vista2';
import Vista3 from './pages/Vista3';
import Vista4 from './pages/Vista4';
import Vista5 from './pages/Vista5';

// import Protected from './components/Protected'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/vista2" element={<Vista2 />} />
          <Route path="/vista3" element={<Vista3 />} />
          <Route path="/vista4" element={<Vista4 />} />
          <Route path="/vista5" element={<Vista5 />} />
          <Route
            path="/vista1"
            element={
              <PrivateRoute>
                <Vista1/>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
