import Vuex from 'vuex'
import axios from 'axios'
import user from './user'
import shared from './shared'
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'

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
            thumbnail: 'img'
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
    },
    modules: {
      user,
      shared
    }
  })
}

export default createStore
