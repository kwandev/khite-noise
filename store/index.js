export const state = () => ({
  bg: 'cafe'
})

export const getters = {
  getBg (state) {
    return require(`~/assets/img/bg/${state.bg}.jpg`)
  }
}

export const mutations = {
  setBg (state, music) {
    state.bg = music
  }
}
