import { type News } from "@/utils/type";
import { Link } from "react-router-dom";
import { CircleArrowRight } from "lucide-react";

const NewsPageCard = ({ news }: { news: News }) => {
    const { url, image_url, title, published_at, news_site, summary} = news;

  return (
    <div className="grid lg:px-40 grid-cols-1 lg:grid-cols-4 lg:gap-x-4 overflow-hidden">
      <div className=" p-2 overflow-hidden lg:col-span-1 sm:h-[300p] md:h-[400p] lg:h-full">
          <Link to={url} target="_blank">
            <img src={image_url} alt="main-img" className="h-full w-full object-cover" />
          </Link>
      </div>
      <div className=" p-2  lg:col-span-3 h-[300p] md:h-[200p] lg:mt-6"> 
           <p className="text-2xl font-bold"> {title}</p>
           <p className="mt-4"> {published_at?.split("T")[0] || ""}</p>
           <p className="flex items-center mt-4">
            <span> {news_site} </span>
            <span>|</span>
            <span className="flex gap-x-2"> Read from source
            <Link to={url} target="_blank">
               <CircleArrowRight color="var(--clr-violet)" className="hover: scale-150 transition-all"/>
            </Link> </span>
           </p>
           <p className="mt-6"> 
           {summary}
           </p>
      </div>
    </div>
  )
}

export default NewsPageCard;
