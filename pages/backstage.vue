<template>
  <div>
    <section>
      <faq-section :content="faqSection" />
    </section>
  </div>
</template>

<script>
import faqSection from "../components/faqSection";

import { createClient } from "~/plugins/contentful.js";
const client = createClient();

export default {
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({ content_type: "faqSection" })
    ])
      .then(([faq]) => {
        return {
          faqSection: faq.items,
        };
      })
      .catch(console.error);
  },
  components: {
    faqSection
  },
  head() {
    return {
      title: "Backstage | Arctic Sounds",
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
