<template>
  <footer class="main-footer">
    <contact-info>
      <li>
        <h3>Arctic Sounds</h3>
      </li>
    </contact-info>
    <navigation-menu>
      <li>
        <h3>Sitemap</h3>
      </li>
    </navigation-menu>
  </footer>
</template>

<script>
import contactInfo from "~/components/contactInfo.vue";
import navigationMenu from "~/components/navigationMenu.vue";

export default {
  components: {
    navigationMenu,
    contactInfo
  }
};
</script>