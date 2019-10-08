<template>
  <div class="golive-section">
    <h1>Arctic Sounds Line-up 2019</h1>
    <div class="artists-grid">
      <div v-for="artist in artists" :key="artist._id" class="artist">
        <div
          class="artist-image"
          :style="{ backgroundImage: 'url(//goevent-images.s3.amazonaws.com/arcticsoundfestival-2019/b041a9ed/web/artist_' + artist._id + '_' + artist.photo_suffix + '.jpg)' }"
        >
          <span class="artist-title">
            <h3>{{ artist.title }}</h3>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//v-if="artist.photo_suffix"
const axios = require("axios").default;

export default {
  mounted() {
    axios
      .get(
        "https://s3.amazonaws.com/goeventweb-static.greencopper.com/" +
          this.goeventHash +
          "/arcticsoundfestival-2019/data/eng/artists.json"
      )
      .then(response => (this.artists = response.data))
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {});
  },
  data() {
    return {
      goeventHash: process.env.GREENCOPPER_GOEVENT_HASH,
      artists: {}
    };
  },
  props: {
    datatype: {}
  }
};
</script>