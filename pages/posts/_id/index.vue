<template>
  <v-layout>
    <v-flex
      xs12>
      <v-card>
        <v-img
          :src="getPost.thumbnail"
          aspect-ratio="2.75"
        />
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ getPost.title }}</h3>
            <div class="mb-5">{{ getPost.content }}</div>
            <time>Last updated on: {{ getPost.updatedDate }}</time>
            <div>Author: {{ getPost.author }}</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    getPost() {
      return this.$store.getters.getLoadedPost
    }
  }
}
</script>
<style scoped>
</style>
