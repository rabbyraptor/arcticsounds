<template>
  <div>
    <section>
      <frontpage-grid />
    </section>
    <section>
      <iceberg-section />
    </section>
    <section>
      <instagram-section />
    </section>
  </div>
</template>

<script>
import frontpageGrid from "~/components/frontpageGrid.vue";
import icebergSection from "~/components/icebergSection.vue";
import instagramSection from "~/components/instagramSection.vue";

export default {
  components: {
    frontpageGrid,
    icebergSection,
    instagramSection
  }
};
</script>

<style>

</style>
