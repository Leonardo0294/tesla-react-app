import React from 'react';

function Header() {
  const headerStyle = {
    color: 'white',  // Establece el color del texto a blanco
  };

  return (
    <header>
      <h1 style={headerStyle}>Nuevo Tesla Model</h1>
    </header>
  );
}

export default Header;
