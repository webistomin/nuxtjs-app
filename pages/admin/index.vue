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
            v-for="n in 10"
            :key="n"
            :id="n"
            :thumbnail="'https://picsum.photos/520/190?image=' + n * 5"
            title="Hello"
            preview-text="Hello again"/>
        </v-layout>
      </v-container>
    </div>
  </section>
</template>

<script>
import PostPreview from '../../components/Posts/PostPreview'
export default {
  layout: 'admin',
  name: 'Index',
  components: { PostPreview }
}
</script>

<style scoped>
</style>
