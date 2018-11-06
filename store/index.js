import Vuex from 'vuex'

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
        if (!process.client) {
          
        }
        return new Promise(resolve => {
          setTimeout(() => {
            commit('setPost', [
              {
                id: 1,
                title: `First post`,
                previewText: 'Hello',
                author: 'me',
                thumbnail:
                  'https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547',
                updatedDate: new Date(),
                content: 'lorem10'
              }
            ])
            resolve()
          }, 1000)
        })
          .then(data => {
            context.store.commit('setPost', data.loadedPost)
          })
          .catch(error => {
            context.error(error)
          })
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
