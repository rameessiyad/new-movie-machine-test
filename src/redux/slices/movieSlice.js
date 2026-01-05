import { createSlice } from "@reduxjs/toolkit";
import { searchMoviesApi } from "../../api/movieApi";

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
  },
});

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } =
  movieSlice.actions;

export const fetchMovies =
  (query, page = 1) =>
  async (dispatch) => {
    try {
      dispatch(fetchMoviesStart());
      const response = await searchMoviesApi(query, page);
      if (response.data.Response === "True") {
        dispatch(fetchMoviesSuccess(response.data));
      } else {
        dispatch(fetchMoviesFailure(response.data.Error));
      }
    } catch (error) {
      dispatch(fetchMoviesFailure(error.message));
    }
  };

export default movieSlice.reducer;
