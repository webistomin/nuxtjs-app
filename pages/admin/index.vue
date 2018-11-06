<template>
  <section class="admin">
    <h1 class="text-xs-center">Admin page</h1>
    <div class="admin__block mb-5">
      <v-btn
        color="success"
        to="/admin/new-post">Create a post</v-btn>
    </div>
    <div class="admin-block">
      <h2>Existing posts</h2>
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
  components: { PostPreview },
  computed: {
    getLoadedPosts() {
      return this.$store.getters.getLoadedPosts
    }
  }
}
</script>

<style scoped>
.admin {
  width: 100%;
}
</style>
