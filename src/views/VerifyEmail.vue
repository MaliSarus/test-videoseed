<template>
  <b-col cols="12" md="6" offset-md="3">
    <b-form @submit.prevent="verifyEmail">
      <b-form-group label="Enter your verification code">
        <b-form-input type="text" v-model="emailCode"></b-form-input>
      </b-form-group>
      <b-button variant="success" type="submit">Submit</b-button>
    </b-form>
    <div style="margin-top: 20px">
      <b-alert :show="!isError && !isLoading" variant="success">
        <h1>Yeah Big Boy (or Girl)! {{emailCode}}</h1>
        Aww yeah, you successfully read this important alert message. Now you can run to Log In to your account.
        <div style="margin-top: 20px">
          <b-button variant="success" to="/">Go to Log In</b-button>
        </div>
      </b-alert>
      <b-alert :show="isError && !isLoading" variant="danger">
        <h1>Sorry Boy (or Girl)!</h1>
        Unfortunately, your code is not valid. Please try again.
      </b-alert>
    </div>
  </b-col>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'VerifyEmail',
    data () {
      return {
        emailCode: '',
        isError: false,
        isLoading: true,
      }
    },
    methods: {
      verifyEmail () {
        axios
          .get('/api/account/signup/verify/', {
            params: {
              code: this.emailCode
            }
          })
          .then((res) => {
            this.isLoading = false
          })
          .catch(e => {
            this.isError = true
            this.isLoading = false
          })
      }
    }
  }
</script>

<style scoped>

</style>
