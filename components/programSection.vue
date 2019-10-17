<template>
  <div class="program-section">
    <h1>Program</h1>
    <div class="schedule">
      <div class="day" v-for="day in dates" :key="day">
        <div class="weekday">
          <h2>{{ getWeekday(day) }}</h2>
        </div>
        <div class="row" v-for="venue in venues" :key="venue" v-show="showsFromVenue(venue, day).length > 0">
          <div class="venue">
            <h4 class="venue-title">{{ venue }}</h4>
          </div>
          <div class="shows">
            <div class="show" v-for="show in showsFromVenue(venue, day)">
              <h5 class="show-time">
                <span>{{ show.start_time }}</span>
                <span v-if="show.end_time">– {{ show.end_time.substr(0, 5) }}</span>
              </h5>
              <h5>{{ show.title }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
          this.program[i].date_start == day
        )
          shows.push({
            title: this.program[i].object.title,
            start_time: this.program[i].time_start.substr(0, 5),
            end_time: this.program[i].time_end
          });
      }      
      shows.sort((a, b) => parseInt(a.start_time) - parseInt(b.start_time));
      return shows;
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
      return days[d.getDay()] + " April " + day.substr(8, 2);
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
        if (!venues.includes(this.program[i].venue.title))
          venues.push(this.program[i].venue.title);
      }
      return venues;
    },
    dates() {
      let dates = [];
      for (let i in this.program) {
        if (!dates.includes(this.program[i].date_start))
          dates.push(this.program[i].date_start);
      }
      return dates.sort();
    }
  }
};
</script>