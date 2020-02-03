<template>
  <ul>
    <slot></slot>
    <li>
      <nuxt-link v-if="this.$route.name == 'index'" to="/" @click.native="toggleBurgerMenu(); backToTop()">Home</nuxt-link>
      <nuxt-link v-else to="/" @click.native="toggleBurgerMenu();">Home</nuxt-link>
    </li>
    <li v-for="page in pages" :key="page.name">
      <nuxt-link :to="page.link" @click.native="toggleBurgerMenu()">{{ page.name }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
import toggleBurgerMenu from "./mobileBurgerMenu";
import BackToTop from "./BackToTop";
export default {
  mixins: [toggleBurgerMenu, BackToTop],
  data() {
    return {
      pages: [
        { name: "Line-up", link: "/lineup" },
        { name: "Program", link: "/program" },
        { name: "Who's Behind", link: "/whosbehind" },
        { name: "Backstage", link: "/backstage" },
        { name: "Tickets", link: "/#tickets" }
      ]
    };
  }
};
</script>