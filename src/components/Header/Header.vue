<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">VideoSeed</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/sign-up" v-if="$route.name !== 'User'">Signup</b-nav-item>
          <b-nav-item to="/" v-if="$route.name !== 'User'">Login</b-nav-item>
          <b-nav-item to="/verify" v-if="$route.name !== 'User'">Verify Email</b-nav-item>
          <b-nav-item v-if="$route.name === 'User'" @click.prevent="logoutUser">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'Header',
    methods: {
      ...mapMutations(['clearUser']),
      logoutUser () {
        // this.$router.push('/')
        // this.clearUser()
        this.$bvModal.show('modal-logout')
      }
    }
  }
</script>

<style scoped>

</style>
