<template>
  <div class="sponsors-grid">
    <span v-if="this.$i18n.locale == 'kl'">
      <h2>(GL) Arctic Sounds Sponsors</h2>
      <p>(GL) A million thanks to our sponsors, without whom none of this would be possible!</p>
    </span>
    <span v-else>
      <h2>Arctic Sounds Sponsors</h2>
      <p>A million thanks to our sponsors, without whom none of this would be possible!</p>
    </span>
    <div class="sponsors">
      <a
        class="sponsor-image"
        v-for="sponsor in content"
        :key="sponsor.fields.title"
        :href="sponsor.fields.link"
        target="_blank"
      >
        <img :src="sponsor.fields.logo.fields.file.url" :alt="sponsor.fields.title" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {}
  }
};
</script>
