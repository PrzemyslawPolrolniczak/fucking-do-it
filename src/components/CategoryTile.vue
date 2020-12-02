<template>
  <div class="category-tile">
    <div class="box"><span>X</span></div>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoryTile",
  props: {
    text: String,
  },
  data() {
    return {
      text: this.text,
    };
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
    transition: color 0.1s;
  }
}
</style>