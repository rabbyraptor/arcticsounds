<template>
  <div class="faq-section">
    <h1>Backstage</h1>
    <h2>FAQ</h2>
    <div class="faq" v-for="item in questionList" :key="item.question">
      <p class="question" v-html="item.question"></p>
      <p class="answer" v-html="item.answer"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionList: [
        {
          question: "Where is Arctic Sounds?",
          answer: "Arctic Sounds is held in Sisimiut, Greenland."
        },
        {
          question: "When is Arctic Sounds?",
          answer:
            "Arctic Sounds 2020: April 9th – 13th, with NORDIC PLAYGROUNDS starting on April 4th."
        },
        {
          question: "What is Arctic Sounds?",
          answer:
            "<ul class='what-is-arctic-sounds'><li>An annual music festival in Sisimiut, Greenland&nbsp;showcasing original artists from the Nordic countries (Greenland, Iceland, Faroe Islands, Sweden, Norway, Finland, Denmark, Åland, Estonia, Latvia, Lithuania) as well as artists from Inuit Nunangat (Nunavut, Nunavik, Nunatsiavut and NunatuKavut)</li><li>A framework for co-creation, collaboration, mutual inspiration, networking, talks and meetings under the headline NORDIC PLAYGROUNDS. The philosophy is based on a playful approach to serious work</li><li>A unique opportunity to experience the breathtaking Greenlandic landscapes and the people inhabiting it. Arctic Sounds offers exclusive dogsledding, snowmobiling, skiing and sailing trips in collaboration with local outfitters and tour operators for festival guests, artists and network collaborators alike</li><li>A warm and welcoming atmosphere, and a laid back attitude to the&nbsp;ever-changing conditions of nature and it’s power over the day-to-day conduction of the festival</li><li>A passionate and committed non-profit volunteer driven organisation that works tirelessly around the clock to provide the best possible experience for all visitors</li><li>A comprehensive program for development of skills and encouragement of education within the field of culture among our volunteers</li><li>An organization bridging the gap between Greenland and the other Nordic countries to strengthen interest for Greenlandic music in the world through focused network building and information on what’s happening in the Greenlandic music scene</li></ul>"
        }
      ]
    };
  }
};
</script>
