<template>
  <li @click="playMusic" class="music">
    {{ music.title }}
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
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
  font-size: 2rem;

  &:hover {
    background-color: rgba($dark,.4);
    cursor: pointer;
  }
}

@media (max-width: 992px) {
  .music {
    width: 10rem;
    font-size: 1.5rem;
  }
}
</style>
