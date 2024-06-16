import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles.css';
import Header from './components/header.jsx';
import Banner from './components/banner.jsx';
import ModelZInfo from './components/modelZInfo.jsx';
import CallToAction from './components/callToAction.jsx';
import Footer from './components/footer.jsx';
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
    }, 100); // Ajusta el tiempo entre cada letra (en milisegundos)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Banner dynamicText={dynamicText} />} />
          <Route path="/modelInfo" element={<ModelZInfo />} />
          <Route path="/callToAction" element={<CallToAction />} />
        </Routes>

        {/* Imagen del Tesla Model Z centrada */}
        <img src={teslaModelZImage} alt="Tesla Model Z" className="tesla-model-img" />

        {/* Agregar el botón para ir a ModelZInfo */}
        <Link to="/modelInfo" className="info-button">Ver información del Modelo Z</Link>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
