export const state = () => ({
  bg: 'Cafe'
})

export const getters = {
  getBg (state) {
    const bg = state.bg.toLowerCase()
    return require(`~/assets/img/bg/${bg}.jpg`)
  }
}

export const mutations = {
  setBg (state, music) {
    state.bg = music
  }
}
