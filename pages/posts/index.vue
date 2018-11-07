<template>
  <section class="post-list">
    <h1 class="text-xs-center">All posts</h1>
    <v-container
      grid-list-xl
      fluid>
      <v-layout
        row
        wrap>
        <post-preview
          v-for="post in getLoadedPosts"
          :key="post.id"
          :id="post.id"
          :thumbnail="post.thumbnail"
          :title="post.title"
          :preview-text="post.description"/>
      </v-layout>
    </v-container>
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
  },
  head: {
    title: 'All posts / Habr'
  }
}
</script>

<style scoped>
.post-list {
  width: 100%;
}
</style>
