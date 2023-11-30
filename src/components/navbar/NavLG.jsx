import { Link } from "react-scroll";

const NavLG = () => {
  return (
    <nav
      className="hidden sm:w-full md:w-full lg:flex xl:flex"
      id="navbar-sticky"
    >
      <ul className="mt-4 flex flex-col rounded-md border border-lumen bg-gray-100 p-4 sm:mt-1 sm:p-2 lg:mt-0 lg:flex-row lg:border-none lg:bg-transparent lg:p-0 lg:text-white xl:mt-0 xl:flex-row xl:border-none xl:bg-transparent xl:p-0 xl:text-white xl:text-lg">
        <li>
          <Link
            to="home"
            activeClass="scale-100 text-lumen font-semibold transition-all"
            spy={true}
            smooth={true}
            duration={300}
            className="block cursor-pointer rounded py-2 pl-3 pr-4 transition-colors lg:hover:bg-transparent lg:hover:text-lumen xl:hover:bg-transparent xl:hover:text-cyan-500"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="about"
            activeClass="scale-100 text-lumen font-semibold transition-all"
            spy={true}
            smooth={true}
            offset={-8}
            duration={300}
            className="block cursor-pointer rounded py-2 pl-3 pr-4 transition-colors lg:hover:bg-transparent lg:hover:text-lumen xl:hover:bg-transparent xl:hover:text-cyan-500"
          >
            Sobre nosotros
          </Link>
        </li>
        <li>
          <Link
            to="services"
            activeClass="scale-100 text-lumen font-semibold transition-all"
            spy={true}
            smooth={true}
            offset={-83}
            duration={300}
            className="block cursor-pointer rounded py-2 pl-3 pr-4 transition-colors lg:hover:bg-transparent lg:hover:text-lumen xl:hover:bg-transparent xl:hover:text-cyan-500"
          >
            Servicios
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            activeClass="scale-100 text-lumen font-semibold transition-all"
            spy={true}
            offset={-93}
            smooth={true}
            duration={300}
            className="block cursor-pointer rounded py-2 pl-3 pr-4 transition-colors lg:hover:bg-transparent lg:hover:text-lumen xl:hover:bg-transparent xl:hover:text-cyan-500"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLG;
