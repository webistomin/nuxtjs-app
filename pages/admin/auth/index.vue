<template>
  <section class="auth">
    <v-form
      v-model="valid"
      class="auth__form"
      @submit.prevent="onSubmit">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      />
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        :counter="10"
        label="Password"
        required
        class="mb-5"
      />
      <v-btn
        :disabled="!valid"
        color="success"
        type="submit"
      >
        <v-icon
          dark
          left>keyboard_tab</v-icon>
        {{ isLogin ? 'Login' : 'Sign up' }}
      </v-btn>
      <v-btn
        color="warning"
        @click="isLogin = !isLogin"
      >
        <v-icon
          dark
          left>cached</v-icon>
        Switch to
        {{ isLogin ? 'Sign up' : 'Login' }}
      </v-btn>
    </v-form>
  </section>
</template>

<script>
export default {
  name: 'Auth',
  head: {
    title: 'Login, Sign Up / Habr'
  },
  data: () => ({
    isLogin: true,
    valid: false,
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length <= 10 || 'Password must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    onSubmit() {
      const user = {
        email: this.email,
        password: this.password
      }
      if (this.isLogin) {
        this.$store.dispatch('loginUser', user).then(() => {
          this.$router.push('/admin')
        })
      } else {
        this.$store.dispatch('registerUser', user).then(() => {
          this.$router.push('/admin')
        })
      }
    }
  }
}
</script>

<style scoped>
.auth {
  width: 500px;
  margin: 0 auto;
}
.auth__form {
  width: 100%;
}
.v-btn {
  margin: 0 !important;
  margin-right: 10px !important;
}
</style>
