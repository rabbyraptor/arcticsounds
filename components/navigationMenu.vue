<template>
  <ul>
    <slot></slot>
    <li v-for="page in pages" :key="page.name">
      <nuxt-link :to="page.link">{{ page.name }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { name: "Line-up", link: "lineup" },
        { name: "Program", link: "program" },
        { name: "Tickets", link: "#" },
        { name: "Backstage", link: "backstage" }
      ]
    };
  }
};
</script>