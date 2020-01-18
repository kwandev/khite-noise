export const state = () => ({
  musics: [
    {
      id: 1,
      title: 'Cafe',
      audio: require('~/assets/audio/cafe.mp3')
    },
    {
      id: 2,
      title: 'Rain',
      audio: require('~/assets/audio/rain.mp3')
    },
    {
      id: 3,
      title: 'Beach',
      audio: require('~/assets/audio/beach.mp3')
    },
    {
      id: 4,
      title: 'Forest',
      audio: require('~/assets/audio/forest.mp3')
    },
    {
      id: 5,
      title: 'Fire',
      audio: require('~/assets/audio/fire.mp3')
    }
  ],
  currentMusic: {
    id: null,
    title: '',
    audio: null,
    playing: false
  }
})

export const getters = {
  getMusics (state) {
    return state.musics
  },
  getCurrentMusic (state) {
    return state.currentMusic
  }
}

export const mutations = {
  setCurrentMusic (state, payload) {
    Object.assign(state.currentMusic, payload)
  },
  pauseCurrentMusic (state) {
    state.currentMusic.playing = false
  },
  playCurrentMusic (state) {
    state.currentMusic.playing = true
  }
}
