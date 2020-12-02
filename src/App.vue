<template>
  <div class="app-container">
    <nav-bar />
    <div>
      <cta-bar />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import CtaBar from "@/components/CtaBar.vue";

export default defineComponent({
  components: {
    NavBar,
    CtaBar,
  },
});
</script>

<style lang="postcss">
.app-container {
  height: 100vh;
  padding: 1rem;
  background-color: var(--background);
  display: grid;
  grid-template-columns: 400px 1fr 2fr;
  column-gap: 2rem;

  @media (--lg) {
    grid-template-columns: 300px 1fr;
  }

  @media (--md) {
    grid-template-columns: 1fr;
  }
}
</style>