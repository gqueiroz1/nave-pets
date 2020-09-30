const state = {
  dialogType: 'REGISTER',
  showDialog: false
}

const getters = {
  getShowDialog: state => {
    return state.showDialog
  },

  getDialogType: state => {
    return state.dialogType
  }
}

const actions = {
  toggleShowDialog: ({ commit }, value) => {
    commit('toggleShowDialog', value)
  }
}

const mutations = {
  toggleShowDialog: (state, value) => {
    state.dialogType = value
    state.showDialog = !state.showDialog
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
