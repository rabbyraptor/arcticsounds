<template>
  <div class="lineup-section">
    <h1>Arctic Sounds Line-up 2019</h1>
    <div class="lineup-grid">
      <div v-if="artists" v-for="artist in artists" :key="artist._id" class="lineup-artist">
        <nuxt-link :to="'lineup/' + artist.slug">
          <div
            class="lineup-image"
            :style="{ backgroundImage: 'url(//goevent-images.s3.amazonaws.com/arcticsoundfestival-2019/b041a9ed/web/artist_' + artist._id + '_' + artist.photo_suffix + '.jpg)' }"
          >
            <span class="lineup-title">
              <h3>{{ artist.title }}</h3>
            </span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goeventHash: process.env.GREENCOPPER_GOEVENT_HASH,
    };
  },
  computed: {
    artists() {
      return this.$store.getters["artists/getArtists"];
    }
  }
};
</script>