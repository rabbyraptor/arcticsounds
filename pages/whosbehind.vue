<template>
  <div>
    <section>
      <nordic-playgrounds-section :content="nordicPlaygroundsSection" />
    </section>
    <section>
      <collaborators-section :content="collaboratorsSection" />
    </section>
    <section>
      <sponsors-grid :content="sponsorsGrid" />
    </section>
  </div>
</template>

<script>
import nordicPlaygroundsSection from '../components/nordicPlaygroundsSection'
import collaboratorsSection from '../components/collaboratorsSection'
import sponsorsGrid from '../components/sponsorsGrid'

import { createClient } from "~/plugins/contentful.js";
const client = createClient();

export default {
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({ content_type: "nordicPlaygroundsSection", locale: "*" }),
      client.getEntries({ content_type: "collaboratorsSection", locale: "*" }),
      client.getEntries({ content_type: "sponsorsGrid" })
    ])
      .then(([nordic, collabs, sponsors]) => {
        return {
          nordicPlaygroundsSection: nordic.items[0],
          collaboratorsSection: collabs.items,
          sponsorsGrid: sponsors.items
        };
      })
      .catch(console.error);
  },
  components: {
    nordicPlaygroundsSection,
    collaboratorsSection,
    sponsorsGrid
  },
  head() {
    return {
      title: "Who's Behind | Arctic Sounds",
      meta: [
        {
          name: "description",
          //content: this.metaDescription
        }
      ]
    };
  }
};
</script>
