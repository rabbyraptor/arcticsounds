<template>
  <ul>
    <slot></slot>
    <li v-for="page in pages" :key="page.name">
      <nuxt-link :to="page.link" @click.native="toggleBurgerMenu()">{{ page.name }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
import toggleBurgerMenu from "./mobileBurgerMenu"
export default {
  mixins: [toggleBurgerMenu],
  data() {
    return {
      pages: [
        { name: "Line-up", link: "/lineup" },
        { name: "Program", link: "/program" },
        { name: "Who's Behind", link: "/whosbehind" },
        { name: "Tickets", link: "#" },
        { name: "Backstage", link: "/backstage" }
      ]
    };
  },
};
</script>