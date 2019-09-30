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
    <section>
      <countdown-section />
    </section>
  </div>
</template>

<script>
import frontpageGrid from "~/components/frontpageGrid.vue";
import icebergSection from "~/components/icebergSection.vue";
import instagramSection from "~/components/instagramSection.vue";
import countdownSection from "~/components/countdownSection.vue";

export default {
  components: {
    frontpageGrid,
    icebergSection,
    instagramSection,
    countdownSection
  }
};
</script>

<style>
path.svg-icon{
  fill:#ffffff;
}
</style>
