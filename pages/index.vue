<template>
  <a-layout
    :style="{'background-image': `url(${getBg}`}"
    class="container"
  >
    <a-button @click="showDrawer" type="link" class="btn__menu">
      <v-icon name="bars" title="메뉴" scale="2" />
    </a-button>

    <a-layout-content class="container_inner">
      <clock />
      <player />
      <play-list />
    </a-layout-content>

    <a-drawer
      :closable="false"
      @close="onClose"
      :visible="visible"
      title="Khite Noise"
      placement="right"
      wrap-class-name="drawer_menu"
    >
      <div class="introduce">
        <p>khite-noise란, 백색잡음을 뜻하는 white noise에서 앞 글자만 바꾼 합성어입니다. 이 웹앱은 백색소음을 들을 수 있으며, 백색소음을 재생한 시간을 확인하는 단순한 기능의 웹앱입니다.</p>
        <p>khite-noise는 무료이자 오픈소스이며, 문제의 소지가 있을 경우 아래 링크를 통해 알려주세요. 감사합니다.</p>
      </div>
      <div class="links">
        <a href="https://github.com/khwan7816/khite-noise" target="_blank" title="깃허브 바로가기"><a-icon type="github" style="font-size: 2rem" /></a>
        <a href="https://khwan.kr" target="_blank" title="블로그 바로가기"><a-icon type="chrome" style="font-size: 2rem" /></a>
        <a href="mailto:rudghks7816@gmail.com" title="rudghks7816@gmail.com 으로 메일보내기"><a-icon type="mail" style="font-size: 2rem" /></a>
      </div>
    </a-drawer>
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
      visible: false
    }
  },
  computed: {
    ...mapGetters([
      'getBg'
    ])
  },
  fetch ({ store, params }) {
    // store.commit('setBg', 'rain')
  },
  methods: {
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss">
.container {
  position: absolute;
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

  .btn__menu {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    height: auto;
    color: $white;
  }
}

.drawer_menu {
  color: $white;
  .ant-drawer-wrapper-body { background-color: $dark; }
  .ant-drawer-header {
    background-color: inherit;
  }
  .ant-drawer-title { color: $white; }

  .links {
    display: flex;
    justify-content: space-around;
    padding: .5rem 0;

    &:first-child { padding-top: 0; }

    a { color: $white; }
    .fa-icon,
    .menu__title { vertical-align: middle; }

  }
}
</style>
