import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles.css';
import Header from './components/header.jsx';
import Banner from './components/banner.jsx';
import ModelZInfo from './components/modelZInfo.jsx';
import CallToAction from './components/callToAction.jsx';
import Footer from './components/footer.jsx';
import CarouselComponent from './components/Carousel.jsx';
import History from './components/History.jsx';
import VideoComponent from './components/VideoComponent.jsx';
import OrderForm from './components/OrderForm.jsx'; // Importa el componente de pedidos
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
