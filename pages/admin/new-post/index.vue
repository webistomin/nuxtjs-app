<template>
  <section class="new-post">
    <h1 class="text-xs-center">New post</h1>
    <v-container
      grid-list-xl
      fluid>
      <v-layout
        row
        wrap>
        <v-form
          v-model="valid"
          class="new-post__form"
          @submit.prevent="onSubmit()">
          <v-text-field
            v-model="title"
            :rules="titleRules"
            :validate-on-blur="true"
            label="Title"
            required
          />
          <v-text-field
            v-model="author"
            :rules="authorRules"
            :validate-on-blur="true"
            label="Author"
            required
          />
          <v-textarea
            v-model="description"
            :rules="descriptionRules"
            :validate-on-blur="true"
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
              :rules="fileRules"
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
              class="new-post__img"
              alt="Preview image"
              height="200">
          </v-flex>
          <v-btn
            :loading="loading"
            :disabled="!valid || !thumbnail"
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
        </v-form>
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
      thumbnail: null,
      author: '',
      description: '',
      image: null,
      valid: false,
      titleRules: [
        v => !!v || 'Title is required',
        v => v.length >= 5 || 'Title must be more or equal than 5 characters'
      ],
      authorRules: [
        v => !!v || 'Author name is required',
        v =>
          v.length >= 5 || 'Author name must be more or equal than 5 characters'
      ],
      descriptionRules: [v => !!v || 'Description is required'],
      fileRules: [v => !!v || 'Image is required']
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
.new-post__img {
  max-width: 100%;
  vertical-align: top;
}
</style>
