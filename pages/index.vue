<template>
  <section class="container">
    <frontpage-grid></frontpage-grid>
  </section>
</template>

<script>
import frontpageGrid from "~/components/frontpageGrid.vue";

export default {
  components: {
    frontpageGrid
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
