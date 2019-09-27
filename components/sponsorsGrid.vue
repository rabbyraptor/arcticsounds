<template>
  <div class="sponsors-grid">
    <span>
      <h2>Arctic Sounds Sponsors</h2>
      <p>A million thanks to our sponsors, without whom none of this would be possible!</p>
    </span>
    <div class="sponsors">
      <a class="sponsor-image" v-for="sponsor in sponsorsList" :key="sponsor.title" :href="sponsor.link" target="_blank">
        <img :src="sponsor.img" :alt="sponsor.title" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sponsorsList: [
        {
          title: "Nordisk Kulturfond",
          img: "/img/sponsors/nordiskkulturfond.png",
          link: "https://www.nordiskkulturfond.org/"
        },
        {
          title: "Grønlands Rejsebureau",
          img: "/img/sponsors/grls-rejsebureau.png",
          link: "https://www.greenland-travel.com/"
        },
        {
          title: "NAPA",
          img: "/img/sponsors/napa.jpg",
          link: "https://napa.gl/"
        },
        {
          title: "Brøndum",
          img: "/img/sponsors/brondum.png",
          link: "http://www.brondum.gl/kontakt/sisimiut/"
        },
        {
          title: "Taseralik",
          img: "/img/sponsors/taseralik.jpg",
          link: "https://taseralik.gl/"
        },
        {
          title: "Tele-Post",
          img: "/img/sponsors/tele-post.png",
          link: "https://telepost.gl/"
        },
        {
          title: "Kaataq El",
          img: "/img/sponsors/kaataq-el-aps.png",
          link: "https://kaataqel.gl/"
        },
        {
          title: "JZ Tiggaliorfik",
          img: "/img/sponsors/jz-logo.jpg",
          link: "https://www.facebook.com/pages/JZ-Tiggaliorfik/317424691670155"
        },
        {
          title: "Tamalaat",
          img: "/img/sponsors/tamalaat.png",
          link: "http://www.tamalaat.gl/"
        },
        { title: "KTI", img: "/img/sponsors/kti.png", link: "http://kti.gl/" },
        {
          title: "Sømandshjemmet Sisimiut",
          img: "/img/sponsors/somandshjem.jpg",
          link: "https://www.soemandshjem.gl"
        },
        {
          title: "Arctic Umiaq Line",
          img: "/img/sponsors/aul-logo.png",
          link: "https://aul.gl/en/experience-greenland/"
        },
        {
          title: "Qeqqata Kommunia",
          img: "/img/sponsors/qeqqata-kommunia.jpg",
          link: "https://www.qeqqata.gl/"
        },
        {
          title: "Royal Greenland",
          img: "/img/sponsors/rg_logo.png",
          link: "https://www.royalgreenland.gl/"
        },
        {
          title: "Permagreen",
          img: "/img/sponsors/permagreen.jpg",
          link: "http://www.permagreen.gl/"
        },
        {
          title: "Gabemedia",
          img: "/img/sponsors/gabemedia.png",
          link: "https://www.gabemedia.dk"
        }
      ]
    };
  }
};
</script>
