<template>
    <section>
      <!-- 
      <goevent-web
      id="goevent-web"
      project-tag="arcticsoundfestival-2019"
      :project-hash="goeventHash"
      data-language="eng"
      data-default-url="artists"
    ></goevent-web>
    <script
      id="gw-script"
      type="text/javascript"
      src="https://s3.amazonaws.com/goeventweb-static.greencopper.com/7.7.0/public/scripts/endpoint.min.gz.js"
      data-gzip="true"
    ></script> -->
      <!-- <golive-section :datatype="datatype" /> -->
    </section>
</template>

<script>
import goliveSection from '../components/goliveSection'

export default {
  data(){
    return{
      datatype:'artists',
      goeventHash: process.env.GREENCOPPER_GOEVENT_HASH
    }
  },
  components: {
    goliveSection
  },
};
</script>