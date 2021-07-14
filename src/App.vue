<template>
  <div id="app">
    <Header/>
    <main>
      <b-container>
        <b-row>
          <b-col>
            <router-view></router-view>
          </b-col>
        </b-row>
      </b-container>

      <b-modal id="modal-logout" hide-footer>
        <template #modal-title>
          Are You sure about that?
        </template>
        <b-row>
          <b-col>
            <b-button class="mt-3" block @click="logoutUser" variant="success">Yes</b-button>
          </b-col>
          <b-col>
            <b-button class="mt-3" @click="$bvModal.hide('modal-logout')" block variant="light">No</b-button>
          </b-col>

        </b-row>

      </b-modal>
    </main>

  </div>
</template>

<script>
  import Header from '@/components/Header/Header'
  import { mapActions, mapMutations } from 'vuex'

  export default {
    components: { Header },
    methods: {
      ...mapMutations(['clearUser']),
      logoutUser () {
        this.$router.push('/')
        this.clearUser()
        this.$bvModal.hide('modal-logout')
      }
    }
  }
</script>

<style lang="scss">
  main {
    padding-top: 20px;
  }
</style>
