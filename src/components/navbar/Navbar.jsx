import { useEffect, useState } from "react";
import Nav from "./Nav";
import Logo from "../../assets/img/logo-lumen-preview.png";
import { animateScroll as scroll, Link } from "react-scroll";

const Navbar = () => {
  const [headerShadow, setHeaderShadow] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setHeaderShadow(true);
    } else {
      setHeaderShadow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <header className={headerShadow ? "header active" : "header"}>
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <div>
            <img
              src={Logo}
              className={headerShadow ? "logo active" : "logo"}
              alt="Lumen Logo"
              onClick={scrollToTop}
            />
          </div>
          <div className="flex lg:order-1 xl:order-1">
            <Link
              to="contact"
              spy={true}
              offset={-90}
              smooth={true}
              duration={300}
              className="mx-auto cursor-pointer rounded-md bg-lumen p-3 text-center text-xs uppercase text-white transition-colors hover:bg-cyan-500 sm:hidden md:hidden"
            >
              Solicitá tu presupuesto
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="hidden items-center rounded-md p-2 text-sm text-lumen hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-lumen sm:inline-flex md:inline-flex"
              aria-controls="navbar-sticky"
              aria-expanded="false"
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
          </div>
          <Nav />
        </div>
      </header>
    </>
  );
};

export default Navbar;
