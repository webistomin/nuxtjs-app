import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, payload) {
        state.loadedPosts = payload
      },
      addPost(state, payload) {
        state.loadedPosts.push(payload)
      },
      editPost(state, payload) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === payload.id
        )
        state.loadedPosts[postIndex] = payload
      }
    },
    actions: {
      setPosts({ commit }, payload) {
        commit('setPosts', payload)
      },
      nuxtServerInit({ commit }, context) {
        return axios
          .get('https://nuxt-blog-85622.firebaseio.com/posts.json')
          .then(response => {
            const postsArray = []
            for (const key in response.data) {
              postsArray.push({ ...response.data[key], id: key })
            }
            commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
      },
      addPost({ commit }, payload) {
        return axios
          .post('https://nuxt-blog-85622.firebaseio.com/posts.json', payload)
          .then(response => {
            console.log(response)
            commit('addPost', { ...payload, id: response.data.name })
          })
          .catch(e => console.log(e))
      },
      editPost({ commit }, payload) {
        return axios
          .put(
            `https://nuxt-blog-85622.firebaseio.com/posts/${payload.id}.json`,
            payload
          )
          .then(response => {
            console.log(response)
            commit('editPost', payload)
          })
      }
    },
    getters: {
      getLoadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
