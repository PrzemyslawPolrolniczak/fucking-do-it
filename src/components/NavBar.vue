<template>
  <div class="nav-bar-container">
    <div class="logo">LOGO</div>
    <category-tile text="Life" to="/life" />
    <category-tile text="Work" to="/work" />
    <category-tile text="Home" to="/home" />
    <category-tile text="University" to="/university" />
    <category-tile text="Diet & Health" to="/diet_and_health" />
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
.nav-bar-container {
  background-color: var(--white);
  border-radius: 1rem;
  padding: 1rem;

  & .logo {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
}
</style>