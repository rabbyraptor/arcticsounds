<template>
    <section class="full-width-section">
      <lineup-section/>
    </section>
</template>

<script>
import lineupSection from '../../components/lineupSection'

export default {
  fetch ({ store, params }) {
      let promises = [
        store.dispatch("artists/getData"),
        store.dispatch("program/getData")
      ];

      return Promise.all(promises);
  },
  components: {
    lineupSection
  },
};
</script>