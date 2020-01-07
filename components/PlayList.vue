<template>
  <ul class="play_list">
    <li
      is="music"
      v-for="item in musicList"
      :key="item.id"
      :music="item"
    />
  </ul>
</template>

<script>
import Music from './Music'

export default {
  name: 'PlayList',
  components: {
    Music
  },
  data () {
    return {
      musicList: [
        { id: 1, title: 'cafe', play: false },
        { id: 2, title: 'rain', play: false },
        { id: 3, title: 'wave', play: false },
        { id: 4, title: 'forest', play: false }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.play_list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  color: #fff;
}

@media (max-width: 992px) {
  .play_list {
    width: 100%;
    overflow-x: auto;
  }
}
</style>
