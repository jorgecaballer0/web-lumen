import { useEffect, useState } from "react";
import NavLG from "./NavLG";
import Logo from "../../assets/img/logo-lumen-preview.png";
import { animateScroll as scroll, Link } from "react-scroll";
import NavSM from "./NavSM";

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
              className="mx-auto cursor-pointer rounded-md bg-lumen p-3 text-center text-xs uppercase text-white transition-colors hover:bg-cyan-500 sm:hidden md:hidden lg:p-4 xl:p-4"
            >
              Solicitá tu presupuesto
            </Link>
          </div>
          <NavSM />
          <NavLG />
        </div>
      </header>
    </>
  );
};

export default Navbar;
