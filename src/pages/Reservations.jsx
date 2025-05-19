const PanelUsuario4 = () => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
  
    return (
      <div>
        <h2>Bienvenido, {usuario?.nombre}</h2>
        <p>Este es el panel reservas.</p>
      </div>
    );
  };
  
  export default PanelUsuario4;