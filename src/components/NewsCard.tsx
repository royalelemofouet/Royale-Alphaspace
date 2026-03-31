import { type News } from "@/utils/type";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Link } from "react-router-dom";

const NewsCard = ({ news, classname } : { news: News; classname ?:string }) => {
  // On ajoute published_at qui vient de l'API SNAPI v4
  const { image_url, title, news_site, url, published_at } = news;

  // Petit formatage rapide de la date
  const dateFormatted = new Date(published_at).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Card className={`${classname} relative text-white border-0 overflow-hidden group`}>
      <Link to={url} target="_blank">
        <CardHeader className="absolute top-2 left-2 z-10 p-3 text-xl capitalize">
          {news_site}
        </CardHeader>

        <CardContent className="h-70 w-full p-0">
          <img
            src={image_url}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          {/* Overlay sombre pour rendre le texte lisible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </CardContent>

        <CardFooter className="absolute bottom-0 flex-col items-start p-4 w-full">
          <p className="text-xs text-gray-300 mb-1">{dateFormatted}</p>
          <h3 className="font-extrabold text-lg leading-tight line-clamp-2">
            {title}
          </h3>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default NewsCard;
