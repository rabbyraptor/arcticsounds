<template>
  <ul>
    <slot></slot>
    <li v-for="info in contactInfo" :key="info.name">
      <span class="icon" v-html="info.icon" /><span>{{ info.info }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      contactInfo: [
        {
          name: "Phone",
          icon: "&#xe090;",
          info: "(+299) 48 69 50"
        },
        {
          name: "Email",
          icon: "&#xe076;",
          info: "info@arcticsounds.gl"
        },
        {
          name: "Address",
          icon: "&#xe074;",
          info: "Sisimiut, Greenland",
        }
      ]
    };
  }
};
</script>