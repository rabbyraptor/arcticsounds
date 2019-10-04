<template>
  <div class="faq-section">
    <h1>Backstage</h1>
    <h2>FAQ</h2>
    <div class="faq" v-for="item in content" :key="item.fields.question">
      <p class="question" v-html="item.fields.question"></p>
      <p class="answer" v-html="item.fields.answer"></p>
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
