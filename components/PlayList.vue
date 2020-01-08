<template>
  <div class="play_list_wrap">
    <ul class="play_list">
      <li
        is="music"
        v-for="item in musicList"
        :key="item.id"
        :music="item"
      />
    </ul>
  </div>
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
        { id: 4, title: 'forest', play: false },
        { id: 5, title: 'fire', play: false }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.play_list_wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15rem;
}

.play_list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  color: $white;
}

@media (max-width: 992px) {
  .play_list_wrap { height: 10rem; }
  .play_list {
    width: 100%;
    overflow-x: auto;
  }
}
</style>
