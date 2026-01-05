import axiosInstance from "./axiosConfig";

export const searchMoviesApi = (query, page = 1) => {
  return axiosInstance.get("/", {
    params: {
      s: query,
      page,
    },
  });
};

export const listMoviesApi = (query = "avenger", page = 1) => {
  return axiosInstance.get("/", {
    params: {
      s: query,
      page,
    },
  });
};

export const getMovieDetailsApi = (imdbID) => {
  return axiosInstance.get("/", {
    params: {
      i: imdbID,
      plot: "full",
    },
  });
};
