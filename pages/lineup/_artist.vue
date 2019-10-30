<template>
  <section class="artist-presentation">
    <div class="artist-content">
      <div class="left-side">
        <div class="artist-image">
          <span
            class="artist-photo-credit"
            v-if="artistInfo.photoCredit"
          >Photo: {{ artistInfo.photoCredit }}</span>
          <img :src="artistImage" />
        </div>
        <h2 class="artist-title">
          {{ artist.title }}
          <span v-if="artistInfo.country">({{ artistInfo.country }})</span>
        </h2>
        <h4 v-if="artistInfo.style" class="artist-style">{{artistInfo.style}}</h4>
        <div class="artist-description" v-if="artistInfo.description" v-html="artistInfo.description" />
        <div style="margin:auto; color: white;" v-else>
          <span>Loading description ... </span>
        </div>        
      </div>

      <div class="right-side">
        <div class="artist-info">
          <h4 class="artist-tags" v-if="artistTags.length != 0">
            Tags
            <br />
            <div v-for="tag in artistTags" class="artist-tag" style="background-color:white">
              <span v-if="tag.color" :style="{color: tag.color}">&#9679;</span>
              {{ tag.name }}
            </div>
          </h4>
          <h4>
            Title
            <br />
            <span>{{ artist.title }}</span>
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
          <div class="artist-links" v-if="referralLinks.length != 0">
            <h4>
              Links
              <br />
              <div class="artist-link-wrapper">
                <a
                  class="artist-link"
                  v-for="link in referralLinks"
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
  data() {
    return {
      goeventHash: process.env.GREENCOPPER_GOEVENT_HASH,
      slug: this.$route.params.artist,
      artist: this.$store.getters["artists/getArtistBySlug"](
        this.$route.params.artist
      ),
      artistInfo: {}
    };
  },
  created() {
    this.getArtistInfo();
  },
  watch: {
    artist() {
      this.getArtistInfo();
    }
  },
  methods: {
    async getArtistInfo(){
      return await axios
        .get(
          "https://s3.amazonaws.com/goeventweb-static.greencopper.com/" +
            this.goeventHash +
            "/arcticsoundfestival-2019/data/eng/artists/" +
            this.artist._id +
            ".json"
        )
        .then(res => {
          this.artistInfo = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  computed: {
    artistTags() {
      let tags = [];
      const tag = this.artist.tags;
      for (let i in this.artist.tags) {
        if (tag[i] == 48) {
          tags.push({ name: "Music", color: "rgb(141, 72, 171)" });
        }
        if (tag[i] == 95) {
          tags.push({ name: "Special Guest", color: "rgb(230, 85, 248)" });
        }
        if (tag[i] == 97) {
          tags.push({ name: "Nordic Playgrounds", color: "rgb(51, 127, 195)" });
        }
        if (tag[i] == 139) {
          tags.push({ name: "Workshop", color: null });
        }
        if (tag[i] == 140) {
          tags.push({ name: "Network", color: null });
        }
        if (tag[i] == 141) {
          tags.push({ name: "Talk", color: null });
        }
        if (tag[i] == 142) {
          tags.push({ name: "Out and about", color: "rgb(200, 203, 204)" });
        }
        if (tag[i] == 211) {
          tags.push({ name: "Other", color: "rgb(228, 77, 66)" });
        }
      }
      return tags;
    },
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
    artistImage() {
      if (this.artist.photo_suffix) {
        return (
          "//goevent-images.s3.amazonaws.com/arcticsoundfestival-2019/b041a9ed/web/xl_artist_" +
          this.artist._id +
          "_" +
          this.artist.photo_suffix +
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

