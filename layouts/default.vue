<template>
  <v-app
    id="inspire"
    dark>
    <v-toolbar
      app
      fixed
      clipped-left>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn
          flat
          nuxt
          to="/users">Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container
        fluid
        fill-height>
        <v-layout
          justify-center
          align-center>
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
export default {}
</script>
