<template>
  <div class="faq-section">
    <h1>Backstage</h1>
    <h2>FAQ</h2>
    <div class="faq" v-for="item in content" :key="item.fields.question">
      <h3 class="question" v-html="detectLanguage(item.fields.question)"></h3>
      <p class="answer" v-html="detectLanguage(item.fields.answer)"></p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    content:{}
  }
};
</script>
