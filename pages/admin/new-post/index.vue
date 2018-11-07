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
              type="file"
              style="display: none"
              accept="image/*"
              @change="onFileChange">
          </v-flex>
          <v-flex class="mb-5">
            <img
              v-if="thumbnail"
              :src="thumbnail"
              alt="Preview image"
              height="200">
          </v-flex>
          <v-btn
            :loading="loading"
            color="success"
            type="submit">
            <v-icon
              dark
              left>check_circle</v-icon>
            Save</v-btn>
          <v-btn
            color="warning"
            to="/admin">
            <v-icon
              dark
              left>remove_circle</v-icon>
            Cancel</v-btn>
        </form>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Index',
  middleware: 'auth',
  head: {
    title: 'Create new post / Habr'
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
  methods: {
    onSubmit() {
      const postData = {
        title: this.title,
        thumbnail: this.image,
        author: this.author,
        description: this.description,
        updatedDate: new Date()
      }
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin')
      })
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
.new-post {
  width: 500px;
  margin: 0 auto;
}
.new-post__form {
  width: 100%;
}
.v-btn {
  margin-left: 0 !important;
}
.container.grid-list-xl .layout .flex {
  padding: 0 !important;
}
</style>
