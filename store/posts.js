import Vue from 'vue'
import axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'

export default {
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
      Vue.set(state.loadedPosts, postIndex, payload)
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
    async addPost({ commit }, payload) {
      commit('setLoading', true)
      const imageExt = payload.thumbnail.name.slice(
        payload.thumbnail.name.lastIndexOf('.')
      )
      let id = null
      await axios
        .post('https://nuxt-blog-85622.firebaseio.com/posts.json', {
          title: payload.title,
          author: payload.author,
          description: payload.description,
          updatedDate: payload.updatedDate,
          thumbnail: ''
        })
        .then(response => {
          id = response.data.name
        })
        .catch(e => console.log(e))
      const fileData = await firebase
        .storage()
        .ref(`bg/${id}${imageExt}`)
        .put(payload.thumbnail)
      const thumbnail = await fileData.ref.getDownloadURL()
      await firebase
        .database()
        .ref('posts')
        .child(id)
        .update({
          thumbnail
        })
      commit('addPost', {
        title: payload.title,
        author: payload.author,
        description: payload.description,
        updatedDate: payload.updatedDate,
        id: id,
        thumbnail: thumbnail
      })
      commit('setLoading', false)
    },
    async editPost({ commit }, payload) {
      let imageExt = null
      let fileData = null
      let thumbnail = null
      commit('setLoading', true)
      if (payload.thumbnail !== null) {
        imageExt = payload.thumbnail.name.slice(
          payload.thumbnail.name.lastIndexOf('.')
        )
        fileData = await firebase
          .storage()
          .ref(`bg/${payload.id}${imageExt}`)
          .put(payload.thumbnail)
        thumbnail = await fileData.ref.getDownloadURL()
      }
      axios
        .put(
          `https://nuxt-blog-85622.firebaseio.com/posts/${payload.id}.json`,
          {
            title: payload.title,
            author: payload.author,
            description: payload.description,
            updatedDate: payload.updatedDate,
            thumbnail: thumbnail,
            id: payload.id
          }
        )
        .then(() => {
          commit('editPost', {
            title: payload.title,
            author: payload.author,
            description: payload.description,
            updatedDate: payload.updatedDate,
            id: payload.id,
            thumbnail: thumbnail
          })
          commit('setLoading', false)
        })
    }
  },
  getters: {
    getLoadedPosts(state) {
      return state.loadedPosts
    }
  }
}
