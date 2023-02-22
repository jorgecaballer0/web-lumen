import React from "react";
import IMG1 from "../../assets/img/img_about_1.jpg";
import IMG2 from "../../assets/img/img_about_2.jpg";

const Cards = () => {
  return (
    <div className="mx-auto mt-12 mb-1 flex flex-col gap-4 sm:mt-2 sm:w-4/5 sm:flex-col lg:px-2">
      <figure className="relative max-w-lg grayscale filter transition-all duration-300 hover:grayscale-0 sm:grayscale-0 md:grayscale-0">
        <img className="rounded-md" src={IMG1} alt="About img 1" />
        <figcaption className="absolute bottom-0 bg-black px-4 text-sm font-bold text-white sm:px-2 opacity-80">
          <p className="uppercase sm:text-center sm:text-xs md:text-center">
            Provisión y montaje de planta fotovoltáica en provincia de Bs As.
            para Genelba 2014.
          </p>
        </figcaption>
      </figure>

      <figure className="relative max-w-lg grayscale filter transition-all duration-300 hover:grayscale-0 sm:grayscale-0 md:grayscale-0">
        <img className="rounded-md" src={IMG2} alt="About img 2" />
        <figcaption className="absolute bottom-0 bg-black px-4 text-sm font-bold text-white sm:px-2 opacity-80">
          <p className="uppercase sm:text-center sm:text-xs md:text-center">
            Profesionales y técnicos con experiencia en obras de infraestructura
            y servicios.
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Cards;
