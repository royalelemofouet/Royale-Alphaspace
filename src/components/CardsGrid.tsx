import type { ReactNode } from "react";
import { type HubbleImage, type News, type NewsResponse, type Rocket, type WebbImage } from "@/utils/type";
import NewsPageCard from "./NewsPageCard";
import HubbleCard from "./HubbleCard";
import ImageCard from "./ImageCard";
import RocketCard from "./RocketCard";

type CardsGridProps =
  | { mode: "hubble"; objects: HubbleImage[] }
  | { mode: "imagery"; objects: WebbImage[] }
  | { mode: "rockets"; objects: (Rocket | null)[] }
  | { mode: "news-page"; objects: NewsResponse };

const CardsGrid = ({ objects, mode }: CardsGridProps ): ReactNode => {
  
  // 1. Protection globale : si objects est null/undefined ou n'a pas la structure attendue
  if (!objects) {
    return <p className="text-center py-10">Aucune donnée disponible pour le moment.</p>;
  }

  // --- MODE HUBBLE ---
  if (mode === "hubble") {
    //const hubbleData = objects as HubbleImageResponse;
    // Sécurité : on vérifie que results existe avant le map
    //if (!hubbleData.results) return <p>Erreur de chargement Hubble...</p>;

    return (
      <div className="mt-8 sm:mt-16 px-4 sm:px-6 lg:px-20 grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
 {objects.map((item, index) => (
          <HubbleCard key={index} image={item} />
        ))}
      </div>
    );
  }

  // --- MODE ROCKETS ---
  else if (mode === "rockets") {
    const rocketList = (objects as (Rocket | null)[])?.filter(Boolean) || [];

    return (
      <div className="grid gap-4">
        {rocketList.map((item, index) => (
          <RocketCard 
            rocket={item!} 
            key={item?.id || index} // Meilleure clé si l'ID existe
            index={index} 
          />
        ))}
      </div>
    );
  }

  // --- MODE IMAGERY (WEBB) ---
  else if (mode === "imagery") {
    const webbItems = objects as WebbImage[];
    // Sécurité : Vérifier que c'est bien un tableau
    if (!Array.isArray(webbItems)) return <p>Erreur format Webb...</p>;

    return (
      <div className="grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {webbItems.map((item, index) => (
          <ImageCard image={item} key={index} />
        ))}
      </div>
    );
  }

  // --- MODE NEWS ---
  else if (mode === "news-page") {
    const newsData = objects as NewsResponse;
    if (!newsData.results) return <p>Aucune actualité disponible.</p>;

    return (
      <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px] mb-12">
        {newsData.results.map((item, index) => (
          <NewsPageCard news={item as News} key={index} />
        ))}
      </div>
    );
  }

  return null;
};
 export default CardsGrid;
