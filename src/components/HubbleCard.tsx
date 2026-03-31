import { type HubbleImage } from "@/utils/type";
import { Link } from "react-router-dom";
import { CardHeader , Card, CardContent, CardTitle, CardFooter } from "./ui/card";
import { CircleArrowRight } from "lucide-react";

const HubbleCard = ({image}: {image : HubbleImage}) => {
    const  {photo_id, photo_date_taken, photo_title, photo_url_m} = image;
    const { url } = photo_url_m;
  return (
    <Link to={`/hubble/${photo_id}`}>
     <Card className="relative min-h-[400px] rounded-none slider-card">
        <CardHeader className="absolute text-white z-10">
            <CardTitle className="absolute top-2 left-2">
               {photo_title}
            </CardTitle>
        </CardHeader>
        <CardContent className="absolute h-full w-full p-0 top-0 left-0">
            <img src={url} alt="hubble-pic" className="h-full w-full object-cover" />
             </CardContent>
        <CardFooter className="flex gap-2 absolute bottom-2 text-white">
            <p> Taken: {photo_date_taken}</p>
            <CircleArrowRight color = "var(--clr-violet)" className="hover:scale-150  transition-all cursor-pointer" />
        </CardFooter>
     </Card>
    </Link>
  );
};

export default HubbleCard;
