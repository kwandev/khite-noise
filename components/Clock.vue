<template>
  <div class="clock">
    <div class="clock__times">
      {{ times }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  data () {
    return {
      times: '00:00',
      momentTimes: null,
      playing: null
    }
  },
  mounted () {
    this.startTimes()
  },
  methods: {
    startTimes () {
      this.momentTimes = this.$moment().minutes(0).seconds(0)
      this.playing = setInterval(this.intervalTimes, 1000)
    },
    intervalTimes () {
      this.momentTimes.add(1, 's')
      this.times = this.momentTimes.format('mm:ss')
    },
    clearTimes () {
      clearInterval(this.playing)
    }
  }
}
</script>

<style lang="scss" scoped>
.clock {
  font-size: 10rem;
  color: $white;
  @include transitions(font-size);
}

@media (max-width: 992px) {
  .clock { font-size: 8rem; }
}
</style>
