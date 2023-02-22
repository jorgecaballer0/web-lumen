import React from "react";

import Cards from "./Cards";
const About = () => {
  return (
    <section
      id="about"
      className="z-20 mx-auto mt-4 grid h-screen grid-cols-2 place-items-center bg-white sm:mt-2 sm:h-full sm:grid-cols-1 md:h-full md:grid-cols-1"
    >
      {/* TEXTO */}
      <div className="sm:mx-auto sm:px-4 sm:pt-14 sm:text-center md:mx-auto md:px-4 md:pt-20 md:text-center lg:px-3">
        <h3 className="text-3xl font-bold uppercase sm:text-2xl">
          Sobre Nosotros
        </h3>
        <hr className="my-4 h-1 w-20 border-0 bg-lumen sm:mx-auto md:mx-auto" />
        <p className="text-gray-700 sm:text-sm">
          <span className="font-bold">Lumen</span> es una empresa orientada al
          desarrollo de obras de infraestructura desde sus inicios, como
          también, de refacción y reacondicionamiento de instalaciones
          existentes.
        </p>
        <p className="mt-1 text-gray-700 sm:text-sm">
          <span className="font-bold">Lumen</span> cumple con el fin de
          facilitar técnicas y procesos a la hora de ejecutar proyectos de
          diversas magnitudes.
        </p>
      </div>
      {/* IMAGENES */}
      <Cards />
    </section>
  );
};

export default About;
