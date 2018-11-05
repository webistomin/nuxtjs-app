<template>
  <section class="new-post">
    <h1 class="text-xs-center">New post</h1>
    <v-container
      grid-list-xl
      fluid>
      <v-layout
        row
        wrap>
        <form class="new-post__form">
          <v-text-field
            v-model="name"
            label="Author"
            required
            color="white"
          />
          <v-text-field
            v-model="title"
            label="Title"
            required
            color="white"
          />
          <v-text-field
            v-model="thumbnail"
            label="Thubnail"
            required
            color="white"
          />
          <v-textarea
            name="input-7-1"
            label="Description"
            value=""
            color="white"
          />
          <v-btn color="success">Save</v-btn>
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
  name: 'Index'
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
</style>
