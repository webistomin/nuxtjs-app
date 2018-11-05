<template>
  <main style="width: 100%;">
    <section class="intro">
      <h1 class="intro__title text-xs-center">Get the latest tech news!</h1>
    </section>
    <section class="posts">
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
            :thumbnail="'https://picsum.photos/520/190?image=' + n"
            title="Hello"
            preview-text="Hello again"/>
        </v-layout>
      </v-container>
    </section>
  </main>
</template>

<script>
import PostPreview from '../components/Posts/PostPreview'

export default {
  components: { PostPreview },
  data: () => ({
    drawer: null
  })
}
</script>
