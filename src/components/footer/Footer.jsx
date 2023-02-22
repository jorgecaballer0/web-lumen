import React from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/img/logo-lumen-preview.png";

const Footer = () => {
  return (
    <footer className="mt-4 sm:mt-2 sm:p-4">
      {/* LOGO */}
      <div className="mb-4 sm:mb-0 md:mb-0">
        <div className="flex items-center justify-center">
          <img
            src={Logo}
            className="mx-auto h-6 sm:h-9 md:h-9"
            alt="Lumen Logo"
          />
        </div>
        <hr className="my-1 mx-auto h-1 w-20 border-0 bg-lumen" />
      </div>
      {/* CONTENIDO DEL FOOTER */}
      <div className="flex sm:flex-col sm:items-center md:flex-col md:items-center">
        <article className="w-1/2 font-bold uppercase sm:hidden md:w-4/5">
          <p className="pt-12 text-center text-base text-white sm:pt-6 md:pt-3">
            La efectividad que brinda la experiencia nos otorga la confianza de
            involucrarnos en la construcción de tu objetivo.
          </p>
        </article>
        <div className="flex py-4 sm:flex-col sm:items-center md:items-center">
          {/* CONTACTO */}
          <article className="flex w-2/4 flex-col gap-4 px-4 sm:w-full sm:items-center md:items-center md:w-full md:text-center">
            <h3 className="text-xl font-bold uppercase text-white underline">
              Contacto
            </h3>
            <ul className="text-white sm:text-center sm:text-sm">
              <li>
                <span className="font-semibold ">Dirección:</span> Santa Fe
                1126, Of 26 - C.A.B.A
              </li>
              <li>
                <span className="font-semibold">E-mail: </span>
                <a href="mailto:fo@lumenobras.com.ar">
                  fo@lumenobras.com.ar
                </a> /{" "}
                <a href="mailto:administracion@lumenobras.com.ar">
                  administracion@lumenobras.com.ar
                </a>{" "}
              </li>
            </ul>
          </article>

          <article className="flex w-2/4 flex-col gap-4 px-4 sm:hidden md:hidden">
            <h3 className="text-xl font-bold uppercase text-white underline">
              De interés
            </h3>
            <ul className="text-white sm:text-center sm:text-sm">
              <li>Nuestros asesores te atenderan</li>
              <li>+54 9 11 5263 9105</li>
            </ul>
          </article>
        </div>
      </div>

      <hr className="my-4 border-lumen sm:mx-auto sm:my-2 md:mx-auto md:my-2" />
      <div className="sm:text-center md:text-center">
        <span className="text-sm text-gray-400">
          © 2023{" "}
          <Link
            to="home"
            className="cursor-pointer transition-all hover:text-lumen hover:underline"
          >
            Lumen
          </Link>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
