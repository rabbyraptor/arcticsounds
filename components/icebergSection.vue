<template>
  <div>
    <div class="iceberg-section" :style="{ backgroundImage: 'url(' + content.image.en.fields.file.en.url + ')' }">
      <p v-html="detectLanguage(content.text)" />
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