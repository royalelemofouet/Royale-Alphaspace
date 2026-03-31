/*
newsFetch : fonction pour récupérer l'actualité 
rocketFetch et rocketsFetch : La gestion des fusées ( nous voulons implementer notre code )
SpacePageLoader : est la fonctio qui permet d'afficher la page et elle combine les resultats du newsFetch et des rocketFetch
*/
import { snapiCustomFetch, SpacexCustomFetch } from "@/utils/customFetch";
import type { NewsResponse, Rocket, SpacexNewsAndRockets, News } from "@/utils/type";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import  Title from "@/components/Title";
import { CardsGrid, RelatedNews } from "@/components";

const newsParams = {
   news_site_exclude: "SpacexPolicyOnline.Com",
   limit: 20,
   ordering:"-published_at",
   summary_contains:"spacex",
};
const starshipURL = "rockets/starship";
const falconNineURL = "rockets/falcon9";
const falconHeavyURL = "rockets/falconheavy";
const rocketsURLs = [starshipURL, falconNineURL, falconHeavyURL];

export const newsFetch = async (): Promise <News[] | null> => {
  try{
    const response = await snapiCustomFetch.get<NewsResponse>("", { params: newsParams });
    return response.data.results;
  }catch(error){
    console.log(error);
    return null;
  }
};
export const rocketFetch = async (rocketURL: string): Promise<Rocket | null> => {
  try {
    const response = await SpacexCustomFetch.get<Rocket>(rocketURL); 
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const rocketsFetch = async (): Promise <(Rocket | null)[] | null> => {
  try{
    const response:(Rocket | null)[] = await Promise.all(
      rocketsURLs.map((rocketURL) => rocketFetch(rocketURL)
    ));
    return response;
  }catch(error){
    console.log(error);
    return null;
  }
};

export const SpacexPageLoader: LoaderFunction = async (): Promise <SpacexNewsAndRockets | null>  => {
  try{
    const [news, rockets] = await Promise.all([newsFetch(), rocketsFetch()])
    return { news, rockets};
  }catch(error){
    console.log(error);
    return null;
  }
};

const Spacex = () => {
  const { news, rockets } = useLoaderData() as SpacexNewsAndRockets;

  return (
    <section className="section">
      <Title text="spaceX"/>
      {news && <RelatedNews news = {news} />}
       <Title text=" Rockets"/>
       {rockets && <CardsGrid mode="rockets" objects={rockets}/>}
    </section>
  )
}

export default Spacex ;

