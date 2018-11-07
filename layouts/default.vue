<template>
  <v-app>
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
      color="#548eaa"
      dark>
      <span>&copy; 2018</span>
    </v-footer>
    <template v-if="error">
      <v-snackbar
        :timeout="5000"
        :multi-line="true"
        :value="true"
        color="error"
        @input="closeError"
      >
        {{ error }}
        <v-btn
          flat
          dark
          @click.native="closeError">Close</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
import Navigation from '../components/Navigation/Navigation'
export default {
  components: { Navigation },
  computed: {
    error() {
      return this.$store.getters.error
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
