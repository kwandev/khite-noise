<template>
  <a-layout
    :style="{'background-image': `url(${getBg}`}"
    class="container"
  >
    <a-layout-content class="container_inner">
      <clock />
      <player />
      <play-list />
    </a-layout-content>
  </a-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import Clock from '~/components/Clock'
import Player from '~/components/Player'
import PlayList from '~/components/PlayList'

export default {
  name: 'Index',
  components: {
    Clock,
    Player,
    PlayList
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getBg'
    ])
  },
  fetch ({ store, params }) {
    store.commit('setBg', 'rain')
  }
}
</script>

<style lang="scss">
.container {
  position: fixed;
  top: 0;
  lefT: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($dark,.5);
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;

  .container_inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba($dark,.5);
  }
}
</style>
