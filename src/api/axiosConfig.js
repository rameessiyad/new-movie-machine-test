import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://omdbapi.com/",
  timeout: 10000,
  params: {
    apikey: import.meta.env.VITE_OMDB_API_KEY,
  },
});

export default axiosInstance;
