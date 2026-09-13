import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-r from-black via-blue-900 to-black border-t border-white/10">
      <div className="align-element min-h-[15em] py-12 flex flex-col justify-center items-center gap-4">
        
        {/* Date et Nom */}
        <div className="text-center">
          <p className="text-blue-300 font-light tracking-widest uppercase text-xs"> - Janvier 2026 -</p>
          <p className="text-3xl font-bold tracking-tighter mt-2">Royale Daurene</p>
        </div>

        {/* Section Ressources */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <p className="underline decoration-blue-500 underline-offset-4 font-semibold text-lg mb-2"> 
            Ressources Officielles 
          </p>
          
          {/* Liens NASA */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
            <Link to="https://www.nasa.gov/" target="_blank" className="hover:text-white hover:underline transition-colors">
              NASA Official
            </Link>
            <Link to="https://api.nasa.gov/" target="_blank" className="hover:text-white hover:underline transition-colors">
              NASA API Portal
            </Link>
            <Link to="https://www.youtube.com/@NASA" target="_blank" className="hover:text-white hover:underline transition-colors">
              NASA TV (YouTube)
            </Link>
          </div>

          {/* Liens SpaceX & Documentation */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300 mt-2">
            <Link to="https://www.spacex.com/" target="_blank" className="hover:text-white hover:underline transition-colors">
              SpaceX
            </Link>
            <Link to="https://react.dev/" target="_blank" className="hover:text-white hover:underline transition-colors">
              React.js Docs
            </Link>
            <Link to="https://tailwindcss.com/" target="_blank" className="hover:text-white hover:underline transition-colors">
              Tailwind CSS
            </Link>
          </div>
        </div>

        {/* Informations complémentaires (Texte statique pour les mots inconnus) */}
        <div className="mt-6 flex flex-col items-center text-xs text-blue-400/60 uppercase tracking-[0.2em]">
          <p>Stage Académique - Projet Royale AlphaSpace</p>
          <p className="mt-1">Développement & Innovation</p>
        </div>

        {/* Note de bas de page */}
        <p className="mt-8 text-[10px] text-gray-500 italic">
          Propulsé par la curiosité et l'exploration spatiale.
        </p>
      </div>
    </footer>
  );
};

export default Footer;