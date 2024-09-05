import React, { useState } from 'react';

import foto1 from "/foto1.jpg";
import foto2 from "/foto2.jpg";
import foto3 from "/foto3.jpg";
import foto4 from "/isoka.jpg";
import foto5 from "/slam1.jpg";
import foto6 from "/naru.jpg";

const Home = () => {

  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black min-h-screen flex items-center justify-center">
      <div className="w-full flex flex-col md:flex-row items-center">
        {/* Sección izquierda para el texto */}
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                    text-4xl font-bold p-8 md:w-1/2 text-center md:text-left 
                    animate-pulse border-b-4 border-pink-500">
          Compra tus Cartas Aquí!
        </div>

        {/* Sección derecha para el grupo de imagenes */}
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center hover:scale-110"
                  src={foto1} />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center hover:scale-110"
                  src={foto2} />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center hover:scale-110"
                  src={foto3} />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center hover:scale-110"
                  src={foto4} />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center hover:scale-110"
                  src={foto5} />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center hover:scale-110"
                  src={foto6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
