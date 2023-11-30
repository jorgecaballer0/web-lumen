import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [text, setText] = useState(false);
  const [textError, setTextError] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q5a8rko",
        "template_nd79s7a",
        form.current,
        "sVGDF40RcbfJpWVEi"
      )
      .then((result) => {
        if (result.status === 200) {
          setText(true);
          setTimeout(() => {
            setText(false);
          }, 3000);
        }
        console.log(result.text);
      })
      .catch((error) => {
        setTextError(true);
        setTimeout(() => {
          setTextError(false);
        }, 3000);
        console.log(error);
      });
    e.target.reset();
  };
  return (
    <section className="mx-auto w-full sm:mx-auto sm:w-11/12 md:w-11/12">
      <div className="w-full rounded-md border-2 border-lumen bg-white p-4 shadow">
        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
          <h5 className="text-center text-3xl font-medium text-gray-900 sm:text-2xl">
            Envianos tu consulta
          </h5>
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="text"
              name="nombre"
              id="nombre"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-400 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              htmlFor="nombre"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-700 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-700 "
            >
              Nombre completo
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="email"
              name="email"
              id="email"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-400 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-700 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-700 "
            >
              Email
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="text"
              name="asunto"
              id="asunto"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-400 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 "
              placeholder=" "
              required
            />
            <label
              htmlFor="asunto"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-700 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-700 "
            >
              Asunto
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <textarea
              name="mensaje"
              id="mensaje"
              rows="6"
              className="peer block w-full resize-none appearance-none border-0 border-b-2 border-gray-400 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 "
              placeholder=" "
              required
            />
            <label
              htmlFor="mensaje"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-700 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-700 "
            >
              Escribinos, ¿Cómo podemos ayudarte?
            </label>
          </div>
          {text && (
            <div>
              <p className="text-sm text-center text-emerald-400">
                ¡Tu mensaje fue enviado correctamente! Te estaré contestando a
                la brevedad.
              </p>
            </div>
          )}
          {textError && (
            <div>
              <p className="text-sm text-center text-emerald-400">
                Hubo un error en el envío, intentalo más tarde...
              </p>
            </div>
          )}
          <div className="flex justify-center sm:text-sm">
            <button
              type="submit"
              className="text-md mx-auto inline-flex items-center gap-2 rounded-md bg-lumen px-5 py-2.5 text-center font-medium text-white transition-colors hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Enviar
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
