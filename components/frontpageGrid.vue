<template>
  <div class="frontpage-grid">
    <div class="left">
      <div
        class="grid-image"
        v-for="image in leftImages"
        :key="image.fields.title"
        :style="{ backgroundImage: 'url(' + image.fields.image.fields.file.url + ')' }"
      >
        <h2>{{ image.fields.title }}</h2>
      </div>
    </div>
    <div class="right">
      <div
        class="grid-image"
        v-for="image in rightImages"
        :key="image.fields.title"
        :style="{ backgroundImage: 'url(' + image.fields.image.fields.file.url + ')' }"
      >
        <h2>{{ image.fields.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {}
  },
  computed: {
    leftImages() {
      let leftImages = this.content.filter(image => {
        return image.fields.leftColumn == true;
      });
      return leftImages;
    },
    rightImages() {
      let rightImages = this.content.filter(image => {
        return image.fields.leftColumn != true;
      });
      return rightImages;
    }
  }
};
</script>