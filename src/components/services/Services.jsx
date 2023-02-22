import React from "react";
import Cards from "./Cards";

const Services = () => {
  return (
    <section
      id="services"
      className="z-20 mx-auto mt-20 h-full"
    >
      <div className="text-center">
        <h4 className="text-sm font-bold uppercase text-white">
          Antecedentes / Servicios
        </h4>
        <h3 className="text-3xl font-bold uppercase text-white">
          Nuestros Antecedentes
        </h3>
        <hr className="my-4 h-1 w-20 border-0 bg-lumen mx-auto" />
      </div>
      <Cards />
    </section>
  );
};

export default Services;
