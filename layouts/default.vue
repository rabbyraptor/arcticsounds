<template>
  <div class="site-wrapper">
    <main-header />
    <main class="container">
      <nuxt />
    </main>
    <main-footer />
    <back-to-top />
  </div>
</template>

<script>
import mainHeader from "~/components/mainHeader.vue";
import mainFooter from "~/components/mainFooter.vue";
import BackToTop from "~/components/BackToTop.vue";

export default {
  created() {
    this.$store.dispatch("artists/getData");
    this.$store.dispatch("program/getData");
  },
  components: {
    mainHeader,
    mainFooter,
    BackToTop
  }
};
</script>

<style>
</style>
