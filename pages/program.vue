<template>
  <section class="full-width-section">
    <program-section />
  </section>
</template>

<script>
import programSection from '../components/programSection'

export default {
  async fetch ({ store, params }) {
      let promises = [
        store.dispatch("artists/getData"),
        store.dispatch("program/getData")
      ];

      return await Promise.all(promises);
  },
  components: {
    programSection
  },
  head() {
    return {
      title: "Program | Arctic Sounds",
      meta: [
        {
          name: "description",
          //content: this.metaDescription
        }
      ]
    };
  }
};
</script>