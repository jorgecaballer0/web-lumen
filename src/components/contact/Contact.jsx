import { FaPhone } from "react-icons/fa";
import Footer from "../footer/Footer";
import Form from "./Form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative mx-auto mt-24 h-screen w-full sm:h-full md:h-full"
    >
      <div className="grid grid-cols-2 place-items-center sm:grid-cols-1 md:grid-cols-1 lg:pl-2 xl:pl-4">
        <Form />
        <section className="sm:mb-60 sm:w-4/5 md:w-full md:mb-80 md:text-center lg:w-4/5 xl:w-full xl:px-4 xl:text-center">
          <h3 className="py-2 text-2xl font-bold uppercase text-white sm:text-center md:px-4 lg:py-0 lg:px-2">
            Contactá ahora con uno de nuestros asesores comerciales
          </h3>
          <hr className="my-2 h-1 w-20 border-0 bg-lumen sm:mx-auto md:mx-auto xl:mx-auto" />
          <p className="text-lg text-gray-300 sm:text-center sm:text-base md:px-4 md:text-center">
            No dudes en contactarnos y consultar tu proyecto con uno de nuestros
            asesores capacitados para poder brindarte un rápido y eficiente
            asesoramiento.
          </p>
          <div className="flex justify-start gap-3 pt-6 text-3xl font-bold sm:justify-center sm:text-2xl md:justify-center xl:justify-center">
            <FaPhone className="text-lumen" />
            <span className="text-white">+54 9 11 5263 9105</span>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
