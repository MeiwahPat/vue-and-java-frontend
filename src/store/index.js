import Vue from 'vue'
import Vuex from 'vuex'

var axios = require('axios')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
    },
    library: {
      categories: []
    }
  },
  mutations: {
    login (state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  },
  actions: {
    getCategories ({commit, state}) {
      axios.post('/categories').then(res => {
        state.library.categories = res.data
      }).catch(() => {
        state.library.categories = []
      })
    }
  }
})
