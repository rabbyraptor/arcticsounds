<template>
  <div class="nordic-playgrounds-section">
    <h1>Who's Behind?</h1>
    <h2>{{ content.fields.title }}</h2>
    <span v-html="content.fields.text"/>
  </div>
</template>

<script>
export default {
  props:{
    content:{}
  }
};
</script>
