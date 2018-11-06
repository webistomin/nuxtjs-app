<template>
  <section class="auth">
    <v-form
      v-model="valid"
      class="auth__form">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        color="white"
      />
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        :counter="10"
        label="Password"
        required
        color="white"
      />
      <v-btn
        :disabled="!valid"
        color="success"
        @click="submit"
      >
        {{ isLogin ? 'Login' : 'Sign up' }}
      </v-btn>
      <v-btn
        color="warning"
        @click="isLogin = !isLogin"
      >Switch to
        {{ isLogin ? 'Sign up' : 'Login' }}
      </v-btn>
    </v-form>
  </section>
</template>

<script>
export default {
  name: 'Auth',
  layout: 'admin',
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
  })
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
</style>
