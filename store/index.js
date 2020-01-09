export const state = () => ({
  bg: 'cafe',
  volume: 20,
  musics: [
    {
      id: 1,
      title: 'cafe',
      playing: false,
      audio: require('~/assets/audio/cafe.mp3')
    },
    {
      id: 2,
      title: 'rain',
      playing: false,
      audio: require('~/assets/audio/rain.mp3')
    },
    {
      id: 3,
      title: 'beach',
      playing: false,
      audio: require('~/assets/audio/beach.mp3')
    },
    {
      id: 4,
      title: 'forest',
      playing: false,
      audio: require('~/assets/audio/forest.mp3')
    },
    {
      id: 5,
      title: 'fire',
      playing: false,
      audio: require('~/assets/audio/fire.mp3')
    }
  ]
})

export const getters = {
  getBg (state) {
    return require(`~/assets/img/bg/${state.bg}.jpg`)
  },
  getVolume (state) {
    return state.volume
  },
  getMusics (state) {
    return state.musics
  },
  getPlayingMusic (state) {
    return state.musics.find(item => item.playing)
  }
}

export const mutations = {
  setBg (state, music) {
    state.bg = music
  },
  setVolume (state, value) {
    state.volume = value
  },
  setPlaying (state, { id, playing }) {
    state.musics.forEach((item) => {
      item.playing = false
      if (item.id === id) {
        item.playing = playing
      }
    })
  }
}
