<template>
  <div class="cta-bar-container">
    <span class="subtitle">What are you waiting for?</span>
    <h1 class="title">Stop procastinating and do it!</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CtaBar",
});
</script>

<style lang="postcss" scoped>
.cta-bar-container {
  padding: 3rem 0;

  & .subtitle {
    color: var(--color3);
  }

  & .title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.4;
  }
}
</style>