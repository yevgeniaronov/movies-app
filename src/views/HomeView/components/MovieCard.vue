<template>
  <base-card :class="$style.movieCard">
    <!-- in real world app should use custom component that loads images only when in viewport -->
    <movie-details :data="data"></movie-details>
  </base-card>
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
.movieCard {
  @apply p-4 cursor-pointer;
}
</style>
