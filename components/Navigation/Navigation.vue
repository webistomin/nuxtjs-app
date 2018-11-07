<template>
  <v-toolbar
    :flat="true"
    app
    fixed
    clipped-left
    color="#548eaa"
    dark>
    <v-toolbar-title class="pointer">
      <router-link
        to="/"
        class="pointer"
        tag="h1">
        Habr
      </router-link>
    </v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items>
      <v-btn
        flat
        nuxt
        to="/posts">
        <v-icon
          dark
          left>message</v-icon>
        Blog
      </v-btn>
      <v-btn
        flat
        nuxt
        to="/about">
        About
      </v-btn>
      <v-btn
        flat
        nuxt
        to="/admin">
        <v-icon
          dark
          left>person</v-icon>
        Admin
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
