<template>
  <section class="artist-presentation">
    <div class="artist-content" v-if="artistInfo">
      <div class="left-side">
        <div class="artist-image">
          <span
            class="artist-photo-credit"
            v-if="artistInfo.photoCredit"
          >Photo: {{ artistInfo.photoCredit }}</span>
          <img :src="artistImage" />
        </div>
        <h2 class="artist-title">
          {{ artistInfo.title }}
          <span v-if="artistInfo.country">({{ artistInfo.country }})</span>
        </h2>
        <h4 v-if="artistInfo.style" class="artist-style">{{artistInfo.style}}</h4>
        <div class="artist-description" v-html="artistInfo.description" />
      </div>

      <div class="right-side">
        <div class="artist-info">
          <h4 v-if="artistInfo.tags.length > 0">
            Tags
            <br />
            <span>{{ artistTags() }}</span>
          </h4>
          <h4>
            Title
            <br />
            <span>{{ artistInfo.title }}</span>
          </h4>
          <h4 class="artist-show-time">
            Time
            <br />
            <span>{{ artistProgram.time_start.substr(0, 5) }}</span>
            <span v-if="artistProgram.time_end">- {{ artistProgram.time_end.substr(0, 5) }}</span>
          </h4>
          <h4>
            Venue
            <br />
            <span>{{ artistProgram.venue.title }}</span>
          </h4>
          <div class="artist-links" v-if="this.referralLinks.length != 0">
            <h4>
              Links
              <br />
              <div class="artist-link-wrapper">
                <a
                  class="artist-link"
                  v-for="link in this.referralLinks"
                  :key="link.title"
                  :href="link.url"
                  target="_blank"
                >
                  <svg-icon class="svg-icon" :type="link.title" />
                  <span>{{ link.title }}</span>
                </a>
              </div>
            </h4>
          </div>
        </div>

        <embedded-player v-if="spotifyLink" type="Spotify" :link="spotifyLink" />
        <embedded-player v-if="soundcloudLink" type="Soundcloud" :link="soundcloudLink" />
        <embedded-player v-if="applemusicLink" type="Apple Music" :link="applemusicLink" />
        <embedded-player v-if="youtubeLink" type="Youtube" :link="youtubeLink" />
      </div>
    </div>
    <div style="margin:auto; color: white;" v-else>
      <span>Loading Artist...</span>
    </div>
  </section>
</template>

<script>
const axios = require("axios").default;
import embeddedPlayer from "../../components/embeddedPlayer";
import svgIcon from "../../components/svgIcon";

export default {
  async fetch({ store, params }) {
    let promises = [
      store.dispatch("artists/getData"),
      store.dispatch("program/getData")
    ];

    return await Promise.all(promises);
  },
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    return{
      slug: route.params.artist,
      goeventHash: process.env.GREENCOPPER_GOEVENT_HASH,
    }
  },
  data() {
    return {
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
    },
    artistTags() {
      let tags = [];
      const tag = this.artistInfo.tags;
      for (let i in this.artistInfo.tags) {
        if (tag[i] == 48) {
          tags.push("Music");
        }
        if (tag[i] == 95) {
          tags.push("Special Guest");
        }
      }
      return tags;
    }
  },
  computed: {
    program() {
      return this.$store.getters["program/getProgram"];
    },
    artistProgram() {
      if (this.program) {
        for (let i in this.program) {
          if (this.program[i].slug == this.slug) {
            return this.program[i];
          }
        }
      }
      return null;
    },
    artistList() {
      return this.$store.state.artists.artists;
    },
    artistImage() {
      if (this.artistInfo.photo_suffix) {
        return (
          "//goevent-images.s3.amazonaws.com/arcticsoundfestival-2019/b041a9ed/web/xl_artist_" +
          this.artistInfo._id +
          "_" +
          this.artistInfo.photo_suffix +
          ".jpg"
        );
      } else {
        return "/img/image-placeholder.png";
      }
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

