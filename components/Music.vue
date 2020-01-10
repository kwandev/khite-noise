<template>
  <li @click="playMusic" class="music">
    <div class="icon">
      <v-icon :name="icons" :title="music.title" scale="4" />
    </div>
    <div class="title">
      {{ music.title }}
    </div>
  </li>
</template>

<script>
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
    }
  },
  methods: {
    playMusic () {
      this.$store.commit('setBg', this.music.title)
      this.$store.commit('setPlaying', {
        id: this.music.id,
        playing: true
      })
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
