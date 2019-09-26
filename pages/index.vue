<template>
  <div>
    <section>
      <frontpage-grid />
    </section>
    <section>
      <iceberg-section />
    </section>
  </div>
</template>

<script>
import frontpageGrid from "~/components/frontpageGrid.vue";
import icebergSection from "~/components/icebergSection.vue";

export default {
  components: {
    frontpageGrid,
    icebergSection
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 300px;
}
</style>
