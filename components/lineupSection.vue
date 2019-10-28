<template>
  <div class="lineup-section">
    <h1>Arctic Sounds Line-up 2019</h1>
    <div class="lineup-grid">
      <div v-for="artist in artists" :key="artist._id" class="lineup-artist">
        <nuxt-link :to="'lineup/' + artist.slug">
          <div
            class="lineup-image"
            :style="backgroundImage(artist._id, artist.photo_suffix)"
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
var _ = require("lodash");
import VanillaTilt from "vanilla-tilt";

export default {
  mounted(){
    this.tiltImages();
  },
  updated() {
    this.tiltImages();
  },
  methods: {
    backgroundImage(id, suffix){
      if(!suffix){
        return "background-image: url(/img/image-placeholder.png)"
      }else{
        return "background-image: url(//goevent-images.s3.amazonaws.com/arcticsoundfestival-2019/b041a9ed/web/artist_" + id + "_" + suffix + ".jpg)"
      }
    },
    tiltImages() {
      VanillaTilt.init(document.querySelectorAll(".lineup-image"), {
        max: 2.5,
        perspective: 1200,
        glare: true,
        speed: 200,
        gyroscope: false,
        scale: 1.02,
        "max-glare": 0.2
      });
    }
  },
  data() {
    return {
      goeventHash: process.env.GREENCOPPER_GOEVENT_HASH
    };
  },
  computed: {
    artists() {
      return _.sortBy(this.$store.getters["artists/getArtists"], "title");
    }
  }
};
</script>