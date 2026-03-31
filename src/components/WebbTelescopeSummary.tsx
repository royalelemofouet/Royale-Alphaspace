const WebbTelescopeSummary = () => {
  const videoId = "5nHMTpl4aUk";
  const nasaWebbYoutubeVideo = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;

  return (
    <div className="w-full h-full overflow-hidden rounded-xl shadow-lg">
      <iframe 
        src={nasaWebbYoutubeVideo} 
        title="NASA James Webb Video"
        height="100%"
        width="100%" 
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="min-h-[500px] border-0"
      >
      </iframe>
    </div>
  );
};

export default WebbTelescopeSummary;