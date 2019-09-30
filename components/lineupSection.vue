<template>
  <div class="lineup-section">
    <goevent-web
      id="goevent-web"
      project-tag="arcticsoundfestival-2019"
      project-hash="bb85e8e858594a138ef3f31c06581fc0"
      data-language="eng"
      data-default-url="artists"
    ></goevent-web>
    <script
      id="gw-script"
      type="text/javascript"
      src="https://s3.amazonaws.com/goeventweb-static.greencopper.com/7.7.0/public/scripts/endpoint.min.gz.js"
      data-gzip="true"
    ></script>
  </div>
</template>

<style>
.lineup-section {
  width: 100%;
  background-color: #000;
  padding-top: 10%;
}
#goevent-web {
  z-index: 0;
}
.gc-back-to-top{
  display:none!important;
}
</style>