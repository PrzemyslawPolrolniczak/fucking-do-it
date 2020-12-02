<template>
  <router-link class="category-tile" :to="to">
    <div class="box"><span>X</span></div>
    <span class="text">{{ text }}</span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoryTile",
  props: {
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
});
</script>

<style lang="postcss" scoped>
.category-tile {
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  transition: background 0.1s;
  color: inherit;

  &:hover {
    background-color: var(--color4);

    & .text {
      color: var(--color1);
    }
  }

  & .box {
    padding: 0.5rem;
    background-color: var(--white);
    border-radius: 0.5rem;
    width: 3rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .text {
    font-weight: 700;
    padding: 0 1rem;
    font-size: 1.2rem;
    transition: color 0.1s;
  }
}
</style>