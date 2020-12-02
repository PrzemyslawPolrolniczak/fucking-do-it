<template>
  <div class="container">
    <div class="logo">LOGO</div>
    <category-tile text="Hello World"></category-tile>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CategoryTile from "@/components/CategoryTile.vue";

export default defineComponent({
  name: "NavBar",
  components: {
    CategoryTile,
  },
});
</script>

<style lang="postcss" scoped>
.container {
  width: 400px;
  background-color: var(--white);
  border-radius: 1rem;
  padding: 1rem;

  & .logo {
    padding: 1.5rem;
  }
}
</style>