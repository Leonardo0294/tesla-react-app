import React from 'react';
import TeslaLogo from '../assets/logo_tesla.png'; // Ruta y nombre del archivo del logo de Tesla
import TeslaText from '../assets/letra_tesla.png'; // Ruta y nombre del archivo del texto de Tesla (PNG con las letras)

function Header() {
  const headerStyle = {
    color: 'white',
    textAlign: 'center',
    fontSize: '3rem',
    display: 'flex',       // Usa flexbox para alinear elementos horizontalmente
    alignItems: 'center',  // Centra verticalmente los elementos dentro del header
    justifyContent: 'center', // Centra horizontalmente los elementos dentro del header
    padding: '20px',       // Añade un poco de espacio interno al header
    backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir todo el header
    backgroundPosition: 'center', // Centra la imagen de fondo horizontal y verticalmente
  };

  const logoStyle = {
    width: '100px',        // Ajusta el tamaño del logo según sea necesario
    height: 'auto',        // Asegura que la altura se ajuste automáticamente
    marginRight: '10px',   // Espacio entre el logo y el texto de Tesla
  };

  const textStyle = {
    width: '200px',        // Ajusta el tamaño del texto de Tesla según sea necesario (aumentado a 200px)
    height: 'auto',        // Asegura que la altura se ajuste automáticamente
  };

  return (
    <header style={headerStyle}>
      <img src={TeslaLogo} alt="Tesla Logo" style={logoStyle} />
      <img src={TeslaText} alt="Tesla Text" style={textStyle} />
    </header>
  );
}

export default Header;
