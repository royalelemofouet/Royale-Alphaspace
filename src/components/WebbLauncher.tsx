import { Link } from "react-router-dom";
const WebbLauncher = () => {
  return (
    <article className="w-full h-[50vh] webb pt-4">
    <div className="align-element text-white p-2 mt-20 flex flex-col">
      <p className="font-bold text-4xl capitalize max-w-[40%] place-self-end"> The most recent James webb images </p>
      <button type = "button" className="slider-btn slider-btn:hover mt-4 place-self-end text-right">
           <Link to="./webb"> Explore</Link>
      </button>
    </div>
    </article>
  )
};

export default WebbLauncher;
