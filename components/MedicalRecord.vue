<template>
  <div class="row justify-content-left">
    <div class="col-sm-12">
      <div class="h2 text-primary">
        {{ title }}
      </div>
      <div class="h6 text-secondary">
        {{ subtitle }}
      </div>

      <b-alert
        variant="danger"
        dismissible
        fade
        show
        v-if="apiValidationErrors.length > 0"
      >
        <strong>Check your input</strong>
        <ul>
          <li
            v-for="(error, errorIndex) in apiValidationErrors"
            :key="errorIndex"
          >
            {{ error }}
          </li>
        </ul>
      </b-alert>

      <b-card class="mx-auto shadow-sm mt-4 px-lg-5" border-variant="light">
        <b-form @submit.prevent="submit">
          <b-form-group
            v-for="(investigation, investigationIndex) in investigations"
            :key="investigationIndex"
            :label-for="investigation.title"
            label-cols="12"
          >
            <template #label>
              <b-card-title class="text-primary">
                {{ investigation.title }}
              </b-card-title>
            </template>

            <b-form-checkbox-group
              :id="investigation.title"
              v-model="form.selectedInvestigations"
            >
              <div class="row">
                <div
                  class="col-sm-6 col-md-4 col-lg-3 p-3"
                  v-for="(option, optionIndex) in investigation.investigations"
                  :key="optionIndex"
                >
                  <b-form-checkbox :value="option.id" class="font-weight-bold">
                    {{ option.title }}
                  </b-form-checkbox>
                </div>
              </div>
              <hr width="100%" />
            </b-form-checkbox-group>
          </b-form-group>

          <div class="row mb-5">
            <div class="col">
              <b-form-group label-cols="12">
                <template #label>
                  <span class="text-secondary font-weight-bold"> CT Scan </span>
                </template>
                <b-form-select
                  id="ct-scan"
                  v-model="form.ctScan"
                  :options="ctScanOptions"
                >
                  <template #first>
                    <b-form-select-option value="" disabled
                      >*Specify</b-form-select-option
                    >
                  </template>
                </b-form-select>
              </b-form-group>
            </div>

            <div class="col">
              <b-form-group label-cols="12">
                <template #label>
                  <span class="text-secondary font-weight-bold"> MRI </span>
                </template>
                <b-form-select v-model="form.mri" :options="mriOptions">
                  <template #first>
                    <b-form-select-option value="" disabled
                      >*Specify</b-form-select-option
                    >
                  </template>
                </b-form-select>
              </b-form-group>
            </div>
          </div>

          <b-button
            type="submit"
            variant="primary"
            class="font-weight-bold ml-auto d-block"
            :disabled="submitting"
          >
            Save and Send
          </b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MedicalRecord',
  data() {
    return {
      title: 'Update Patient Medical Record',
      subtitle: 'Click the tabs to view and edit patient medical details',
      submitting: false,
      ctScanOptions: ['Scan needed in the left cerebral hemisphere'],
      mriOptions: ['Full body MRI'],
      form: {
        selectedInvestigations: [],
        mri: '',
        ctScan: '',
      },
      patient: 27,
      developer: 'Abutu Justice Royale',
      apiValidationErrors: [],
      successMessage: "Saved Sucessfully!"
    }
  },
  async fetch() {
    await this.getInvestigations()
  },
  computed: {
    ...mapGetters({
      investigations: 'investigations/resources',
    }),
  },
  methods: {
    resetForm() {
      this.form = {
        selectedInvestigations: [],
        mri: '',
        ctScan: '',
      }
    },
    async submit() {
      this.unsetApiValidationErrors()
      this.submitting = true
      let payload = {
        investigations: this.form.selectedInvestigations,
        mri: this.form.mri,
        ctscan: this.form.ctScan,
        patient: this.patient,
        developer: this.developer,
      }

      try {
        await this.postInvestigation(payload).then((response) => {
          this.$toasted.success(this.successMessage);
          this.resetForm()
        })
      } catch (error) {
        let errorMessage = error.response.data.message
        this.setApiValidation(error.response.data.data)

        this.$toasted.error(errorMessage)
      }

      this.submitting = false
    },
    setApiValidation(serverErrors) {
      this.apiValidationErrors = serverErrors
    },

    unsetApiValidationErrors() {
      this.apiValidationErrors = {}
    },
    ...mapActions({
      getInvestigations: 'investigations/getResources',
      postInvestigation: 'investigations/postResource',
    }),
  },
}
</script>
