<template>
  <footer class="main-footer">
    <contact-info>
      <!-- <li>
        <h4>Arctic Sounds</h4>
      </li> -->
    </contact-info>
   <!--  <navigation-menu>
      <li>
        <h4>Sitemap</h4>
      </li>
    </navigation-menu> -->
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