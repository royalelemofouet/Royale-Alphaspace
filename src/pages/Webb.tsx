import { CardsGrid, RelatedNews, WebbTelescopeSummary } from "@/components";
import { snapiCustomFetch, WebbCustomFetch } from "@/utils/customFetch";
import type { News, NewsResponse, WebbImage, WebbImagesResponse, WebbNewsAndImagery } from "@/utils/type";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import  Title from "@/components/Title";


const newsParams = {
   news_site_exclude: "SpacePolicyOnline.Com",
   limit: 9,
   ordering: "-published_at",
   summary_contains:"webb",
};
 
const imagesParams = {
  page:1,
  perPage:4
}
export const newsFetch = async (): Promise<News[] | null> => {
  try{
 const response = await snapiCustomFetch.get <NewsResponse>("", {params: newsParams});
 return  response.data.results || null;
  } catch (error){
console.log(error);
return null;
  }
};
export const imageryFetch = async (): Promise <WebbImage[] | null> => {
  try{
 const response = await WebbCustomFetch.get<WebbImagesResponse>("", {params: imagesParams});
 return response.data?.body || null;
  } catch (error){
console.log(error);
return null;
  }
};

export const WebbPageLoader : LoaderFunction =  async (): Promise <WebbNewsAndImagery | null> => {
  try{
 const [news, imagery] = await Promise.all([newsFetch(), imageryFetch()]);
 return {news, imagery};
  } catch (error){
console.log(error);
return null;
  }
};
const Webb = () => {
  const { news, imagery } = useLoaderData() as WebbNewsAndImagery
    return (
    <section className="section">
      <Title text="James webb Space Telescope"/>
      {news && <RelatedNews news={news}/>}
       <Title text="in brief"/>
       <WebbTelescopeSummary />
        <Title text="Recent Imagery"/>
        {imagery && <CardsGrid objects = {imagery} mode="imagery"/>}
    </section>
  );
};

export default Webb;
