import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LazyLoad from 'react-lazyload';
import teslaModel1 from '../assets/ModelY.jpg';
import teslaModel2 from '../assets/tesla-model-s.jpg';
import teslaModel3 from '../assets/cybertruck.jpg';
import teslaModel4 from '../assets/modelo3.jpg';
import teslaModel5 from '../assets/tesla_roadster.jpg';
import videoModel3 from '../assets/Cybertruck.mp4'; // Video del Cybertruck
import videoModel4 from '../assets/model3.mp4'; // Video del Model 3
import videoModel1 from '../assets/ModelY.mp4'; // Video del Model Y

const CarouselComponent = () => {
  const models = [
    {
      image: teslaModel1,
      alt: "Tesla Model Y",
      description: "El Tesla Model Y es un SUV eléctrico compacto con excelente autonomía y espacio interior.",
      video: videoModel1, // Video del Model Y
    },
    {
      image: teslaModel3,
      alt: "Tesla Cybertruck",
      description: "El Tesla Cybertruck es una camioneta eléctrica futurista con diseño resistente y capacidad de carga impresionante.",
      video: videoModel3, // Video del Cybertruck
    },
    {
      image: teslaModel4,
      alt: "Tesla Model 3",
      description: "El Tesla Model 3 es un sedán eléctrico accesible con gran autonomía y características tecnológicas avanzadas.",
      video: videoModel4, // Video del Model 3
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '100px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', paddingTop: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'white', fontSize: '2.5rem' }}>Conozca otras opciones</h2>
      <Slider {...settings}>
        {models.map((model, index) => (
          <div key={index}>
            <LazyLoad height={400} offset={100} once placeholder={<div>Cargando...</div>}>
              <img src={model.image} alt={model.alt} style={{ maxHeight: '400px', width: 'auto', margin: 'auto', display: 'block' }} />
            </LazyLoad>
            <p className="legend" style={{ background: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '10px', textAlign: 'center' }}>
              {model.description}
            </p>
          </div>
        ))}
      </Slider>

      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px', color: 'white', fontSize: '2.5rem' }}>Videos sobre los modelos de Tesla</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {models.map((model, index) => (
            <div key={index} style={{ maxWidth: '400px' }}>
              <h3 style={{ color: 'white' }}>{model.alt}</h3>
              <video controls style={{ width: '100%', maxWidth: '100%' }}>
                <source src={model.video} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
