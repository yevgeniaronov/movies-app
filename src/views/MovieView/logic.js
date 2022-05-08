import api from "@/api";
import { useApi } from "@/api/composables/useApi";

export const getMovieDetails = (id) => {
  const {
    data,
    exec,
    movieDetailsStatusIdle,
    movieDetailsStatusPending,
    movieDetailsStatusSuccess,
    movieDetailsStatusError,
  } = useApi("movieDetails", () => api.get(`movie/${id}`), {
    responseAdapter: (movie) => {
      return {
        ...movie,
        backdrop_path: `${process.env.VUE_APP_IMAGES_BUCKET}${movie.backdrop_path}`,
        poster_path: `${process.env.VUE_APP_IMAGES_BUCKET}${movie.poster_path}`,
      };
    },
  });

  exec();

  return {
    movieDetailsStatusIdle,
    movieDetailsStatusPending,
    movieDetailsStatusSuccess,
    movieDetailsStatusError,
    data,
  };
};
