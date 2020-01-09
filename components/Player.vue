<template>
  <div class="player">
    <!-- <a-icon v-if="playing" @click="pause" class="play" type="pause" />
    <a-icon v-else @click="play" type="caret-right" /> -->
    <a-icon @click="onMuted" :type="icon" class="sound" />
    <div class="range">
      <a-slider v-model="volume" @change="changeVolume" class="slider_vloume" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Player',
  data () {
    return {
      audio: null,
      playing: false,
      volume: 20,
      icon: 'sound'
    }
  },
  computed: {
    volumePercent () {
      return this.volume / 100
    },
    ...mapGetters([
      'getPlayingMusic'
    ])
  },
  watch: {
    'getPlayingMusic.id' () {
      this.init()
    }
  },
  mounted () {
    this.audio = new Audio()
  },
  methods: {
    init () {
      this.audio.src = this.getPlayingMusic.audio
      this.audio.volume = this.volumePercent
      this.audio.loop = true
      this.play()
    },
    play () {
      if (!this.audio) {
        return
      }

      this.audio.play()
      this.playing = true
    },
    pause () {
      if (!this.audio) {
        return
      }

      this.audio.pause()
      this.playing = false
    },
    onMuted () {
      this.audio.muted = !this.audio.muted
      this.icon = this.audio.muted ? 'pause-circle' : 'sound'
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
.range {
  margin-left: 1rem;
  width: 10rem;
}
.slider_vloume {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
