import { Title } from "@/components";
import ApodPlayer from "@/components/ApodPlayer";
import { nasaCustomFetch } from "@/utils/customFetch";
import { numberToDate } from "@/utils/functions";
import type { ApodType } from "@/utils/type";
import { useEffect, useState, useRef } from "react";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

// 1. Loader intelligent : il cherche la dernière image disponible sans planter
export const ApodPageLoader: LoaderFunction = async (): Promise<ApodType | null> => {
  // On tente de charger les 3 derniers jours par sécurité
  const attempts = [0, -1, -2]; 

  for (const dayOffset of attempts) {
    try {
      const dateParam = dayOffset === 0 ? "" : numberToDate(dayOffset);
      const response = await nasaCustomFetch.get<ApodType>("", {
        params: dateParam ? { date: dateParam } : {},
      });
      if (response.data) return response.data;
    } catch (error) {
      console.warn(`Jour ${dayOffset} non disponible, tentative suivante...`);
      continue; // Passe au jour précédent si celui-ci échoue
    }
  }
  return null;
};

const Apod = () => {
  const defaultApod = useLoaderData() as ApodType | null;
  const [data, setData] = useState<ApodType | null>(defaultApod);
  
  // On initialise le jour sur celui trouvé par le loader (0, -1 ou -2)
  const [day, setDay] = useState<number>(0); 
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isFirstRender = useRef(true);

  const fetchApod = async (targetDay: number) => {
    // Si on a déjà la donnée via le loader au montage, on ne refait pas l'appel
    if (isFirstRender.current && defaultApod) {
      isFirstRender.current = false;
      return;
    }

    setIsLoading(true);
    try {
      const params = { date: numberToDate(targetDay) };
      const response = await nasaCustomFetch.get<ApodType>("", { params });
      setData(response.data);
    } catch (error: any) {
      // Si "aujourd'hui" échoue, on recule d'un jour automatiquement
      if (targetDay === 0) {
        setDay(-1);
      } else {
        console.error("Erreur de récupération :", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApod(day);
  }, [day]);

  // Si vraiment rien n'est trouvé
  if (!data && !isLoading) {
    return (
      <div className="section text-center">
        <p className="text-destructive font-bold">Signal perdu avec la NASA. Vérifiez votre connexion.</p>
      </div>
    );
  }

  return (
    <section className="section max-w-7xl mx-auto">
      <Title text="NASA's Astronomy Picture Of The Day" />
      
      {/* Affichage du player si data existe */}
      {data && (
        <ApodPlayer 
          apod={data} 
          day={day} 
          setDay={setDay} 
          isLoading={isLoading} 
        />
      )}
      
      {/* Feedback visuel pendant le chargement entre deux dates */}
      {isLoading && (
        <div className="flex flex-col items-center mt-8 gap-2">
          <div className="loading loading-spinner loading-lg text-primary"></div>
          <p className="text-sm animate-pulse">Récupération des données stellaires...</p>
        </div>
      )}
    </section>
  );
};

export default Apod;