<template>
  <v-flex
    xs12
    sm6
    md4>
    <v-card
      :to="isAdmin ? 'admin/' + id : 'posts/' + id"
      class="card"
      nuxt
      tile>
      <v-img
        :src="thumbnail"
        aspect-ratio="2.75"
      />
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ title }}</h3>
          <div
            class="card__preview"
            v-html="previewText.slice(0,30) + '...'"/>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
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
.card {
  overflow: hidden;
}
.card__preview {
  width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
