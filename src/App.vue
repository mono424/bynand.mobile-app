<template>
  <Navigator :defaultRoute="isAuthenticated ? '/home' : '/login'"/>
</template>

<script>
import Vue from 'nativescript-vue'
import { mapGetters } from "vuex";

export default {
  name: "App",

  data() {
    return {
      initialLoading: true,
      isLoggedIn: false
    }
  },

  computed: {
    ...mapGetters(['isAuthenticated'])
  },

  watch: {

    isAuthenticated() {
      console.log("geil", this.isAuthenticated)

      if (this.isAuthenticated) {
        this.$navigator.navigate('/app', { transition: "slideUp", clearHistory: true });
      } 
      if (!this.isAuthenticated) {
        this.$navigator.navigate('/login', { transition: "slideDown", clearHistory: true });
      }
    }

  }

}
</script>