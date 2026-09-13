import type { ApodType } from "@/utils/type";
import { CircleChevronLeft,CircleChevronRight} from "lucide-react";

type ApodPlayerProps = {
  apod:ApodType;
  day:number;
  setDay: React.Dispatch<React.SetStateAction <number>>;
  isLoading: boolean;
}

const ApodPlayer = ({ apod, day, setDay, isLoading} : ApodPlayerProps) => {
  if (isLoading) return <p>Chargement...</p>;

  // 2. Si apod est null, on affiche un message d'erreur au lieu de crasher
  if (!apod) return <p>Aucune donnée disponible pour cette date.</p>;
    const { copyright, date, explanation, media_type, title , url } = apod;
    const prevHandler = () => {
      setDay((state) => {
        return state + 1;
    });
  };
  const nextHandler = () => {
    setDay((state) => {
      if (state < 1) return 0;
      return state +1;
  });
  };
  return (
    <>
      <div className="w-full mx-auto flex items-center gap-2 sm:gap-4">
        <button onClick={nextHandler} className="shrink-0" disabled={day===0}>
          <CircleChevronLeft
          size={28}
          className={`sm:size-9 transition-all text-[--clr-violet-light] ${day !== 0 ? "hover:scale-110 hover:text-[--clr-violet]":""}`}
          />
        </button>
      {!isLoading ? (<div className="h-[220px] sm:h-[320px] lg:h-[400px] w-full">
            {media_type === "video" ? (
              <iframe height="100%" width="100%" src={url} className="w-full h-full"></iframe> )  : (
            <img src={url} alt={title} className="w-full h-full object-cover rounded-lg" />
        )}
        </div>) : (<div className="h-[220px] sm:h-[320px] lg:h-[400px] w-full grid place-content-center ">
           <p> Is Loading...</p>
        </div>)}
        <button onClick={prevHandler} className="shrink-0">
          <CircleChevronRight
          size={28}
          className="sm:size-9 transition-all text-[--clr-violet-light] hover:scale-110 hover:text-[--clr-violet]"/>
        </button>
      </div>
      <div className="capitalize text-center text-2xl"> {date}</div>
      <div className=" mx-auto w-full my-8">
        <p className="capitalize text-2xl mb-2">{title}</p>
        <p className="">{explanation}</p>
        <p className="capitalize mt-4 text-right">{copyright}</p>
        <p className="cpitalize text-right">{date}</p>
      </div>
    </>
  )
}

export default ApodPlayer;
