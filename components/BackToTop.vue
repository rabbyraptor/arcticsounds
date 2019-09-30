<template>
  <transition name="back-to-top-fade">
    <div
      class="vue-back-to-top"
      v-show="visible"
      @click="backToTop"
    >
      <div class="default">
        <span><svg class="svg-icon" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg></span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BackToTop",
  props: {
    text: {
      type: String,
      default: ""
    },
    visibleoffset: {
      type: [String, Number],
      default: 600
    },
    visibleoffsetbottom: {
      type: [String, Number],
      default: 0
    },
    right: {
      type: String,
      default: "30px"
    },
    bottom: {
      type: String,
      default: "40px"
    },
    scrollFn: {
      type: Function,
      default: function(eventObject) {}
    }
  },
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    window.smoothscroll = () => {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll);
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5));
      }
    };
    window.addEventListener("scroll", this.catchScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.catchScroll);
  },
  methods: {
    /**
     * Catch window scroll event
     * @return {void}
     */
    catchScroll() {
      const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset);
      const pastBottomOffset =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - parseInt(this.visibleoffsetbottom);
      this.visible =
        parseInt(this.visibleoffsetbottom) > 0
          ? pastTopOffset && !pastBottomOffset
          : pastTopOffset;
      this.scrollFn(this);
    },
    /**
     * The function who make the magics
     * @return {void}
     */
    backToTop() {
      window.smoothscroll();
      this.$emit("scrolled");
    }
  }
};
</script>

<style>
.svg-icon{
  fill:#fff;
  height:30px;
  width:30px;
}
.back-to-top-fade-enter-active,
.back-to-top-fade-leave-active {
  transition: opacity 0.7s;
}
.back-to-top-fade-enter,
.back-to-top-fade-leave-to {
  opacity: 0;
}

.vue-back-to-top {
  cursor: pointer;
  position: fixed;
  z-index: 1000;
  bottom:30px;
  right:0;
}

.vue-back-to-top .default {
  background-color: rgba(0,0,0,.7);
  border-radius: 3px 0 0 3px;
  color: #ffffff;
  height: 50px;
  line-height: 30px;
  text-align: center;
  width: 50px;
  padding:10px 0;
}

.vue-back-to-top .default span {
  color: #ffffff;
  font-family: 'ElegantIcons';
  font-size:2em;
}

.vue-back-to-top--is-footer {
  bottom: 50% !important;
  position: absolute;
  transform: translateY(50%);
}
</style>