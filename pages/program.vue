<template>
    <section>
      <golive-section :datatype="datatype" />
    </section>
</template>

<script>
import goliveSection from '../components/goliveSection'

export default {
  data(){
    return{
      datatype:'schedule',
    }
  },
  components: {
    goliveSection
  },
};
</script>