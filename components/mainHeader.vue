<template>
  <header class="main-header">
    <logo />
    <nav>
      <navigation-menu />
      <navigation-menu-sub />
    </nav>
  </header>
</template>

<script>
import logo from "~/components/logo.vue";
import navigationMenu from "~/components/navigationMenu.vue";
import navigationMenuSub from "~/components/navigationMenuSub.vue";
import Headroom from "headroom.js";

export default {
  mounted() {
    var header = document.querySelector("header");
    var options = {
      offset: 10,
      tolerance: 10
    };
    var headroom = new Headroom(header, options);
    headroom.init();
  },
  components: {
    logo,
    navigationMenu,
    navigationMenuSub,
    Headroom
  }
};
</script>