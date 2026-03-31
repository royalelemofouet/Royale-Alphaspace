import type { LandingPageNewsApodHubbles } from "@/utils/type";
import { Link, useLoaderData } from "react-router-dom";
import Title from "./Title";
import { CirclePlay } from "lucide-react";
import CardsGrid from "./CardsGrid";

const HubbleLauncher = () => {
  const data = useLoaderData() as LandingPageNewsApodHubbles;

  // Sécurité : Si data est nul ou hubbles absent, on évite le crash
  const hubbles = data?.hubbles || []; 

  if (hubbles.length === 0) {
    return <p className="align-element">Aucune photo Hubble trouvée.</p>;
  }

  return (
    <article className="align-element w-full my-6">
      <div className="flex justify-between items-center">
        <Title text="hubble photos" />
        <div className="flex gap-1 ">
          <p className="font-bold ml-auto mr-2">More Photos</p>
          <Link to="hubble">
            <CirclePlay color="violet" className="transition-all hover:scale-150" />
          </Link>
        </div>
      </div>
      {/* On passe hubbles en étant sur que c'est un tableau */}
      <CardsGrid mode="hubble" objects={hubbles} />
    </article>
  )
};
export default HubbleLauncher;