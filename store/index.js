import Vuex from 'vuex'
import user from './user'
import shared from './shared'
import posts from './posts'

const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
      user,
      shared,
      posts
    }
  })
}

export default createStore
