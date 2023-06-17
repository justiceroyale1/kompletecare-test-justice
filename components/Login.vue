<!-- Please remove this file from your project -->
<template>
  <div class="row justify-content-center">
    <div class="col-sm-12 col-md-8 col-lg-6 col-xl-4">
      <div class="display-3 text-center text-primary">
        {{ $config.appName }}
      </div>
      <b-card
        title="Login to your account"
        class="mx-auto shadow-sm mt-4"
        border-variant="light"
      >
        <b-form @submit.prevent="submit">
          <b-form-group id="email" label="Email address:" label-for="email">
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="password" label="Password:" label-for="password">
            <b-form-input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Enter password"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary" :disabled="submitting">Login</b-button>
        </b-form>

        <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  head() {
    return {
      title: 'Login',
    }
  },
  data() {
    return {
      submitting: false,
      error: null,
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    resetForm() {
      this.form = {
        email: '',
        password: '',
      }
    },
    async submit() {
      this.submitting = true
      try {
        let response = await this.$auth.loginWith('local', {data: this.form})
        console.log(response)
        this.submitting = false
      } catch (err) {
        console.log(err)
      }
    },
    // async logout() {
    //   await this.$apolloHelpers.onLogout()
    //   // this.isAuthenticated = false
    // },
  },
}
</script>
