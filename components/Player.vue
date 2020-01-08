<template>
  <div class="player">
    <a-icon v-if="playing" @click="pause" class="play" type="pause" />
    <a-icon v-else @click="play" type="caret-right" />
    <a-icon type="sound" class="sound" />
    <input v-model="volume" @change="changeVolume" type="range" class="range">
  </div>
</template>

<script>
export default {
  name: 'Player',
  data () {
    return {
      audio: null,
      playing: false,
      volume: '20'
    }
  },
  computed: {
    volumePercent () {
      return this.volume / 100
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.audio = new Audio(require('~/assets/audio/rain.mp3'))
      this.audio.volume = this.volumePercent
      this.audio.loop = true
    },
    play () {
      this.audio.play()
      this.playing = true
    },
    pause () {
      this.audio.pause()
      this.playing = false
    },
    changeVolume () {
      this.audio.volume = this.volumePercent
    }
  }
}
</script>

<style lang="scss" scoped>
.player {
  display: flex;
  align-items: center;
  margin: 2rem 0;
  color: $white;
  font-size: 2rem;
}
.sound {
  margin-left: 1rem;
  font-size: 1.5rem;
}
.range { margin-left: 1rem; }
</style>
