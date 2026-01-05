import { createSlice } from "@reduxjs/toolkit";
import { getMovieDetailsApi, listMoviesApi } from "../../api/movieApi";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
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
      state.list = action.payload.Search;
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
  },
});

export const {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  setBannerMovie,
} = movieSlice.actions;

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch(fetchMoviesStart());
    const res = await listMoviesApi();

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

export default movieSlice.reducer;
