<template>
  <section class="admin">
    <h1 class="text-xs-center">Admin page</h1>
    <div class="admin__block mb-5">
      <v-btn
        color="success"
        to="/admin/new-post">
        <v-icon
          dark
          left>add</v-icon>
        Create a post
      </v-btn>
      <v-btn
        color="error"
        @click="logout">
        <v-icon
          dark
          left>lock_open</v-icon>
        Logout
      </v-btn>
    </div>
    <div class="admin__block">
      <h2 class="admin__title">Existing posts</h2>
      <v-container
        grid-list-xl
        fluid>
        <v-layout
          row
          wrap>
          <post-preview
            v-for="post in getLoadedPosts"
            :is-admin="true"
            :key="post.id"
            :id="post.id"
            :thumbnail="post.thumbnail"
            :title="post.title"
            :preview-text="post.description"/>
        </v-layout>
      </v-container>
    </div>
  </section>
</template>

<script>
import PostPreview from '../../components/Posts/PostPreview'
export default {
  name: 'Index',
  head: {
    title: 'Admin page / Habr'
  },
  components: { PostPreview },
  middleware: 'auth',
  computed: {
    getLoadedPosts() {
      return this.$store.getters.getLoadedPosts
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.admin {
  width: 100%;
}
.admin__title {
  margin-bottom: 20px;
}
.container.grid-list-xl.fluid {
  padding: 0 !important;
}
</style>
