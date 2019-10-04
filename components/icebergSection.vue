<template>
  <div>
    <div class="iceberg-section" :style="{ backgroundImage: 'url(' + content.image.fields.file.url + ')' }">
      <p v-html="content.text" />
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