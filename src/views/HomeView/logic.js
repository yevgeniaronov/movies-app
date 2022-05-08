import api from "@/api";
import { useApi } from "@/api/composables/useApi";
import { sortedUniq, intersectionWith } from "lodash";

export const getLatestMovies = (count) => {
  // TODO: ugly code, didnt have time to adjust, but it should work and it's encapsulated.
  const promises = [];
  const itemsPerPage = 20;
  const length = count / itemsPerPage;

  for (let i = 1; i < length + 1; i++) {
    promises.push(
      api.get(`discover/movie?sort_by=release_date.desc&page=${i}`)
    );
  }

  const { data, exec } = useApi("latestMovies", () => Promise.all(promises), {
    responseAdapter: (res) => {
      const results = res
        .map((item) => item.results)
        .flat()
        .slice(0, count);
      return results;
    },
  });

  exec();

  return {
    data,
  };
};

export const getPopularMovies = (page) => {
  const { data, exec } = useApi(
    "popularMovies",
    () =>
      Promise.all([
        api.get(`movie/popular?page=${page}`),
        api.get(`genre/movie/list`),
      ]),
    {
      responseAdapter: ([movies, genres]) => {
        const results = sortedUniq(movies.results).map((item) => {
          return {
            ...item,
            genres: intersectionWith(
              genres,
              item.genre_ids,
              (a, b) => a.id === b
            ),
            backdrop_path: `${process.env.VUE_APP_IMAGES_BUCKET}${item.backdrop_path}`,
            poster_path: `${process.env.VUE_APP_IMAGES_BUCKET}${item.poster_path}`,
          };
        });
        return {
          ...movies,
          results,
        };
      },
    }
  );

  exec();

  return {
    data,
  };
};
