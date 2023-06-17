<!-- Please remove this file from your project -->
<template>
  <div class="row justify-content-left">
    <div class="col-sm-12">
      <div class="h2 text-primary">
        {{ title }}
      </div>
      <div class="h6 text-secondary">
        {{ subtitle }}
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

          <b-button type="submit" variant="primary" :disabled="submitting"
            >Login</b-button
          >
        </b-form>

        <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'MedicalRecord',
  data() {
    return {
      title: 'Update Patient Medical Record',
      subtitle: 'Click the tabs to view and edit patient medical details',
      submitting: false,
      error: null,
      form: {
        email: '',
        password: '',
      },
    }
  },
  async fetch() {
    await this.getInvestigations()
  },
  computed: {
    ...mapGetters({
      investigations: "investigations/resources",
    })
  },
  methods: {
    ...mapActions({
      getInvestigations: "investigations/getResources",
      postInvestigation: "investigations/postResource",
    }),
  },
}
</script>
