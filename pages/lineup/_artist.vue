<template>
  <section class="artist-presentation">
    <div class="artist-content" v-if="this.artistInfo">
      <div class="left-side">
        <div class="artist-image">
          <span
            class="artist-photo-credit"
            v-if="this.artistInfo.photoCredit"
          >Photo: {{ this.artistInfo.photoCredit }}</span>
          <img :src="artistImage" />
        </div>
        <h2 class="artist-title">
          {{this.artistInfo.title}}
          <span
            v-if="this.artistInfo.country"
          >({{ this.artistInfo.country }})</span>
        </h2>
        <h3 v-if="this.artistInfo.style" class="artist-style">{{this.artistInfo.style}}</h3>
        <div class="artist-description" v-html="this.artistInfo.description" />
      </div>
      <div class="right-side">
        <div class="artist-links">
          <a
            class="artist-link"
            v-for="link in this.referralLinks"
            :key="link.title"
            :href="link.url"
            target="_blank"
          >
            <svg-icon class="svg-icon" :type="link.title" />
            <h4>{{ link.title }}</h4>
          </a>
        </div>

        <embedded-player v-if="spotifyLink" type="Spotify" :link="spotifyLink" />
        <embedded-player v-if="soundcloudLink" type="Soundcloud" :link="soundcloudLink" />
        <embedded-player v-if="applemusicLink" type="Apple Music" :link="applemusicLink" />
        <embedded-player v-if="youtubeLink" type="Youtube" :link="youtubeLink" />
      </div>
    </div>
    <div style="color: white;" v-else>Loading Artist...</div>
  </section>
</template>

<script>
const axios = require("axios").default;
import embeddedPlayer from "../../components/embeddedPlayer";
import svgIcon from "../../components/svgIcon";

export default {
  data() {
    return {
      goeventHash: process.env.GREENCOPPER_GOEVENT_HASH,
      slug: this.$route.params.artist,
      artist: {},
      artistInfo: null
    };
  },
  watch: {
    artistList() {
      this.setArtist();
    },
    artist() {
      this.setArtistInfo();
    },
    slug() {
      this.setArtist();
    }
  },
  mounted() {
    this.setArtist();
  },
  methods: {
    setArtist() {
      if (this.artistList) {
        this.artist = this.$store.getters["artists/getArtistBySlug"](
          this.$route.params.artist
        );
      }
    },
    async setArtistInfo() {
      await axios
        .get(
          "https://s3.amazonaws.com/goeventweb-static.greencopper.com/" +
            this.goeventHash +
            "/arcticsoundfestival-2019/data/eng/artists/" +
            this.artist._id +
            ".json"
        )
        .then(response => (this.artistInfo = response.data))
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  computed: {
    artistList() {
      return this.$store.state.artists.artists;
    },
    artistImage() {
      return (
        "//goevent-images.s3.amazonaws.com/arcticsoundfestival-2019/b041a9ed/web/xl_artist_" +
        this.artistInfo._id +
        "_" +
        this.artistInfo.photo_suffix +
        ".jpg"
      );
    },
    artistLinks() {
      let links = [
        this.artistInfo.link1,
        this.artistInfo.link2,
        this.artistInfo.link3,
        this.artistInfo.link4,
        this.artistInfo.link5,
        this.artistInfo.link6
      ];
      let newLinks = [];

      for (let i in links) {
        if (links[i] != null) {
          newLinks.push({
            title: links[i].split("|")[0],
            url: links[i].split("|")[1]
          });
        }
      }
      return newLinks;
    },
    youtubeLink() {
      for (let i in this.artistLinks) {
        if (
          this.artistLinks[i].title == "Youtube" &&
          this.artistLinks[i].url.match(/v=/)
        ) {
          let youtubeLink = {
            title: this.artistLinks[i].title,
            url: this.artistLinks[i].url.split(/v=/)[1]
          };
          this.artistLinks.splice(i, 1);
          if (i > 0) {
            i--;
          }
          return youtubeLink;
        }
      }
    },
    spotifyLink() {
      for (let i in this.artistLinks) {
        if (
          this.artistLinks[i].title == "Spotify" ||
          this.artistLinks[i].title == "Top Tracks"
        ) {
          let spotifyLink = {
            title: this.artistLinks[i].title,
            url: this.artistLinks[i].url
          };
          this.artistLinks.splice(i, 1);
          if (i > 0) {
            i--;
          }
          return spotifyLink;
        }
      }
    },
    soundcloudLink() {
      for (let i in this.artistLinks) {
        if (this.artistLinks[i].title == "Soundcloud") {
          let soundcloudLink = {
            title: this.artistLinks[i].title,
            url: this.artistLinks[i].url
          };
          this.artistLinks.splice(i, 1);
          if (i > 0) {
            i--;
          }
          return soundcloudLink;
        }
      }
    },
    applemusicLink() {
      for (let i in this.artistLinks) {
        if (this.artistLinks[i].title == "Apple Music") {
          let soundcloudLink = {
            title: this.artistLinks[i].title,
            url: this.artistLinks[i].url
          };
          this.artistLinks.splice(i, 1);
          if (i > 0) {
            i--;
          }
          return soundcloudLink;
        }
      }
    },
    referralLinks() {
      let someLinks = [];
      let artLinks = ["Spotify", "Top Tracks", "Soundcloud", "Apple Music"];
      for (let i in this.artistLinks) {
        if (
          artLinks.includes(this.artistLinks[i].title) == false &&
          !this.artistLinks[i].url.match(/v=/)
        ) {
          someLinks.push({
            title: this.artistLinks[i].title,
            url: this.artistLinks[i].url
          });
        }
      }
      return someLinks;
    }
  },
  components: {
    embeddedPlayer,
    svgIcon
  }
};
</script>

