import React, { useState, useEffect } from 'react';
import './banner.css'; // Importa tu archivo de estilos CSS

function Banner() {
  const [text, setText] = useState('');

  useEffect(() => {
    const originalText = '¡El futuro de la moviliidad eléctrica!';
    let index = 0;

    const interval = setInterval(() => {
      if (index < originalText.length) {
        setText(prevText => prevText + originalText[index]);
        index++;
      } else {
        clearInterval(interval); // Detiene el intervalo cuando se completa el texto
      }
    }, 150);

    // Limpiar el intervalo cuando el componente se desmonta o cuando se completa el texto
    return () => clearInterval(interval);

  }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar el componente

  // Asegurar que el texto se renderice sin "undefined" al final
  const displayText = text.endsWith('undefined') ? text.slice(0, -9) : text;

  return (
    <section className="banner">
      <div className="banner-content">
        <h3 style={{ color: 'white', textAlign: 'center' }}>Descubre el Nuevo Tesla Model Z</h3>
        <p className="banner-text" style={{ textAlign: 'center', marginTop: '10px' }}>{displayText}</p> {/* Aplica el estilo para centrar el texto */}
      </div>
      <div className="banner-footer">
        {/* Contenido del pie de página, puedes agregar más aquí */}
      </div>
    </section>
  );
}

export default Banner;
