import React from "react";
import { FaPhone } from "react-icons/fa";
import VIDEO from "../../assets/videos/video-1080.mp4";
import WppIcon from "../icons/WppIcon";

const Home = () => {
  return (
    <section className="h-screen" id="home">
      {/* VIDEO DE FONDO */}
      <video
        src={VIDEO}
        autoPlay
        muted
        loop
        className="absolute top-0 right-0 -z-50 h-screen w-full object-cover"
      ></video>
      {/* OPACIDAD DEL VIDEO */}
      <div className="absolute top-0 -z-40 h-screen w-full bg-black opacity-50"></div>
      {/* WHATSAPP */}
      <div className="fixed bottom-3 right-3 z-10 sm:bottom-6 sm:right-2 md:bottom-5 md:right-3">
        <div className="group">
          <WppIcon className="ml-2 cursor-pointer transition-all hover:scale-110 hover:animate-spin" />
          <div className="pointer-events-none absolute right-full top-2 w-36 rounded-md bg-lumen py-2 px-2 text-center text-xs font-semibold text-white opacity-0 transition-all group-hover:opacity-100 sm:hidden md:hidden">
            ¡Envianos tu mensaje!
            <svg
              className="absolute left-[53%] bottom-1/3 h-3 w-full -rotate-90 text-lumen"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* TITULO */}
      <div className="z-10 grid grid-cols-2 sm:mx-auto sm:grid-cols-1 sm:px-4 sm:pt-20 md:mx-auto md:grid-cols-1 md:px-6 md:pt-28 lg:px-10 lg:pt-28 xl:place-items-center xl:pt-40 xl:px-12">
        <div>
          <h4 className="text-sm font-bold uppercase text-white">
            Crecimiento sustentable
          </h4>
          <h1 className="mt-4 text-5xl font-bold uppercase text-white sm:mt-2 sm:text-3xl md:text-3xl">
            Hacemos lo que prometemos
          </h1>
          <h5 className="mt-8 text-base text-white sm:mt-2 sm:text-sm md:mt-4">
            Desarrollo y logística de proyectos estructurales.
          </h5>
        </div>
      </div>

      {/* N° CONTACTO */}
      <div className="grid sm:mx-auto sm:grid-cols-1 sm:px-4 sm:pt-28 md:mx-auto md:grid-cols-1 md:px-6 md:pt-40 lg:grid-cols-2 lg:px-10 lg:pt-40 xl:pt-40 xl:px-12">
        <h4 className="border-t border-gray-500 py-4 text-sm font-bold text-gray-300 sm:border-none sm:text-xs md:w-1/2 md:text-base xl:w-1/3">
          Atención - 24/7
        </h4>
        <div className="sm:hidden md:hidden"></div>
        <div className="flex items-center gap-3 text-3xl font-bold sm:text-xl">
          <FaPhone className="text-lumen" />
          <span className="text-white">+54 9 11 5263 9105</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
