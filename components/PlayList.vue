<template>
  <div class="play_list_wrap">
    <ul class="play_list">
      <li
        is="music"
        v-for="item in getMusics"
        :key="item.id"
        :music="item"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Music from './Music'

export default {
  name: 'PlayList',
  components: {
    Music
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getMusics'
    ])
  }
}
</script>

<style lang="scss" scoped>
.play_list_wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15rem;
  overflow-x: auto;
}

.play_list {
  display: flex;
  // justify-content: space-around;
  // align-items: center;
  flex-wrap: nowrap;
  width: 80%;
  color: $white;
}

@media (max-width: 992px) {
  .play_list_wrap { height: 10rem; }
  .play_list {
    width: auto;
  }
}
</style>
