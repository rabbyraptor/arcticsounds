<template>
  <header class="main-header">
    <nav>
      <logo />
      <mobile-burger-menu class="mobile-burger-menu" />
      <div class="nav-menu-wrapper">
        <navigation-menu />
        <navigation-menu-sub />
      </div>
      <div class="mobile">
        <navigation-menu />
        <navigation-menu-sub />
      </div>
    </nav>
  </header>
</template>

<script>
import logo from "~/components/logo.vue";
import navigationMenu from "~/components/navigationMenu.vue";
import navigationMenuSub from "~/components/navigationMenuSub.vue";
import mobileBurgerMenu from "~/components/mobileBurgerMenu.vue";
import Headroom from "headroom.js";

export default {
  data(){
    return{
      headroom:{}
    }
  },
  mounted() {
    const header = document.querySelector("header");
    const options = {
      offset: 180,
      tolerance: {
        up: 300,
        down: 10
      }
    };
    this.headroom = new Headroom(header, options);
    this.headroom.init();
    this.checkRoute();
  },
  watch: {
    $route() {
      console.info(this.$route.name);
      this.checkRoute();
    }
  },
  methods:{
    checkRoute(){
      if (this.$route.name == "lineup-artist" || this.$route.name == "program") {
        this.headroom.unpin();
        this.headroom.freeze();
      }else{
        this.headroom.pin();
        this.headroom.unfreeze();
      }
    }
  },
  components: {
    logo,
    navigationMenu,
    navigationMenuSub,
    mobileBurgerMenu,
    Headroom
  }
};
</script>