<template>
  <section>
    <artist-presentation :artist="this.artist"/>
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
  computed:{
    artist() {
      return this.$store.getters["artists/getArtistBySlug"](
        this.$route.params.artist
      );
    },
  },
  components:{
    artistPresentation,
  }
};
</script>

