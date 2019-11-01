<template>
  <section>
    <artist-presentation/>
  </section>
</template>

<script>
import artistPresentation from "../../components/artistPresentation";

export default {
  async fetch({ store, params }) {
    let promises = [
      store.dispatch("artists/getData"),
      store.dispatch("program/getData")
    ];
    return await Promise.all(promises);
  },
  components:{
    artistPresentation,
  }
};
</script>

