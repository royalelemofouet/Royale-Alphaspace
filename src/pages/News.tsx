import CardsGrid from "@/components/CardsGrid";
import { snapiCustomFetch } from "@/utils/customFetch";
import { type FiltersParams, type NewsResponse, type NewsResponseWithParams } from "@/utils/type";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import  Title from "@/components/Title";
import Overview from "@/components/Overview";
import  Filters  from "@/components/Filters";
import { PaginationContainer } from "@/components";

const newsParams = {
   news_site_exclude: "SpacPolicyOnline.Com",
   limit: 20,
};

export const NewsPageLoader :  LoaderFunction = async ({request}): Promise <NewsResponseWithParams | null >  => { 
    try{ 
      const params: FiltersParams = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  
  const formattedParams ={
    search: params.term ? params.term : "",
    offset : params.page ? 24*(  parseFloat(params.page) -1 ): 0,
      ...newsParams,
    };
    const response = await snapiCustomFetch.get < NewsResponse > ("",
      {
      params: formattedParams,
    });

    return { response: response.data, params };
  } catch (error) {
   console.log(error);
   return null;
  }
  };

const News = () => {
  const data = useLoaderData() as NewsResponseWithParams; 
  if (!data) {
    return <h2 className="text-center mt-10">Impossible de charger les actualités pour le moment.</h2>;
  }
  const { response , params }  = data;
  console.log(response);
  return (
    <section className="section"> 
    <Title text ="All news" />
    <Filters term={params.term} mode="news" key={params.term}/>
    <Overview objects = {data}/>
     <CardsGrid objects ={response} mode="news-page" />
     <PaginationContainer />
     </section> )
}

export default News;
