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
          v-for="n in 30"
          :key="n"
          :id="n"
          :thumbnail="'https://picsum.photos/520/190?image=1'"
          title="Hello"
          preview-text="Hello again"/>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import PostPreview from '../../components/Posts/PostPreview'
export default {
  name: 'Index',
  components: { PostPreview }
}
</script>

<style scoped>
</style>
