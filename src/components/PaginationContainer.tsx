import { type ReactNode } from "react"; // Manquant
import { useLoaderData, useLocation } from "react-router-dom";
import { buildPrevAndNextUrls, buildUrl } from "@/utils/pagination";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext,
  PaginationEllipsis, 
  PaginationPrevious 
} from "./ui/pagination"; // Imports des sous-composants ajoutés

// Types pour le loader
import { type HubbleImageResponseWithParams, type NewsResponseWithParams } from "@/utils/type";

const PaginationContainer = () => {
  // Correction de 'as any' pour utiliser vos types importés
  const { response } = useLoaderData() as HubbleImageResponseWithParams | NewsResponseWithParams;
  const { pathname, search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const pageFromURL = searchParams.get("page");
  const objectsPerPage = 24;
  const firstPage = 1;
  
  // Utilisation de parseInt ou Number (plus propre que parseFloat pour des pages)
  const activePage = pageFromURL ? parseInt(pageFromURL, 10) : 1;

  // Détermination du nombre total d'objets selon l'API
  let objectsInTotal: number;
  if ("total_count" in response) {
    objectsInTotal = response.total_count;
  } else {
    objectsInTotal = response.count;
  }

  // Calcul de la dernière page
  let lastPage: number;
  if (objectsInTotal === 0) {
    lastPage = 0;
  } else if (objectsInTotal % objectsPerPage === 0) {
    lastPage = objectsInTotal / objectsPerPage;
  } else {
    lastPage = Math.floor(objectsInTotal / objectsPerPage) + 1;
  }

  const { prevUrl, nextUrl } = buildPrevAndNextUrls({
    page: activePage,
    pathname,
    search,
    lastPage,
  });

  const buildDots = (key : string): ReactNode => {
  return <PaginationItem key ={key}>
        <PaginationEllipsis />
    </PaginationItem>

  }
  // Fonction pour construire un bouton de page spécifique
  const buildBtn = ({ page, isActive }: { page: number; isActive: boolean }): ReactNode => {
    const url = buildUrl({ page, pathname, search });
    return (
      <PaginationItem key={page}>
        <PaginationLink to={url} isActive={isActive}>
          {page}
        </PaginationLink>
      </PaginationItem>
    );
  };

  // Construction dynamique de la liste des pages
  const buildContent = (): ReactNode[] => {
    const pages: ReactNode[] = [];
    
    // Si aucune donnée, on ne renvoie rien
    if (lastPage === 0) return [];

    // Première page
    pages.push(buildBtn({ page: firstPage, isActive: activePage === firstPage }));
    
    // ellipse
    pages.push(buildDots("dots-1"));
    // Page active (si elle n'est ni la première ni la dernière)
    if (activePage !== firstPage && activePage !== lastPage) {
      pages.push(buildBtn({ page: activePage, isActive: true }));
    }
         // ellipse
    pages.push(buildDots("dots+1"))
    // Dernière page (si elle existe et est différente de la première)
    if (lastPage > firstPage) {
      pages.push(buildBtn({ page: lastPage, isActive: activePage === lastPage }));
    }

    return pages;
  };
if (lastPage <= 1) return null;
  return (
    <Pagination className="my-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} />
        </PaginationItem>
        
        {buildContent()}

        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationContainer;