<template>
  <div class="instagram-section">
    <div class="ig-logo">
      <h2>Arctic Sounds On</h2>
      <a href="https://www.instagram.com/arctic_sounds/" target="_blank">
        <img src="/img/instagram-logo.png" />
      </a>
    </div>
    <vue-instagram :token="igToken" :count="9" mediaType="image, video" class="ig-grid">
      <template slot="feeds" slot-scope="props">
        <a :href="props.feed.link" target="_blank" class="ig-img">
          <img :src="props.feed.images.low_resolution.url" />
        </a>
      </template>
    </vue-instagram>
  </div>
</template>

<script>
export default {
  data() {
    return {
      igToken: process.env.IG_ACCESS_TOKEN
    };
  }
};
</script>