import React, { useState, useEffect } from 'react';
import './banner.css'; // Importa tu archivo de estilos CSS

function Banner() {
  const [text, setText] = useState('');

  useEffect(() => {
    const originalText = '¡El futuro de la movilidad eléctrica!';
    let index = 0;

    const interval = setInterval(() => {
      if (index < originalText.length) {
        setText(prevText => prevText + originalText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner">
      <h2>Descubre el Nuevo Tesla Model Z</h2>
      <p className="banner-text">{text}</p> {/* Aplica la clase "banner-text" */}
    </section>
  );
}

export default Banner;
