<template>
  <div class="clock">
    {{ times }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Clock',
  data () {
    return {
      times: '00:00:00',
      momentTimes: null,
      playing: null
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentMusic'
    ])
  },
  watch: {
    'getCurrentMusic.playing' (isPlay) {
      if (isPlay) {
        this.startTimes()
      } else {
        this.clearTimes()
      }
    }
  },
  mounted () {
    this.initTimes()
  },
  methods: {
    initTimes () {
      this.momentTimes = this.$moment().hours(0).minutes(0).seconds(0)
    },
    intervalTimes () {
      this.momentTimes.add(1, 's')
      this.times = this.momentTimes.format('HH:mm:ss')
    },
    startTimes () {
      this.playing = setInterval(this.intervalTimes, 1000)
    },
    clearTimes () {
      clearInterval(this.playing)
    }
  }
}
</script>

<style lang="scss" scoped>
.clock {
  display: flex;
  flex: auto;
  align-items: center;
  font-size: 10rem;
  color: $white;
  @include transitions(font-size);
}

@media (max-width: 992px) {
  .clock { font-size: 5rem; }
}
</style>
