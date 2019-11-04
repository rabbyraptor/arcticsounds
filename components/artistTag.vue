<template>
  <div class="artist-tag" :style="{color: tag.color, opacity: this.opacity}">
    <span class="tag-color" v-if="tag.color">&#9679;</span>
    <span class="tag-name">{{ tag.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    tag:{},
    active:{}
  },
  data(){
    return{
      opacity:.5,
    }
  },
  watch:{
    active(){
      if(this.active == this.tag.id){
        this.opacity = 1;
      }
      else if (this.active == this.tag.id && this.opacity == 1){
        this.opacity = 1;
      }
      else if (this.active != this.tag.id) {
        this.opacity = .5;
      }
    }
  }
};
</script>