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
    <v-footer>
      <span>&copy; 2017</span>
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
import * as fb from 'firebase'
import 'firebase/auth'
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
