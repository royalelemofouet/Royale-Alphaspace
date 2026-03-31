import { ApodLauncher, HubbleLauncher, NewsLauncher, SpacexLauncher, WebbLauncher } from "@/components";
import { datastroCustomFetch, nasaCustomFetch, snapiCustomFetch } from "@/utils/customFetch";
// AJOUT de 'News' dans l'import ci-dessous
import type { ApodType, HubbleImage, HubbleImageResponse, LandingPageNewsApodHubbles, NewsResponse, News } from "@/utils/type"; 
import { type LoaderFunction } from "react-router-dom";

const newsParams = {
  ordering: "-published_at"
};

const hubblesParams = {
  order_by: "photo_date_taken desc",
  limit: 12,
}

export const newsFetch = async (): Promise<News[] | null> => {
  try {
    const response = await snapiCustomFetch.get<NewsResponse>("", { params: newsParams }); 
    return response.data.results;
  } catch (error) {
    console.error("News Fetch Error:", error);
    return null;
  }
};

export const apodFetch = async (): Promise<ApodType | null> => {
  try {
    // CORRECTION : Ajout de 'await' ici
    const response = await nasaCustomFetch.get<ApodType>(""); 
    return response.data;
  } catch (error) {
    console.error("APOD Fetch Error:", error);
    return null;
  }
};

export const hubblesFetch = async (): Promise<HubbleImage[] | null> => {
  try {
    const response = await datastroCustomFetch.get<HubbleImageResponse>("", { params: hubblesParams });
    return response.data.results;
  } catch (error) {
    console.error("Hubble Fetch Error:", error);
    return null;
  }
};

export const LandingPageLoader: LoaderFunction = async (): Promise<LandingPageNewsApodHubbles | null> => {
  try {
    // On lance les 3 requêtes en parallèle pour gagner du temps
    const [news, apod, hubbles] = await Promise.all([newsFetch(), apodFetch(), hubblesFetch()]);
    return { news, apod, hubbles };
  } catch (error) {
    console.error("Landing Page Loader Error:", error);
    return null;
  }
};

const Landing = () => {
  return (
    <section>
      <NewsLauncher />
      <SpacexLauncher />
      <ApodLauncher />
      <WebbLauncher />
      <HubbleLauncher />
    </section>
  );
};

export default Landing;