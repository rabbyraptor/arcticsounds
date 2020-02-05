<template>
  <div class="collaborators-section">
    <h2>Arctic Sounds Collaborators</h2>
    <div class="collaborators" v-for="collab in content">
      <div class="collaborator-image">
        <div v-for="(logo, i) in collab.fields.logo.en">
        <a :href="collab.fields.link.en[i]" target="_blank">
          <img :src="logo.fields.file.en.url" :alt="detectLanguage(collab.fields.title)" />
        </a>
        </div>
      </div>
      <div class="collaborator-text-wrapper">
        <h3 class="collaborator-title">{{ detectLanguage(collab.fields.title) }}</h3>
        <p class="collaborator-text" v-html="detectLanguage(collab.fields.text)"></p>
      </div>
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
