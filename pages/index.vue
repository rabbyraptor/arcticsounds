<template>
  <div>
    <section class="full-width-section no-top-padding" id="frontpage-section">
      <frontpage-grid :content="frontpageGrid" />
    </section>
    <section class="full-width-section no-top-padding">
      <iceberg-section :content="icebergSection" />
    </section>
    <section class="full-width-section no-top-padding">
      <ticket-integration />
    </section>
    <section>
      <instagram-section />
    </section>
    <section class="full-width-section no-top-padding">
      <countdown-section />
    </section>
  </div>
</template>

<script>
import frontpageGrid from "~/components/frontpageGrid.vue";
import icebergSection from "~/components/icebergSection.vue";
import ticketIntegration from "~/components/ticketIntegration.vue";
import instagramSection from "~/components/instagramSection.vue";
import countdownSection from "~/components/countdownSection.vue";

import { createClient } from "~/plugins/contentful.js";
const client = createClient();

export default {
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({ content_type: "icebergSection", locale:"*" }),
      client.getEntries({ content_type: "frontpageGrid", locale:"*" })
    ])
      .then(([iceberg, fpgrid]) => {
        return {
          icebergSection: iceberg.items[0].fields,
          frontpageGrid: fpgrid.items
        };
      })
      .catch(console.error);
  },
  components: {
    frontpageGrid,
    icebergSection,
    ticketIntegration,
    instagramSection,
    countdownSection
  },
};
</script>

<style>
</style>
