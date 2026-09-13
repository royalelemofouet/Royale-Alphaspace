import { Link } from "react-router-dom";
const WebbLauncher = () => {
  return (
    <article className="w-full min-h-[45vh] sm:min-h-[50vh] webb py-8 sm:py-4 flex items-center">
    <div className="align-element text-white flex flex-col w-full">
      <p className="font-bold text-2xl sm:text-3xl lg:text-4xl capitalize w-full sm:max-w-[70%] lg:max-w-[40%] place-self-start sm:place-self-end text-left sm:text-right">
        The most recent James Webb images
      </p>
      <button type="button" className="slider-btn slider-btn:hover mt-4 place-self-start sm:place-self-end text-left sm:text-right">
        <Link to="./webb"> Explore</Link>
      </button>
    </div>
    </article>
  )
};

export default WebbLauncher;
