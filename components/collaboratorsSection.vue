<template>
  <div class="collaborators-section">
    <h2>Arctic Sounds Collaborators</h2>
    <div class="collaborators" v-for="collaborator in content" :key="collaborator.fields.title">
      <div class="collaborator-image">
        <a :href="collaborator.fields.link[0]" target="_blank">
          <img :src="collaborator.fields.logo[0].fields.file.url" :alt="collaborator.fields.title" />
        </a>
        <div v-if="collaborator.fields.logo[1]">
          <a :href="collaborator.fields.link[1]" target="_blank">
            <img
              :src="collaborator.fields.logo[1].fields.file.url"
              :alt="collaborator.fields.title"
            />
          </a>
        </div>
      </div>
      <div class="collaborator-text-wrapper">
        <h3 class="collaborator-title">{{ collaborator.fields.title }}</h3>
        <p class="collaborator-text" v-html="collaborator.fields.text"></p>
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
