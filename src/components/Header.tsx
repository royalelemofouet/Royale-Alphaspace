import { Link } from "react-router-dom";
import spaceImg from "../assets/images/cc.jfif";

const Header = () => {
  // Fonction pour gérer le style du cercle actif
  // On l'utilise maintenant dans la propriété className des NavLink
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-black via-blue-900 to-black shadow-lg"> 
      <div className="align-element grid grid-cols-2 md:grid-cols-3 p-4 items-center">
        
        {/* Nom du site / Lien Home */}
        {/* Utilisation de la fonction ici pour éviter l'erreur TS */}

        {/* Logo au milieu sur desktop */}
        <div className="hidden md:flex justify-center">
          <Link to="/">
            <img src={spaceImg} alt="logo" className="h-12 w-12 rounded-full border border-blue-500/50 object-cover" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="justify-self-end flex gap-4 text-white items-center">
          {/* Exemple d'un autre lien pour tester le style actif */}

          <Link to="/" className="md:hidden">
            <img src={spaceImg} alt="logo" className="h-10 w-10 rounded-full" />
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;