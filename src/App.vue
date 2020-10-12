<template>
  <Navigator :defaultRoute="isLoggedIn ? '/home' : '/login'"/>
</template>

<script>
import Vue from 'nativescript-vue'
import { firebase } from '@nativescript/firebase'

export default {
  name: "Main",

  data() {
    return {
      initialLoading: true,
      isLoggedIn: false
    }
  },

  mounted() {
    this.setup();
  },

  methods: {

    async setup() {
      await this.initFirebase();
      this.initialSetupDone = true;
    },

    onAuthChange({ loggedIn, user }) {
      this.isLoggedIn = loggedIn;
      this.initialLoading = false;

      if (!this.$navigator.route.meta.needsAuth && this.isLoggedIn) {
        this.$navigator.navigate('/app', { transition: "slideUp", clearHistory: true });
      } 
      if (this.$navigator.route.meta.needsAuth && !this.isLoggedIn) {
        this.$navigator.navigate('/login', { transition: "slideUp", clearHistory: true });
      }
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