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
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  margin: 0 auto;
  text-align: center;
  padding-top:300px;
  width: 100%;
}
</style>
