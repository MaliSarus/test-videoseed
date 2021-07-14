import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    clearUser (state) {
      state.user = {}
    },

  },
  actions: {
    getTokens ({ commit }, { email, password }) {
      return axios
        .post('/api/account/token/', {
          email,
          password,
        })
        .then(res => {
          const tokens = {
            access: res.data.access,
            refresh: res.data.refresh
          }
          commit('setUser', tokens)
          return tokens
        })
    },
    loginUser ({ commit }, tokens) {
      return axios
        .get('/api/account/current_user/', {
          headers: {
            Authorization: `Bearer ${tokens.access}`
          }
        })
        .then(res => {
          const userData = {
            ...tokens,
            ...res.data
          }
          commit('setUser', userData)
          return userData
        })
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
})
