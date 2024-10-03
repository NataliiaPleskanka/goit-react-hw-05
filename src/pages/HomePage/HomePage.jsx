import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWJkZDBjMzYwYTllNWIzYjlkMmI0MjFhYTk2MDNmMSIsIm5iZiI6MTcyNzg5NzM2Ny4zMjU4OTUsInN1YiI6IjY2ZjUyYTE4MmMzNjFlOTI1MWVkM2UzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rVaSSwgslwuKL8zdGVycjDPq9A8GVo2JKeSSqQS0f6g",
  },
};

export const fetchMovies = async () => {
  const { data } = await axios.get(
    "trending/movie/day?language=en-US",
    options
  );
  return data.results;
};

export const fetchSearchMovie = async (query) => {
  const { data } = await axios.get(
    `search/movie?query=${query}&page=1`,
    options
  );
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}`, options);
  return data;
};

export const fetchCast = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/credits`, options);
  return data.cast;
};

export const fetchReviews = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, options);
  return data.results;
};
