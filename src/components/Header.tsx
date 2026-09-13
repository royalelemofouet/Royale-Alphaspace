import { Link } from "react-router-dom";
import spaceImg from "../assets/images/cc.jfif";
import { LinksMobile } from ".";
import LinksDesktop from "./LinksDesktop";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-black via-blue-900 to-black shadow-lg">
      <div className="align-element relative flex h-20 items-center">

        {/* =========================
            LOGO — GAUCHE
        ========================== */}
        <div className="flex shrink-0 items-center">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Retour à l'accueil"
          >
            <img
              src={spaceImg}
              alt="Logo"
              className="h-12 w-12 rounded-full border border-blue-400/50 object-cover shadow-md"
            />

            <span className="hidden whitespace-nowrap text-lg font-bold tracking-wide text-white md:block">
              Royale Alphaspace
            </span>
          </Link>
        </div>

        {/* =========================
            NAVIGATION DESKTOP
            CENTRÉE
        ========================== */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <LinksDesktop />
        </div>

        {/* =========================
            ESPACE DROITE
            Permet de garder le
            header équilibré
        ========================== */}
        <div className="ml-auto hidden w-[220px] lg:block" />

        {/* =========================
            NAVIGATION MOBILE
        ========================== */}
        <div className="ml-auto flex lg:hidden">
          <LinksMobile />
        </div>

      </div>
    </header>
  );
};

export default Header;