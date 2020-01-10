<template>
  <div class="player">
    <v-icon :name="icon" @click="onMuted" scale="2" class="sound" />
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
      volume: 20,
      icon: 'volume-up'
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
    },
    pause () {
      if (!this.audio) {
        return
      }

      this.audio.pause()
    },
    onMuted () {
      this.audio.muted = !this.audio.muted
      this.icon = this.audio.muted ? 'volume-mute' : 'volume-up'
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
.sound { height: 36px; }
.range {
  margin-left: 1rem;
  width: 10rem;
}
.slider_vloume {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
