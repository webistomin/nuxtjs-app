<template>
  <v-flex
    xs12
    sm6
    md4>
    <v-card
      :to="'posts/' + id"
      nuxt>
      <v-img
        :src="thumbnail"
        aspect-ratio="2.75"
      />
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ title }}</h3>
          <div>{{ previewText }}</div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
