import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles.css';
import Header from './components/header.jsx';
import Banner from './components/banner.jsx';
import ModelZInfo from './components/modelZInfo.jsx';
import CallToAction from './components/callToAction.jsx';
import Footer from './components/footer.jsx';
import CarouselComponent from './components/Carousel.jsx';
import History from './components/History.jsx'; // Importa el nuevo componente
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
        <Link to="/history" className="history-button">Sobre nosotros</Link> {/* Nueva ruta */}
        <Link to="/vehicles" className="vehicles-button">Ver más Modelos</Link>
        <Routes>
          <Route path="/" element={<HomePage dynamicText={dynamicText} />} />
          <Route path="/modelInfo" element={<ModelZInfoPage />} />
          <Route path="/callToAction" element={<CallToActionPage />} />
          <Route path="/vehicles" element={<CarouselPage />} />
          <Route path="/history" element={<History />} /> {/* Nueva ruta */}
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
