<template>
  <img :src="data.poster_path" alt="" />
  <div :class="$style.title">
    <div>
      {{ data.original_title }}
    </div>
    <!-- a lot can be done UI wise, i.e elipsis + tooltip on long titles. extracting year only from date via date-fns -->
    <div>
      {{ data.release_date }}
    </div>
  </div>
  <div :class="$style.title">Score: {{ data.vote_average }}</div>
  <!-- <div>
      <base-card v-for="genre in data.genres" :key="genre">
        {{ genre }}</base-card
      >
    </div> -->
  <div>
    {{ data.overview }}
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" module>
.title {
  @apply text-lg font-semibold flex justify-between py-2;
}
</style>
