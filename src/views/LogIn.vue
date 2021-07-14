<template>
  <b-row>
    <b-col md="6" offset-md="3">
      <b-form @submit.prevent="loginUser">
        <b-form-group label="Email address:" label-for="login-input-email">
          <b-form-input id="login-input-email" type="email" v-model="form.email"></b-form-input>
        </b-form-group>
        <b-form-group label="Password:" label-for="login-input-password">
          <b-form-input id="login-input-password" type="password" v-model="form.password"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="success">{{isLoading ? 'Wait' : 'LogIn'}}</b-button>
      </b-form>
      <b-alert
        v-model="isError"
        variant="danger"
        class="mt-3"
      >
        <p class="m-0">{{error}}</p>
      </b-alert>
    </b-col>
  </b-row>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'LogIn',
    data () {
      return {
        isLoading: false,
        form: {
          email: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      ...mapActions({
        getTokens: 'getTokens',
        fetchUser: 'loginUser'
      }),
      loginUser () {
        this.isLoading = true
        this
          .getTokens(this.form)
          .then(tokens => {
            return this.fetchUser(tokens)
          })
          .then(res => {
            this.$router.push({
              name: 'User',
              params: { id: res.id }
            })
          })
          .catch(e => {
            this.error = e.response.data.detail
            this.isLoading = false
          })
      }
    },
    computed: {
      ...mapGetters(['user']),
      isError () {
        return !!this.error
      }
    }
  }
</script>

<style scoped>

</style>
