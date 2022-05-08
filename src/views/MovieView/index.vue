<template>
  <movie-details v-if="movieDetailsStatusSuccess" :data="data"></movie-details>
  <!-- movieDetailsStatusPending would show local loading state or activate global loading state in real-world app -->
  <!-- movieDetailsStatusError would show error state -->
</template>

<script>
/* eslint-disable no-unused-vars */
import { useRoute } from "vue-router";
import { getMovieDetails } from "./logic.js";
export default {
  name: "MovieView",
  setup() {
    const route = useRoute();

    const {
      data,
      movieDetailsStatusIdle,
      movieDetailsStatusPending,
      movieDetailsStatusSuccess,
      movieDetailsStatusError,
    } = getMovieDetails(route.params.id);

    return {
      data,
      movieDetailsStatusSuccess,
    };
  },
};
</script>
