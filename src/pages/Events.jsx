const PanelUsuario3 = () => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
  
    return (
      <div>
        <h2>Bienvenido, {usuario?.nombre}</h2>
        <p>Este es el panel eventos.</p>
      </div>
    );
  };
  
  export default PanelUsuario3;