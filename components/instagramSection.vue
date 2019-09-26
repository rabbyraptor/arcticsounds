<template>
  <div class="instagram-section">
    <div class="ig-logo">
        <h2>Arctic Sounds On</h2>
      <img src="/img/instagram-logo.png" />
    </div>
    <vue-instagram
      token="37850897.1677ed0.e07d1c8b410842af8c53d52012e57a90"
      :count="9"
      mediaType="image"
      class="ig-grid"
    >
      <template slot="feeds" slot-scope="props">
          <li class="fancy-list ig-img">
            <img :src="props.feed.images.low_resolution.url" />
          </li>
      </template>
      <template slot="error" slot-scope="props">
        <div class="fancy-alert">{{ props.error.error_message }}</div>
      </template>
    </vue-instagram>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {}
};
</script>