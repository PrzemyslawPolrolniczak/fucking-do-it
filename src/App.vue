<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div id="nav"><router-link to="/">Home</router-link> |</div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NavBar } from "./components/NavBar.vue";

export default defineComponent({
  components: {
    NavBar,
  },
});
</script>

<style lang="postcss">
#app {
  background-color: var(--background);
  height: 100vh;
  display: flex;
  padding: 1rem;
}
</style>