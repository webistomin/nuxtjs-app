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
          />
          <v-text-field
            v-model="author"
            label="Author"
            required
          />
          <v-textarea
            v-model="description"
            name="input-7-1"
            label="Description"
          />
          <v-flex class="mb-3">
            <v-btn
              color="info"
              dark
              @click="triggerUpload">
              <v-icon
                left
                dark>
                cloud_upload
              </v-icon>
              Upload image
            </v-btn>
            <input
              ref="fileInput"
              required
              type="file"
              style="display: none"
              accept="image/*"
              @change="onFileChange">
          </v-flex>
          <v-flex class="mb-5">
            <img
              v-if="thumbnail"
              :src="thumbnail"
              class="post-edit__img"
              alt="Preview image"
              height="200">
          </v-flex>
          <v-btn
            :loading="loading"
            color="success"
            type="submit">
            <v-icon
              dark
              left>archive</v-icon>
            Save</v-btn>
          <v-btn
            color="warning"
            to="/admin">
            <v-icon
              dark
              left>cancel</v-icon>
            Cancel</v-btn>
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
  head: {
    title: 'Edit post / Habr'
  },
  data() {
    return {
      title: '',
      thumbnail: '',
      author: '',
      description: '',
      image: null
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
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
        thumbnail: this.image || this.thumbnail,
        author: this.author,
        description: this.description,
        updatedDate: new Date(),
        id: this.$route.params.postId
      }
      this.$store
        .dispatch('editPost', postData)
        .then(() => this.$router.push('/admin'))
    },
    triggerUpload() {
      this.$refs.fileInput.click()
    },
    onFileChange(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.thumbnail = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
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
.v-btn {
  margin-left: 0 !important;
}
.container.grid-list-xl .layout .flex {
  padding: 0 !important;
}
.post-edit__img {
  max-width: 100%;
  vertical-align: top;
}
</style>
