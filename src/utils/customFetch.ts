import axios from "axios";

const snapiAPI = "https://api.spaceflightnewsapi.net/v4/articles/";
const datastroAPI = "https://www.datastro.eu/api/explore/v2.1/catalog/datasets/nasahubble/records";
const nasaAPI = "https://api.nasa.gov/planetary/apod";
const webbAPI = "https://api.jwstapi.com/all/type/jpg";
const spacexAPI = "https://api.spacexdata.com/v3/";

export const snapiCustomFetch = axios.create({
    baseURL: snapiAPI,
}
);
export const datastroCustomFetch = axios.create({
    baseURL: datastroAPI,
}
);
export const nasaCustomFetch = axios.create({
  baseURL: nasaAPI,
});

// Dans votre fichier de configuration axios
nasaCustomFetch.interceptors.request.use((config) => {
  // On utilise process.env ici
  const apiKey = import.meta.env.VITE_API_KEY_NASA;

  config.params = {
    ...config.params,
    api_key: apiKey || "DEMO_KEY",
  };
  return config;
});
export const WebbCustomFetch = axios.create({
    baseURL:webbAPI,
    headers: {"X-API-KEY" : import.meta.env.VITE_API_KEY_JWST },
}
);
export const SpacexCustomFetch = axios.create({
    baseURL: spacexAPI,
}
);