<template>
  <section class="full-width-section">
    <program-section />
  </section>
</template>

<script>
import programSection from '../components/programSection'

export default {
  fetch ({ store, params }) {
      let promises = [
        store.dispatch("artists/getData"),
        store.dispatch("program/getData")
      ];

      return Promise.all(promises);
  },
  components: {
    programSection
  }
};
</script>