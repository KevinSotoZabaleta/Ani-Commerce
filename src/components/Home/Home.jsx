import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "/one1.jpg";
import img2 from "/one2.jpg";
import img3 from "/one3.jpg";
import img4 from "/two1.jpg";
import img5 from "/two2.jpg";
import img6 from "/two3.jpg";
import img7 from "/s1.jpg";
import img8 from "/s2.jpg";
import img9 from "/s3.jpg";

const Home = () => {
  const [selectedImages, setSelectedImages] = useState([
    img1, img2, img3
  ]);

  const handleSelection = (type) => {
    if (type === 1) {
      setSelectedImages([img1, img2, img3]);
    } else if (type === 2) {
      setSelectedImages([img4, img5, img6]);
    } else if (type === 3) {
      setSelectedImages([img7, img8, img9]);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-10">
        Bienvenido al Ani-Commerce...
      </h1>

      <div className="max-w-screen-lg mx-auto py-10 px-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg flex">
        {/* Sección izquierda para la selección */}
        <div className="w-1/4 pr-5">
          <h2 className="text-white text-xl font-bold mb-4">Selecciona el tipo de imágenes:</h2>
          <button
            onClick={() => handleSelection(1)}
            className="bg-white text-blue-500 py-2 px-4 mb-4 rounded-lg w-full hover:bg-gray-200 transition duration-200"
          >
            Tipo 1
          </button>
          <button
            onClick={() => handleSelection(2)}
            className="bg-white text-blue-500 py-2 px-4 mb-4 rounded-lg w-full hover:bg-gray-200 transition duration-200"
          >
            Tipo 2
          </button>
          <button
            onClick={() => handleSelection(3)}
            className="bg-white text-blue-500 py-2 px-4 rounded-lg w-full hover:bg-gray-200 transition duration-200"
          >
            Tipo 3
          </button>
        </div>

        {/* Sección derecha para el carrusel */}
        <div className="w-3/4">
          <Slider {...settings}>
            {selectedImages.map((image, index) => (
              <div key={index} className="transform transition duration-300 hover:scale-105">
                <img src={image} alt={`Imagen ${index + 1}`} className="w-full h-auto object-cover rounded-lg shadow-md" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;



