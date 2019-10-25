<template>
  <div id="burger-menu-icon-wrapper" @click="toggleBurgerMenu">
    <div id="burger-menu">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleBurgerMenu() {
      const bm = document.getElementById("burger-menu"),
        mobile = document.getElementsByClassName("mobile")[0];
      bm.classList.toggle("open");
      if (bm.classList.contains("open")) {
        mobile.style.display = "grid";
        setTimeout(function() {
          mobile.style.opacity = 1;
        }, 1);
      } else if (!bm.classList.contains("open")) {
        mobile.style.opacity = 0;
        setTimeout(function() {
          mobile.style.display = "none";
        }, 250);
      }
    }
  }
};
</script>