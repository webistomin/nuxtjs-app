import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPost: []
    },
    mutations: {
      setPost(state, payload) {
        state.loadedPost = payload
      }
    },
    actions: {
      setPost({ commit }, payload) {
        commit('setPost', payload)
      },
      nuxtServerInit({ commit }, context) {
        return axios
          .get('https://nuxt-blog-85622.firebaseio.com/posts.json')
          .then(response => {
            const postsArray = []
            for (const key in response.data) {
              postsArray.push({ ...response.data[key], id: key })
            }
            commit('setPost', postsArray)
          })
          .catch(e => context.error(e))
      }
    },
    getters: {
      getLoadedPost(state) {
        return state.loadedPost
      }
    }
  })
}

export default createStore
