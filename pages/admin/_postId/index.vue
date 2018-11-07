<template>
  <section class="post-edit">
    <h1 class="text-xs-center">Post edit</h1>
    <v-container
      grid-list-xl
      fluid>
      <v-layout
        row
        wrap>
        <form
          class="post-edit__form"
          @submit.prevent="onSubmit">
          <v-text-field
            v-model="title"
            label="Title"
            required
            color="white"
          />
          <v-text-field
            v-model="thumbnail"
            label="Thubnail"
            required
            color="white"
          />
          <v-text-field
            v-model="author"
            label="Author"
            required
            color="white"
          />
          <v-textarea
            v-model="description"
            name="input-7-1"
            label="Description"
            color="white"
          />
          <v-btn
            color="success"
            type="submit">Save</v-btn>
          <v-btn
            color="warning"
            to="/admin">Cancel</v-btn>
        </form>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Index',
  middleware: 'auth',
  data() {
    return {
      title: '',
      thumbnail: '',
      author: '',
      description: ''
    }
  },
  mounted() {
    return axios
      .get('https://nuxt-blog-85622.firebaseio.com/posts.json')
      .then(response => {
        this.title = response.data[this.$route.params.postId].title
        this.thumbnail = response.data[this.$route.params.postId].thumbnail
        this.author = response.data[this.$route.params.postId].author
        this.description = response.data[this.$route.params.postId].description
        response.data
      })
      .catch(error => console.log(error))
  },
  methods: {
    onSubmit() {
      const postData = {
        title: this.title,
        thumbnail: 'http://lorempixel.com/400/200/',
        author: this.author,
        description: this.description,
        updatedDate: new Date(),
        id: this.$route.params.postId
      }
      this.$store
        .dispatch('editPost', postData)
        .then(() => this.$router.push('/admin'))
    }
  }
}
</script>

<style scoped>
.post-edit {
  width: 500px;
  margin: 0 auto;
}
.post-edit__form {
  width: 100%;
}
</style>
