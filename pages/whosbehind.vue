<template>
  <div>
    <section>
      <nordic-playgrounds-section />
    </section>
    <section>
      <collaborators-section />
    </section>
    <section>
      <sponsors-grid />
    </section>
  </div>
</template>

<script>
import nordicPlaygroundsSection from '../components/nordicPlaygroundsSection'
import collaboratorsSection from '../components/collaboratorsSection'
import sponsorsGrid from '../components/sponsorsGrid'

export default {
  components: {
    nordicPlaygroundsSection,
    collaboratorsSection,
    sponsorsGrid
  }
};
</script>
