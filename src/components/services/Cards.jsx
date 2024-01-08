import { services } from "../../utils/services";

const Cards = () => {
  return (
    <div className="mx-auto flex justify-around sm:flex-col sm:items-center sm:gap-10 md:flex-col md:items-center md:gap-8 lg:flex-wrap lg:px-2">
      {services.map((item) => (
        <article
          key={item.id}
          className="w-1/5 grayscale filter transition-all duration-200 hover:grayscale-0 sm:flex sm:w-3/5 sm:flex-col sm:grayscale-0 md:w-3/6 md:grayscale-0"
        >
          <img className="rounded-md" src={item.image} alt={item.title} />
          <h2 className="text-center text-xl font-bold uppercase text-white py-2 sm:mx-auto sm:pt-1 sm:text-base md:mx-auto md:pt-2">
            {item.title}
          </h2>
          <p className="flex flex-col text-center text-gray-300 sm:text-sm">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
};

export default Cards;
