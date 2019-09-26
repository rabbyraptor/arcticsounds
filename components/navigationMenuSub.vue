<template>
  <ul class="navigation-menu-sub">
    <li v-for="icon in socialIcons" :key="icon.name">
      <a class="icon" :href="icon.link" :target="icon.target" v-html="icon.icon"></a>
    </li>
    <li>
      <a href="#">ENG</a><span class="slash">/</span><a href="#">KAL</a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      socialIcons: [
        { name: "Facebook", link: "https://www.facebook.com/arcticsoundsfestival/", icon: "&#xe093;", target: "_blank" },
        { name: "Instagram", link: "https://www.instagram.com/arctic_sounds/", icon: "&#xe09a;", target: "_blank" },
        { name: "YouTube", link: "https://www.youtube.com/channel/UCijkw7QJJgnOHI3LbMuLFuA", icon: "&#xe0a3;", target: "_blank" },
        { name: "Mail", link: "mailto:info@arcticsounds.gl", icon: "&#xe076;", target: "_blank" }
      ]
    };
  }
};
</script>