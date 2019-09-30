<template>
  <div class="countdown-section">
    <countdown :time="time">
      <template slot-scope="props">
        <h2>See you at Arctic Sounds 2020!</h2>
        <h3>{{ props.days }}<span class="timestamp">D</span> {{ props.hours }}<span class="timestamp">H</span> {{ props.minutes }}<span class="timestamp">M</span> {{ props.seconds }}<span class="timestamp">S</span></h3>
      </template>
    </countdown>
  </div>
</template>

<script>
export default {
  data() {
    var now = new Date();
    var arcticSounds2020 = new Date(2020, 3, 9, 12, 0);

    return {
      counting: false,
      time: arcticSounds2020 - now
    };
  }
};
</script>