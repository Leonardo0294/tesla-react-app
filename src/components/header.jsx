import React from 'react';
import TeslaLogo from '../assets/logo_tesla.png'; // Ajusta la ruta y nombre del archivo según sea necesario

function Header() {
  const headerStyle = {
    color: 'white',
    textAlign: 'center',
    fontSize: '3rem',
    display: 'flex',       // Usa flexbox para alinear elementos horizontalmente
    alignItems: 'center',  // Centra verticalmente los elementos dentro del header
    justifyContent: 'center', // Centra horizontalmente los elementos dentro del header
    padding: '20px',       // Añade un poco de espacio interno al header
    backgroundImage: `url('/ruta/de/tu/imagen_de_fondo.jpg')`, // Ruta de la imagen de fondo
    backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir todo el header
    backgroundPosition: 'center', // Centra la imagen de fondo horizontal y verticalmente
  };

  const logoStyle = {
    width: '200px',        // Ajusta el tamaño del logo según sea necesario
    height: 'auto',        // Asegura que la altura se ajuste automáticamente
    marginRight: '10px',   // Espacio entre el logo y el título
  };

  return (
    <header style={headerStyle}>
      <img src={TeslaLogo} alt="Tesla Logo" style={logoStyle} />
      <h1 style={{ margin: '0' }}>Nuevo Tesla Model Z</h1>
    </header>
  );
}

export default Header;
