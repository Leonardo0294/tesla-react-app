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

const CarouselComponent = () => {
  const models = [
    {
      image: teslaModel1,
      alt: "Tesla Model Y",
      description: "El Tesla Model Y es un SUV eléctrico compacto con excelente autonomía y espacio interior.",
    },
    {
      image: teslaModel2,
      alt: "Tesla Model S",
      description: "El Tesla Model S es un sedán eléctrico de lujo con impresionante rendimiento y tecnología avanzada.",
    },
    {
      image: teslaModel3,
      alt: "Tesla Cybertruck",
      description: "El Tesla Cybertruck es una camioneta eléctrica futurista con diseño resistente y capacidad de carga impresionante.",
    },
    {
      image: teslaModel4,
      alt: "Tesla Model 3",
      description: "El Tesla Model 3 es un sedán eléctrico accesible con gran autonomía y características tecnológicas avanzadas.",
    },
    {
      image: teslaModel5,
      alt: "Tesla Roadster",
      description: "El Tesla Roadster es un deportivo eléctrico de alto rendimiento con velocidad y diseño impresionantes.",
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
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
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
    </div>
  );
};

export default CarouselComponent;
