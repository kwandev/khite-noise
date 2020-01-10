<template>
  <li @click="onMusic" class="music">
    <div class="icon">
      <v-icon :name="icons" :title="music.title" scale="4" />
    </div>
    <div class="title">
      {{ music.title }}
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Music',
  props: {
    music: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    icons () {
      switch (this.music.title) {
        case 'Cafe':
          return 'coffee'
        case 'Rain':
          return 'cloud-showers-heavy'
        case 'Beach':
          return 'umbrella-beach'
        case 'Forest':
          return 'tree'
        case 'Fire':
          return 'fire'
        default:
      }

      return 'coffee'
    },
    ...mapGetters([
      'getCurrentMusic'
    ])
  },
  methods: {
    onMusic () {
      if (this.getCurrentMusic.id === null || this.getCurrentMusic.id !== this.music.id) {
        const music = Object.assign(this.music, {
          playing: true
        })
        this.$store.commit('setCurrentMusic', music)
        this.$store.commit('setBg', music.title)
      } else if (this.getCurrentMusic.playing) {
        this.$store.commit('pauseCurrentMusic')
      } else {
        this.$store.commit('playCurrentMusic')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.music {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
  font-size: 2rem;

  &:hover {
    background-color: rgba($dark,.4);
    cursor: pointer;
  }

  .icon { font-size: 4rem; }
}

@media (max-width: 992px) {
  .music {
    width: 10rem;
    font-size: 1.5rem;
  }
}
</style>
