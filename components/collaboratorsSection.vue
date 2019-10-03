<template>
  <div class="collaborators-section">
    <h2>Arctic Sounds Collaborators</h2>
    <div class="collaborators" v-for="collaborator in collaboratorsList" :key="collaborator.title">
      <div class="collaborator-image">
        <a :href="collaborator.link" target="_blank">
          <img :src="collaborator.img" :alt="collaborator.title" />
        </a>
        <div v-if="collaborator.img2">
          <a :href="collaborator.link2" target="_blank">
            <img :src="collaborator.img2" :alt="collaborator.title" />
          </a>
        </div>
      </div>
      <div class="collaborator-text-wrapper">
        <h3 class="collaborator-title">{{ collaborator.title }}</h3>
        <p class="collaborator-text" v-html="collaborator.text"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collaboratorsList: [
        {
          title: "Katuaq",
          text:
            "Katuaq is Greenlands national Culture House. The building is also the home of NAPA. Every year we work with Katuaq to plan one or more concerts in Nuuk with select artists from the festival roster.",
          img: "/img/collaborators/katuaqlogo.jpg",
          link: "https://www.katuaq.gl/"
        },
        {
          title: "SPOT Festival",
          text:"SPOT is an annual music festival in the city of Aarhus, Denmark, showcasing up-and-coming Danish and Scandinavian talent. Close to two hundred artists and bands from most genres of contemporary popular music – such as rock, hip hop and electronic music – play various stages across town, centered around the Academy of Music and concert halls of Musikhuset SPOT curates names for Arctic Sounds festival, and currently also have representation on our booking board.<br/><br/>Arctic Sounds is also working on getting more greenlandic music on the SPOT program.",
          img: "/img/collaborators/spotlogo.png",
          link: "https://spotfestival.dk/"
        },
        {
          title: "Way Up North & Studenterhuset Aalborg",
          text:"Way Up North and Studenterhuset Aalborg curates one or two artist from Northern Jutland on Arctic Sounds festival. In addition, we select Greenlandic artists to be presented at Studenterhuset Aalborg in February. We have great hopes for expanding this partnership in the future.",
          img: "/img/collaborators/wayupnorthlogo.png",
          img2: "/img/collaborators/studenterhusetaalborg.png",
          link: "https://www.wayupnorth.co/",
          link2: "https://studenterhuset.dk/"
        },
        {
          title: "Arctic Umiaq Line",
          text:"We work with Arctic Umiaq Line to present special Cruise Concerts. The concerts offer a unique opportunity to see Sisimiut from the sea side while feasting on the best Sarfaq Ittuk has to offer, and listening to carefully selected live music that suits the trip.<br/><br/>The trip itself is free, but mandatory lunch / dinner is paid in advance at the festival office.",
          img: "/img/collaborators/aul-logo.png",
          link: "https://aul.gl/en/experience-greenland/"
        },
        {
          title: "Greenland School of Minerals & Petroleum",
          text:"Greenland School of Minerals & Petroleum generously host our main venues. We have 2 larger stages and a café with a small stage in the building. The school also host our office and press team outside of the Taseralik opening hours.<br/><br/>The staff and management of the school is an invaluable part of the festival as our tech crew has full access and in-house assistance with all production matters.",
          img: "/img/collaborators/greenland-school-of-mineralsand-petroleum.png",
          link: "https://www.kti.gl/da/uddannelser/raastof"
        },
      ]
    };
  }
};
</script>
