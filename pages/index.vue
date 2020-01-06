<template>
  <a-layout
    :style="{'background-image': `url(${bg}`}"
    class="container"
  >
    <a-layout-content class="container_inner">
      <clock />
    </a-layout-content>
    <a-layout-sider breakpoint="lg">
      <play-list />
    </a-layout-sider>
  </a-layout>
</template>

<script>
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
    bg () {
      return require(`~/assets/img/bg/cafe-1.jpg`)
    }
  },
  asyncData () {
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
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba($dark,.5);
  }
}
</style>
