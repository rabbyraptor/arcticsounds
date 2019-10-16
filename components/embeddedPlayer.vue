<template>
  <div class="embedded-link">
    <iframe
      width="100%"
      :height="this.height"
      frameborder="0"
      :src="this.src"
      allowtransparency="true"
      allow="encrypted-media;"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    type: {},
    link: {}
  },
  data() {
    return {
      height: "300px"
    };
  },
  methods: {},
  computed: {
    src() {
      if (this.type == "Spotify") {
        return "//embed.spotify.com/?uri=" + this.link.url;
      }
      if (this.type == "Soundcloud") {
        this.height = "auto";
        return "//w.soundcloud.com/player/?url=" + this.link.url + "&auto_play=false&show_artwork=false";
      }
      if (this.type == "Apple Music") {
        this.height = "auto";
        return "//embed.music.apple.com/embed/" + this.link.url;
      }
      if (this.type == "Youtube") {
        return "//www.youtube-nocookie.com/embed/" + this.link.url;
      }
    }
  }
};
</script>

<style>
</style>