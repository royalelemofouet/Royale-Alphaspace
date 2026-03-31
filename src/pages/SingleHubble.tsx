import { Title } from "@/components";
import { Button } from "@/components/ui/button";
import {  Card, CardContent,  CardFooter, CardHeader, CardTitle } from "@/components/ui/card"; 
import { datastroCustomFetch } from "@/utils/customFetch";
import {type  HubbleImage,type HubbleImageResponse } from "@/utils/type";
import { type LoaderFunction, useLoaderData, useNavigate } from "react-router-dom";

export const SingleHubblePageLoader: LoaderFunction = async ({ params }): Promise<HubbleImage | null> => {
  try {
    const formattedParams = { 
      where: params.id ? `photo_id like "${params.id}"` : "" 
    };

    const response = await datastroCustomFetch.get<HubbleImageResponse>("", { 
      params: formattedParams 
    });

    return response.data.results[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};

const SingleHubble = () => {
  const navigate = useNavigate();
  const data = useLoaderData() as HubbleImage;

  // Destructuration des données de l'image
  const { 
    photo_date_taken, 
    album_name_tags, 
    photo_description, 
    photo_title, 
    photo_url_m, 
    photo_license 
  } = data;

  return (
    <section className="section">
      <Button 
        type="button" 
        variant="default" 
        size="lg" 
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      
      <Title text="hubble telescope photo" />
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex justify-between items-center text-2xl">
            <div>
              {photo_title} <span className="text-muted-foreground text-lg">| {album_name_tags}</span>
            </div>
            <div className="text-sm font-normal">
              <p>Taken: {photo_date_taken}</p>
            </div>
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <img 
            src={photo_url_m.url} 
            alt={photo_title} 
            className="w-full h-full rounded-md shadow-lg" 
          />
          <p className="mt-6 text-lg leading-relaxed text-pretty">
            {photo_description}
          </p>
        </CardContent>
        
        <CardFooter className="border-t pt-4 text-sm italic text-muted-foreground">
          License: {photo_license}
        </CardFooter>
      </Card>
    </section>
  );
};

export default SingleHubble;