import { Link } from "react-router-dom";

const SpacexLauncher = () => {
  return (
      <article className="w-full min-h-[35vh] sm:min-h-[40vh] spacex flex items-end sm:items-center py-8">
    <div className="align-element text-white w-full">
      <p className="font-bold text-2xl sm:text-3xl lg:text-4xl capitalize">More about SpaceX</p>
      <button type="button" className="slider-btn slider-btn:hover mt-4">
           <Link to="./spacex"> Explore</Link>
      </button>
    </div>
    </article>
  )
};

export default SpacexLauncher;
