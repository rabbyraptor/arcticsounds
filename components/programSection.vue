<template>
  <div class="program-section">
    <h1>Program</h1>
    <div class="schedule">
      <div class="day" v-for="day in sortedDates" :key="day">
        <div class="weekday">
          <h2>{{ getWeekday(day) }} {{ day }}</h2>
        </div>
        <div
          class="row"
          v-for="venue in venues"
          :key="venue"
          v-if="showsFromVenue(venue, day).length > 0"
        >
          <div class="venue">
            <h4 class="venue-title">{{ venue }}</h4>
          </div>
          <div class="shows">
            <div class="show" v-for="show in showsFromVenue(venue, day)">
              <h5 class="show-time">
                <span>{{ get24hTime(show.start_time) }}</span>
              </h5>
              <h5 class="show-title">
                <nuxt-link :to="'/lineup/' + show.slug">{{ show.title }}</nuxt-link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var _ = require("lodash");
export default {
  data() {
    return {
      goeventHash: process.env.GREENCOPPER_GOEVENT_HASH
    };
  },
  methods: {
    showsFromVenue(venue, day) {
      let shows = [];
      for (let i in this.program) {
        if (
          this.program[i].venue.title == venue &&
          new Date(this.program[i].date_start).getDate() == day.substr(0, 2)
        ) {
          if (parseInt(this.program[i].time_start.substr(0, 5)) <= 4) {
            shows.push({
              title: this.program[i].object.title,
              slug: this.program[i].slug,
              start_time: "24" + this.program[i].time_start.substr(2, 3),
              end_time: this.program[i].time_end
            });
          } else {
            shows.push({
              title: this.program[i].object.title,
              slug: this.program[i].slug,
              start_time: this.program[i].time_start.substr(0, 5),
              end_time: this.program[i].time_end
            });
          }
        }
      }
      shows.sort((a, b) => parseInt(a.start_time) - parseInt(b.start_time));
      return shows;
    },
    get24hTime(time) {
      if (parseInt(time) > 23) {
        return "00" + time.substr(2, 5);
      } else {
        return time;
      }
    },
    getWeekday(day) {
      let d = new Date(day);
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      return days[d.getDay()];
    },
    getMonthName(month) {
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      return months[month.getMonth()];
    }
  },
  computed: {
    artists() {
      return this.$store.getters["artists/getArtists"];
    },
    program() {
      return this.$store.getters["program/getProgram"];
    },
    venues() {
      let venues = [];
      for (let i in this.program) {
        venues.push(this.program[i].venue.title);
      }
      return _.uniqWith(venues, _.isEqual);
    },
    fullDates() {
      let dates = [];
      for (let i in this.program) {
        dates.push(new Date(this.program[i].date_start));
      }
      return _.uniqWith(dates, _.isEqual);
    },
    sortedDates() {
      let sortedDates = [];
      for (let i in this.fullDates) {
        sortedDates.push(
          this.fullDates[i].getDate() +
            " " +
            this.getMonthName(this.fullDates[i])
        );
      }
      return sortedDates.sort();
    }
  }
};
</script>