<template>
  <div class="instagram-section">
    <div class="ig-logo">
      <h2>Arctic Sounds On</h2>
      <a href="https://www.instagram.com/arctic_sounds/" target="_blank">
        <img src="/img/instagram-logo.png" />
      </a>
    </div>
    <vue-instagram
      token="7360104530.1677ed0.c8118f00548644349a14969a773d7e0f"
      :count="9"
      mediaType="image, video"
      class="ig-grid"
    >
      <template slot="feeds" slot-scope="props">
        <a :href="props.feed.link" target="_blank" class="ig-img">
          <img :src="props.feed.images.low_resolution.url" />
        </a>
      </template>
      <!--       <template slot="error" slot-scope="props">
        <div class="fancy-alert">{{ props.error.error_message }}</div>
      </template>-->
    </vue-instagram>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {}
};
</script>