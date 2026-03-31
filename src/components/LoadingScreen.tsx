// Crée un fichier components/LoadingScreen.tsx ou mets-le directement dans ton main.tsx
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]">
      {/* Texte avec animation d'apparition progressive et lueur */}
      <div className="relative mb-12">
        <h1 className="text-3xl md:text-6xl font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-transparent bg-clip-text bg-blue-500 animate-pulse flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center">
          {/* On sépare les mots pour contrôler leur comportement */}
          <span className="animate-reveal">Royale</span>
          <span className="animate-reveal">AlphaSpace</span>
        </h1>
        
        {/* Effet de lumière extérieure */}
        <div className="absolute inset-0 blur-3xl bg-blue-600/10 rounded-full animate-pulse"></div>
      </div>

      {/* Cercle rotatif bleu volumineux */}
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 md:w-24 md:h-24 border-8 border-blue-900/30 border-t-blue-500 rounded-full animate-spin shadow-[0_0_40px_rgba(59,130,246,0.6)]"></div>
        <p className="absolute top-28 md:top-32 text-blue-400 text-xs md:text-base font-light tracking-widest animate-bounce">
          CHARGEMENT...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;