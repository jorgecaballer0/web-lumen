import React, { useState } from "react";
import { Link } from "react-scroll";

const NavSM = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="hidden items-center rounded-md p-2 text-sm text-lumen hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-lumen sm:inline-flex md:inline-flex sm:relative md:relative"
        aria-controls="navbar-sticky"
        aria-expanded="false"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="sr-only">Abrir menú</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {showMenu ? (
        <ul className="sm:absolute md:absolute lg:hidden xl:hidden right-0 left-0 mx-auto top-full text-center uppercase bg-neutral-900 border-t-2 border-neutral-500">
          <li>
            <Link
              to="home"
              activeClass="text-lumen font-semibold transition-all"
              spy={true}
              smooth={true}
              duration={300}
              className="block cursor-pointer rounded py-2 pl-3 pr-4 transition-colors"
            >
              Inicio
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="home"
              activeClass="text-lumen font-semibold transition-all"
              spy={true}
              smooth={true}
              duration={300}
              className="block cursor-pointer rounded py-2 pl-3 pr-4 transition-colors"
            >
              Sobre nosotros
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="home"
              activeClass="text-lumen font-semibold transition-all"
              spy={true}
              smooth={true}
              duration={300}
              className="block cursor-pointer rounded py-2 pl-3 pr-4 transition-colors"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="home"
              activeClass="text-lumen font-semibold transition-all"
              spy={true}
              smooth={true}
              duration={300}
              className="block cursor-pointer rounded py-2 pl-3 pr-4 transition-colors"
            >
              Inicio
            </Link>
          </li>
        </ul>
      ) : null}
    </>
  );
};

export default NavSM;
