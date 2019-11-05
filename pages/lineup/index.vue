<template>
    <section class="no-side-padding-mobile">
      <lineup-section/>
    </section>
</template>

<script>
import lineupSection from '../../components/lineupSection'

export default {
  async fetch ({ store, params }) {
      let promises = [
        store.dispatch("artists/getData"),
        store.dispatch("program/getData")
      ];

      return await Promise.all(promises);
  },
  components: {
    lineupSection
  },
  head() {
    return {
      title: "Line-Up | Arctic Sounds",
      meta: [
        {
          name: "description",
          //content: ""
        }
      ]
    };
  }
};
</script>