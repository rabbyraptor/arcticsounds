<template>
    <section>
      <lineup-section/>
    </section>
</template>

<script>
import lineupSection from '../../components/lineupSection'

export default {
  data(){
    return{
      datatype:'artists'
    }
  },
  components: {
    lineupSection
  },
};
</script>