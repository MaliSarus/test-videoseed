<template>
  <b-row>
    <b-col cols="12" md="6" offset-md="3">
      <b-form @submit.prevent="signUp" v-if="!isSuccess">
        <b-form-group
          label="Email address:"
          label-for="input-email"
        >
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
            @input="inputChange"
          />
          <b-alert
            v-model="isSignUplEmailError"
            variant="danger"
          >
            <p v-for="(error,index) in signUpError.email" :key="`error-email_${index}`">
              {{error}}
            </p>
          </b-alert>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Password:" label-for="input-password">
          <b-form-input
            id="input-password"
            v-model="form.password"
            placeholder="Enter password"
            type="password"
            required
            @input="inputChange"
          />
          <b-alert
            v-model="isSignUpPasswordError"
            variant="danger"
          >
            <p v-for="(error,index) in signUpError.password" :key="`error-password_${index}`">
              {{error}}
            </p>
          </b-alert>
        </b-form-group>
        <b-button type="submit" variant="primary">{{isLoading ? 'Wait' : 'Submit'}}</b-button>
      </b-form>
      <b-alert v-model="isSuccess">You are successed Sign Up </b-alert>
      <b-alert style="margin-top: 20px" v-model="isSignUplDetailError" variant="danger">{{signUpError.detail}}</b-alert>
    </b-col>

  </b-row>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'SingUp',
    data () {
      return {
        form: {
          email: '',
          password: '',
        },
        isLoading: false,
        isSuccess: false,
        signUpError: {}
      }
    },
    computed:{
      isSignUpPasswordError(){
        return !!this.signUpError?.password
      },
      isSignUplEmailError(){
        return !!this.signUpError?.email
      },
      isSignUplDetailError(){
        return !!this.signUpError?.detail
      }
    },
    methods: {
      signUp () {
        this.isLoading = true
        const form = this.form
        axios
          .post('/api/account/respondent/signup/', {
            email: form.email,
            password: form.password,
          })
          .then(res=>{
            this.isLoading = false
            this.isSuccess = true
          })
          .catch(e => {
            this.signUpError = e.response.data
            this.isLoading = false
          })
      },
      inputChange(){
        this.signUpError = {}
      }
    }
  }
</script>

<style scoped>

</style>
