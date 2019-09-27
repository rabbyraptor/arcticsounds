<template>
  <div>
    <section>
      <nordic-playgrounds-section />
    </section>
    <section>
      <sponsors-grid />
    </section>
  </div>
</template>

<script>
import nordicPlaygroundsSection from '../components/nordicPlaygroundsSection'
import sponsorsGrid from '../components/sponsorsGrid'

export default {
  components: {
    nordicPlaygroundsSection,
    sponsorsGrid
  }
};
</script>
