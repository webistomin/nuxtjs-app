<template>
  <v-layout>
    <v-flex
      xs12>
      <v-card>
        <v-img
          :src="loadedPost.thumbnail"
          aspect-ratio="2.75"
        />
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ loadedPost.title }}</h3>
            <div
              class="mb-5"
              v-html="loadedPost.description"/>
            <time>Last updated on: {{ loadedPost.updatedDate | date }}</time>
            <div>Author: {{ loadedPost.author }}</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Index',
  head() {
    return {
      title: `${this.loadedPost.title} / Habr`
    }
  },
  asyncData(context) {
    if (context.payload) {
      return {
        loadedPost: context.payload.postData
      }
    }
    return axios
      .get(
        `https://nuxt-blog-85622.firebaseio.com/posts/${context.params.id}.json`
      )
      .then(response => {
        return {
          loadedPost: response.data
        }
      })
      .catch(e => context.error(e))
  }
}
</script>
<style scoped>
</style>
