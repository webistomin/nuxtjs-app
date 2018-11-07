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
          <!--<v-text-field-->
          <!--v-model="thumbnail"-->
          <!--label="Thumbnail"-->
          <!--required-->
          <!--/>-->
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
              color="indigo darken-4"
              dark>Upload image</v-btn>
          </v-flex>
          <v-flex class="mb-5">
            <img
              src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Preview image"
              height="200">
          </v-flex>
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
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin')
      })
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
