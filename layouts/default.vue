<template>
  <div>
    <main-header />
    <main class="container">
      <nuxt />
    </main>
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
  </div>
</template>

<script>
import mainHeader from "~/components/mainHeader.vue";
import contactInfo from "~/components/contactInfo.vue";
import navigationMenu from "~/components/navigationMenu.vue";

export default {
  components: {
    mainHeader,
    navigationMenu,
    contactInfo
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  margin: 0 auto;
  text-align: center;
  padding-top: 300px;
  width:100%;
}
</style>
