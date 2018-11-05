<template>
  <v-app
    id="inspire"
    dark>
    <navigation/>
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
import Navigation from '../components/Navigation/Navigation'
export default {
  components: { Navigation }
}
</script>
