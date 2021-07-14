<template>
  <b-row>
    <b-col cols="12" md="6" offset-md="3">
      <h1>{{user.email}}</h1>
      <b-form>
        <b-form-group label="User ID:" for="user-id">
          <b-form-input type="text" readonly id="user-id" :value="$route.params.id"/>
        </b-form-group>
        <b-form-group label="User Type:" for="user-type">
          <b-form-input type="text" readonly id="user-type" :value="user.type"/>
        </b-form-group>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'User',
    computed:{
      ...mapGetters(['user'])
    }
  }
</script>

<style scoped>

</style>
