<template>
  <div class="lineup-section">
    <h1>Line-up 2019</h1>
    <div class="lineup-filter">
      <h3>Filter by tag</h3>
      <artist-tag
        v-for="tag in artistTags"
        :key="tag.id"
        :tag="tag"
        @click.native="filterByTag(tag.id)"
        :active="activeFilter"
      />
    </div>
    <div class="lineup-grid">
      <div v-for="artist in filteredArtists" :key="artist._id" class="lineup-artist">
        <nuxt-link :to="'/lineup/' + artist.slug">
          <div class="lineup-image" :style="backgroundImage(artist._id, artist.photo_suffix)">
            <span class="lineup-title">
              <h3>{{ artist.title }}</h3>
            </span>
            <div class="lineup-artist-tag" v-for="tag in artist.tags">
              <span :style="{color: getTagName(tag).color}">&#9679;</span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
var _ = require("lodash");
import VanillaTilt from "vanilla-tilt";
import artistTag from "../components/artistTag";

export default {
  mounted() {
    this.tiltImages();
    this.filterByTag()
  },
  updated() {
    this.tiltImages();
  },
  data() {
    return {
      goeventHash: process.env.GREENCOPPER_GOEVENT_HASH,
      activeFilter: null,
      filteredArtists: this.artists,
    };
  },
  methods: {
    filterByTag(id) {
      if (id != this.activeFilter) {
        let tagArray = [];
        for (let i in this.artists) {
          for (let t in this.artists[i].tags) {
            if (this.artists[i].tags[t] == id) {
              tagArray.push(this.artists[i]);
            }
          }
        }
        this.activeFilter = id;
        this.filteredArtists = tagArray;
      }
      else {
        this.filteredArtists = this.artists;
        this.activeFilter = null;
      }  
    },
    getTagName(tag) {
      switch (tag) {
        case 48:
          return { name: "Music", color: "rgb(141, 72, 171)", id: 48 };
          break;
        case 95:
          return { name: "Special Guest", color: "rgb(230, 85, 248)", id: 95 };
          break;
        case 97:
          return {
            name: "Nordic Playgrounds",
            color: "rgb(51, 127, 195)",
            id: 97
          };
          break;
        case 139:
          return { name: "Workshop", color: null, id: 139 };
          break;
        case 140:
          return { name: "Network", color: null, id: 140 };
          break;
        case 141:
          return { name: "Talk", color: null, id: 141 };
          break;
        case 142:
          return {
            name: "Out and about",
            color: "rgb(200, 203, 204)",
            id: 142
          };
          break;
        case 211:
          return { name: "Other", color: "rgb(228, 77, 66)", id: 211 };
          break;
      }
    },
    backgroundImage(id, suffix) {
      if (!suffix) {
        return "background-image: url(/img/image-placeholder.png)";
      } else {
        return (
          "background-image: url(//goevent-images.s3.amazonaws.com/arcticsoundfestival-2019/b041a9ed/web/artist_" +
          id +
          "_" +
          suffix +
          ".jpg)"
        );
      }
    },
    tiltImages() {
      VanillaTilt.init(document.querySelectorAll(".lineup-image"), {
        max: 2.5,
        perspective: 1200,
        glare: true,
        speed: 200,
        gyroscope: false,
        scale: 1.02,
        "max-glare": 0.2
      });
    }
  },
  computed: {
    artists() {
      return _.sortBy(this.$store.getters["artists/getArtists"], "title");
    },
    artistTags() {
      let tagArray = [];
      for (let i in this.artists) {
        for (let t in this.artists[i].tags) {
          tagArray.push(this.getTagName(this.artists[i].tags[t]));
        }
      }
      return _.uniqWith(tagArray, _.isEqual);
    }
  },
  components: {
    artistTag
  }
};
</script>