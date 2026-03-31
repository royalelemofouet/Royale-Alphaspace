import type { FiltersParams, HubbleImageResponse, HubbleImageResponseWithParams } from "@/utils/type";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { datastroCustomFetch } from "@/utils/customFetch";
import  Title from "@/components/Title";
import Overview from "@/components/Overview";
import CardsGrid from "@/components/CardsGrid";
import  Filters  from "@/components/Filters";
import { PaginationContainer } from "@/components";

const hubbleParams = {
   order_by: "photo_date_taken desc",
   limit: 24,
}

export const HubblePageLoader: LoaderFunction = async({request}): Promise<HubbleImageResponseWithParams | null> => {
  try{
    const params: FiltersParams = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    const formattedParams = {
      where: params.term ? `photo_title like " ${params.term}" ` : "",
          offset : params.page ? 24* parseFloat(params.page) -1 : 0,
      ...hubbleParams
    };
    const response = await datastroCustomFetch.get <HubbleImageResponse>("", { params: formattedParams});
    return  { response: response.data, params};
  }catch (error){
    console.log(error);
    return null;
  }
};

const Hubble = () => {
  const data = useLoaderData() as HubbleImageResponseWithParams;
   if (!data) {
    return <p>Erreur de chargement des images Hubble.</p>;
  }
  const { response, params} = data;
   const hubbles = response.results;
  console.log(data);
  return (
    <section className="section" >
      <Title text=" Hubble telescope photos " />
      <Filters term={params.term} mode="hubble" key={params.term}/>
        <Overview objects = {response}/>
         <CardsGrid mode="hubble" objects={hubbles}/>
         <PaginationContainer />
    </section>
  )
};

export default Hubble;
