<template>
  <v-app
    id="inspire"
    dark>
    <v-content>
      <v-container
        fluid
        fill-height>
        <v-layout>
          <nuxt/>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer
      app
      fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'Admin'
}
</script>

<style scoped>
</style>
