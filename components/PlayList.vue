<template>
  <div class="play_list">
    <ul class="music_list">
      <li class="music">
        <a-icon type="coffee" />
      </li>
      <li class="music">
        <a-icon type="coffee" />
      </li>
      <li class="music">
        <a-icon type="coffee" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PlayList',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.play_list {
  display: flex;
  width: 100%;
  height: 100%;
}
.music_list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  list-style: none;
  flex: 1;
  color: #fff;
}
</style>
