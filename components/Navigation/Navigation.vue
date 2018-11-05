<template>
  <v-toolbar
    app
    fixed
    clipped-left>
    <v-toolbar-title class="pointer">
      <router-link
        to="/"
        class="pointer"
        tag="h1">
        Blog
      </router-link>
    </v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items>
      <v-btn
        flat
        nuxt
        to="/posts">
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
