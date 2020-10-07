<template>
  <Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <!-- Loader -->
    <!-- <ActivityIndicator v-if="initialLoading" busy="true" width="100" height="100"></ActivityIndicator> -->

    <!-- App -->
    <App v-if="hasAuth" />

    <!-- Login & Registration -->
    <Login v-else />
  </Page>
</template>

<script>
import Vue from 'nativescript-vue'
import { firebase } from '@nativescript/firebase'
import App from './App/index'
import Login from '../components/Login'

export default {
  name: "Wrapper",

  data() {
    return {
      initialLoading: true,
      hasAuth: false
    }
  },

  mounted() {
    this.setup();
  },

  components: {
    App,
    Login
  },

  methods: {

    async setup() {
      await this.initFirebase();
      this.initialSetupDone = true;
    },

    onAuthChange({ loggedIn, user }) {
      console.log({user});
      this.hasAuth = loggedIn;
      this.initialLoading = false;
    },

    initFirebase() {
      return firebase.init({
          persist: true,
          onAuthStateChanged: this.onAuthChange,
          thisArg: this
      })
    },

  }

}
</script>

<style lang="scss" scoped>
ActionBar {
    background-color: #79bef7;
    color: #ffffff;
}

.title {
    text-align: left;
    padding-left: 16;
}

.message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
}

.drawer-header {
    padding: 50 16 16 16;
    margin-bottom: 16;
    background-color: #79bef7;
    color: #ffffff;
    font-size: 24;
}

.drawer-item {
    padding: 8 16;
    color: #333333;
    font-size: 16;
}
</style>