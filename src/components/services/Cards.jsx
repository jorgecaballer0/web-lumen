import React from "react";
import IMG1 from "../../assets/img/img_services_1.jpg";
import IMG2 from "../../assets/img/img_services_2.jpg";
import IMG3 from "../../assets/img/img_services_3.jpg";

const Cards = () => {
  return (
    <div className="mx-auto flex justify-around sm:flex-col sm:items-center sm:gap-10 md:flex-col md:items-center md:gap-8 lg:flex-wrap lg:px-2">
      <article className="w-1/5 grayscale filter transition-all duration-200 hover:grayscale-0 sm:flex sm:w-3/5 sm:flex-col sm:grayscale-0 md:w-3/6 md:grayscale-0">
        <img
          className="rounded-md"
          src={IMG1}
          alt="Img servicios - Reacondicionamiento"
        />
        <h3 className="text-center text-xl font-bold uppercase text-white sm:mx-auto sm:pt-1 sm:text-base md:mx-auto md:pt-2">
          Reacondicionamiento / Remodelaciones / Readecuaciones
        </h3>
        <p className="flex flex-col text-center text-base text-gray-300 sm:text-sm">
          Profesionales del diseño estructural con amplia experiencia realizan
          verificaciones tanto materiales como funcionales alcanzando un
          proyecto que optimize la imagen y fortaleza de su empresa cumpliendo
          también con las regulaciones legales pertinentes.
          <span className="font-bold"> UADE - BANCO SANTANDER - GENELBA</span>
        </p>
      </article>
      <article className="w-1/5 grayscale filter transition-all duration-200 hover:grayscale-0 sm:flex sm:w-3/5 sm:flex-col sm:grayscale-0 md:w-3/6 md:grayscale-0">
        <img
          className="rounded-md"
          src={IMG2}
          alt="Img servicios - Reacondicionamiento"
        />
        <h3 className="text-center text-xl font-bold uppercase text-white sm:mx-auto sm:pt-1 sm:text-base md:mx-auto md:pt-2">
          Instalaciones electromecánicas
        </h3>
        <p className="flex flex-col text-center text-base text-gray-300 sm:text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          quidem amet dignissimos at doloremque ullam eveniet perspiciatis enim
          cum, debitis architecto eligendi voluptates illo repellendus minima
          facilis? Error eum, veritatis provident minima, assumenda, optio eius
          exercitationem perferendis architecto animi numquam?
          <span className="font-bold"> UADE - BANCO SANTANDER - GENELBA</span>
        </p>
      </article>
      <article className="w-1/5 grayscale filter transition-all duration-200 hover:grayscale-0 sm:flex sm:w-3/5 sm:flex-col sm:grayscale-0 md:w-3/6 md:grayscale-0">
        <img
          className="rounded-md"
          src={IMG3}
          alt="Img servicios - Reacondicionamiento"
        />
        <h3 className="text-center text-xl font-bold uppercase text-white sm:mx-auto sm:pt-1 sm:text-base md:mx-auto md:pt-2">
          Arquitectura y obras civiles
        </h3>
        <p className="flex flex-col text-center text-base text-gray-300 sm:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          expedita? Id praesentium accusamus, facilis ad perspiciatis
          voluptatibus odit exercitationem necessitatibus rem reprehenderit
          fugiat sapiente. Dignissimos exercitationem fugit ex quae id.
          <span className="font-bold"> UADE - BANCO SANTANDER - GENELBA</span>
        </p>
      </article>
    </div>
  );
};

export default Cards;
