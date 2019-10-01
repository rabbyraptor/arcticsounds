<template>
  <div>
    <main-header />
    <main class="container">
      <nuxt />
    </main>
    <main-footer />
    <back-to-top/>
  </div>
</template>

<script>
import mainHeader from "~/components/mainHeader.vue";
import mainFooter from "~/components/mainFooter.vue";
import BackToTop from '~/components/BackToTop.vue';

export default {
  components: {
    mainHeader,
    mainFooter,
    BackToTop
  }
};
</script>

<style>


</style>
