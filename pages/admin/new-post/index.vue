<template>
  <section class="new-post">
    <h1 class="text-xs-center">New post</h1>
    <v-container
      grid-list-xl
      fluid>
      <v-layout
        row
        wrap>
        <form
          class="new-post__form"
          @submit.prevent="onSubmit()">
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
  data() {
    return {
      title: '',
      thumbnail: '',
      author: '',
      description: ''
    }
  },
  methods: {
    onSubmit() {
      const postData = {
        title: this.title,
        thumbnail: 'http://lorempixel.com/400/200/',
        author: this.author,
        description: this.description,
        updatedDate: new Date()
      }
      axios
        .post('https://nuxt-blog-85622.firebaseio.com/posts.json', postData)
        .then(result => console.log(result))
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>
.new-post {
  width: 500px;
  margin: 0 auto;
}
.new-post__form {
  width: 100%;
}
</style>
