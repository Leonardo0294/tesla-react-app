import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles.css'; // Asegúrate de tener un archivo styles.css o styles.scss para tus estilos

// Importa tus componentes
import Header from './components/header.jsx';
import Banner from './components/banner.jsx';
import ModelZInfo from './components/modelZInfo.jsx';
import CallToAction from './components/callToAction.jsx';
import Footer from './components/footer.jsx';
import CarouselComponent from './components/Carousel.jsx';
import History from './components/History.jsx';
import VideoComponent from './components/VideoComponent.jsx';
import OrderForm from './components/OrderForm.jsx'; // Componente de formulario de pedidos
import teslaModelZImage from './assets/file.png';

function App() {
  const [dynamicText, setDynamicText] = useState('');

  useEffect(() => {
    const text = "Descubre el Nuevo Tesla Model Z";
    let index = 0;

    const intervalId = setInterval(() => {
      setDynamicText(text.substring(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <nav className="nav-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/history" className="nav-link">Sobre nosotros</Link>
          <Link to="/vehicles" className="nav-link">Ver más Modelos</Link>
          <Link to="/order" className="nav-link">Comprar</Link> {/* Enlace al formulario de pedidos */}
        </nav>
        <Routes>
          <Route path="/" element={<HomePage dynamicText={dynamicText} />} />
          <Route path="/modelInfo" element={<ModelZInfoPage />} />
          <Route path="/callToAction" element={<CallToActionPage />} />
          <Route path="/vehicles" element={<CarouselPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/order" element={<OrderForm />} /> {/* Ruta para el formulario de pedidos */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const HomePage = ({ dynamicText }) => (
  <>
    <Banner dynamicText={dynamicText} />
    <img src={teslaModelZImage} alt="Tesla Model Z" className="tesla-model-img" />
    <Link to="/modelInfo" className="info-button">Ver información del Modelo Z</Link>
    <VideoComponent /> {/* Integrar el componente de videos en la página de inicio */}
    <div className="model-z-info">
      <h2 style={{ color: 'white' }}>Descubre el Nuevo Tesla Model Z</h2>
      <p style={{ color: 'white' }}>
        El Tesla Model Z es el último avance en tecnología de vehículos eléctricos. Con su diseño futurista, rendimiento excepcional y características innovadoras, redefine la experiencia de conducir. Prepárate para vivir el futuro hoy mismo con el Model Z.
      </p>
    </div>
  </>
);

const ModelZInfoPage = () => (
  <ModelZInfo />
);

const CallToActionPage = () => (
  <CallToAction />
);

const CarouselPage = () => (
  <CarouselComponent />
);

export default App;
