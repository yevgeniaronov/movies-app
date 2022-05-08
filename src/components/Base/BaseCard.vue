<template>
  <div :class="$style.baseCard" v-bind="$attrs">
    <slot />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style module lang="scss">
.baseCard {
  @apply bg-white shadow-md rounded-lg border border-gray-300 mx-4;
  @screen md {
    @apply mx-0;
  }
}
</style>
