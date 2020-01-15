<template>
  <div class="play_list_wrap">
    <ul class="play_list">
      <li
        is="music"
        v-for="item in musics"
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
    ...mapGetters({
      musics: 'music/getMusics'
    })
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
  width: 90%;
  color: $white;
}

@media (max-width: 992px) {
  .play_list_wrap { height: 6rem; }
  .play_list { width: 100%; }
}
</style>
