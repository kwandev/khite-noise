<template>
  <a-layout
    :style="{'background-image': `url(${getBg}`}"
    class="container"
  >
    <a-layout-content class="container_inner">
      <div class="clock_wrap">
        <clock />
      </div>
      <div class="play_list_wrap">
        <play-list />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import Clock from '~/components/Clock'
import PlayList from '~/components/PlayList'

export default {
  name: 'Index',
  components: {
    Clock,
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

.clock_wrap {
  display: flex;
  flex: auto;
  align-items: center;
}
.play_list_wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15rem;
}

@media (max-width: 992px) {
  .play_list_wrap {
    height: 10rem;
  }
}
</style>
