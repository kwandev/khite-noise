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
      icon: 'volume-up',
      duration: 0,
      fadeIn: null,
      fadeOut: null
    }
  },
  computed: {
    volumePercent () {
      return this.volume / 100
    },
    ...mapGetters('music', {
      currentMusic: 'getCurrentMusic'
    })
  },
  watch: {
    'currentMusic.id' () {
      this.init()
    },
    'currentMusic.playing' (isPlay) {
      if (isPlay) {
        this.play()
      } else {
        this.pause()
      }
    }
  },
  mounted () {
    this.audio = new Audio()
    this.audio.volume = this.volumePercent
    this.audio.loop = true
    this.audio.onloadeddata = (e) => {
      this.audio.volume = 0
      this.duration = this.audio.duration
    }
  },
  methods: {
    init () {
      this.clearFadeIn()
      this.clearFadeOut()
      this.audio.src = this.currentMusic.audio
      this.setFadeIn()
      this.play()
    },
    setFadeIn () {
      this.fadeIn = setInterval(() => {
        const { volume } = this.audio
        const volumePercent = this.volumePercent / 50
        if (volume + volumePercent < 1) {
          this.audio.volume += volumePercent
        }
        if (Math.abs(this.volumePercent - volume) <= volumePercent || volume >= 1) {
          this.setFadeOut()
          this.clearFadeIn()
        }
      }, 100)
    },
    clearFadeIn () {
      if (this.fadeIn) {
        clearInterval(this.fadeIn)
        this.fadeIn = null
      }
    },
    setFadeOut () {
      const duration = this.duration

      this.fadeOut = setInterval(() => {
        const { currentTime, volume } = this.audio
        const volumePercent = this.volumePercent
        if (duration - currentTime <= 5 && volume > volumePercent / 4) {
          this.audio.volume -= volumePercent / 50
        }

        if (currentTime < 1) {
          this.setFadeIn()
          this.clearFadeOut()
        }
      }, 100)
    },
    clearFadeOut () {
      if (this.fadeOut) {
        clearInterval(this.fadeOut)
        this.fadeOut = null
      }
    },
    play () {
      this.audio.play()
    },
    pause () {
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
