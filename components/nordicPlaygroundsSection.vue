<template>
  <div class="nordic-playgrounds-section">
    <h1>Who's Behind?</h1>
    <h2>{{ detectLanguage(content.fields.title) }}</h2>
    <span v-html="detectLanguage(content.fields.text)"/>
  </div>
</template>

<script>
export default {
  props:{
    content:{}
  },
  computed:{
    i18n(){
      return this.$i18n;
    }
  }
};
</script>
