import { Link } from "react-router-dom";

const SpacexLauncher = () => {
  return (
      <article className="w-full h-[40vh] spacex">
    <div className="align-element text-white p-2 mt-20">
      <p className="font-bold text-4xl capitalize"> More about Spacex</p>
      <button type = "button" className="slider-btn slider-btn:hover">
           <Link to="./spacex"> Explore</Link>
      </button>
    </div>
    </article>
  )
};

export default SpacexLauncher;
