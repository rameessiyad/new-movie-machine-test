import { createSlice } from "@reduxjs/toolkit";
import { getMovieDetailsApi, listMoviesApi } from "../../api/movieApi";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    upcomingList: [],
    loading: false,
    error: null,
    totalResults: 0,
  },
  reducers: {
    fetchMoviesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.totalResults = action.payload.totalResults || 0;
    },
    fetchMoviesFailure: (state, action) => {
      state.loading = false;
      state.list = [];
      state.error = action.payload;
    },
    setBannerMovie: (state, action) => {
      state.bannerMovie = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcomingList = action.payload.Search || [];
    },
  },
});

export const {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  setBannerMovie,
  setUpcomingMovies,
} = movieSlice.actions;

export const fetchMovies =
  (query = "avenger", page = 1) =>
  async (dispatch) => {
    try {
      dispatch(fetchMoviesStart());
      const res = await listMoviesApi(query, page);

      if (res.data.Response === "True") {
        dispatch(fetchMoviesSuccess(res.data.Search));

        const random =
          res.data.Search[Math.floor(Math.random() * res.data.Search.length)];

        dispatch(fetchBannerMovie(random.imdbID));
      }
    } catch (err) {
      dispatch(fetchMoviesFailure(err.message));
    }
  };
export const fetchBannerMovie = (imdbID) => async (dispatch) => {
  try {
    const res = await getMovieDetailsApi(imdbID);
    dispatch(setBannerMovie(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const fetchUpcomingMovies =
  (query = "upcoming") =>
  async (dispatch) => {
    try {
      const res = await listMoviesApi(query); 
      if (res.data.Response === "True") {
        dispatch(setUpcomingMovies(res.data));
      }
    } catch (err) {
      console.error("Upcoming movies error:", err.message);
    }
  };

export default movieSlice.reducer;
