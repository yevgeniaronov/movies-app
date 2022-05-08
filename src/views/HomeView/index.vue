<template>
  <div :class="$style.home">
    <movies-chart></movies-chart>
    <movie-card
      v-for="movie in popularMovies"
      :key="movie.id"
      :data="movie"
      @click="handleCardClick(movie.id)"
    >
    </movie-card>
    <div ref="target"></div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { getPopularMovies } from "./logic";
import { computed, defineAsyncComponent, ref, onMounted } from "vue";
import { useInfiniteScroll } from "@vueuse/core";
const MovieCard = defineAsyncComponent(() =>
  import("./components/MovieCard.vue")
);
const MoviesChart = defineAsyncComponent(() =>
  import("./components/MoviesChart.vue")
);

export default {
  name: "HomeView",
  components: { MovieCard, MoviesChart },
  setup() {
    const router = useRouter();

    const target = ref(null);
    const currentPage = ref(1);
    const { data } = getPopularMovies(currentPage.value);
    const popularMovies = computed(() => data.value?.results);

    const handleCardClick = (id) => {
      router.push({
        name: "movie",
        params: {
          id,
        },
      });
    };

    onMounted(() => {
      //TODO: cant make the infinite scroll hook work for some reason
      useInfiniteScroll(
        target,
        () => {
          debugger;
          // currentPage.value += 1;
          // const { data } = getPopularMovies(currentPage.value);
          // data.value.push(...data.values?.results);
        },
        { distance: 0 }
      );
    });

    return { popularMovies, target, handleCardClick };
  },
};
</script>

<style lang="scss" module>
.home {
  @apply grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4;
}
</style>
