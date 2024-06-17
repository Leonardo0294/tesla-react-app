import React from 'react';
import teslaModelZ from '../assets/modelz.png';  
function ModelZInfo() {
  return (
    <section className="model-info" style={containerStyle}>
      <div style={infoStyle}>
        <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>Características del Tesla Model Z</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={listItemStyle}>Precio: $59,990</li>
          <li style={listItemStyle}>Autonomía: 400 millas</li>
          <li style={listItemStyle}>Aceleración: 0-60 mph en 4.5 segundos</li>
          <li style={listItemStyle}>Tecnología Autopilot incluida</li>
          <li style={listItemStyle}>Diseño aerodinámico y futurista</li>
          <li style={listItemStyle}>Pantallas táctiles avanzadas en el tablero</li>
          <li style={listItemStyle}>Interior espacioso y lujoso</li>
          <li style={listItemStyle}>Sistema de sonido premium</li>
          <li style={listItemStyle}>Conectividad avanzada con soporte para actualizaciones OTA</li>
          <li style={listItemStyle}>Asientos de cuero con ajuste eléctrico y calefacción</li>
          <li style={listItemStyle}>Cámara de visión trasera y sensores de estacionamiento</li>
          <li style={listItemStyle}>Sistema de navegación GPS integrado</li>
          <li style={listItemStyle}>Baúl con capacidad de almacenamiento amplia</li>
        </ul>
      </div>
      <div style={imageContainerStyle}>
        <img src={teslaModelZ} alt="Tesla Model Z" style={imageStyle} />
      </div>
    </section>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  maxWidth: '1200px',
  margin: 'auto',
};

const infoStyle = {
  flex: 1,
  marginRight: '20px',
};

const imageContainerStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '10px',
};

const listItemStyle = {
  color: 'white',
  marginBottom: '10px',
  padding: '5px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '5px',
};

export default ModelZInfo;
