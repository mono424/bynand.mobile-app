<template>
  <Page actionBarHidden="true">
    <DockLayout stretchLastChild="true" >
      <StackLayout class="login-input-wrap" backgroundColor="#f8f9f4" height="50%" verticalAlignment="bottom" horizontalAlignment="center" dock="bottom">
        <TextField borderBottomWidth="2" borderColor="#29abe2" class="login-field" fontSize="24" width="90%" v-model="email" hint="Email" keyboardType="email" returnKeyType="next" />
        <TextField borderBottomWidth="2" borderColor="#29abe2" class="login-field" fontSize="24" width="90%" v-model="password" hint="Passwort" returnKeyType="go" secure />
        <TextButton :loading="loading" :tap="login" text="Anmelden" class="margin-top" />
      </StackLayout>
      <StackLayout class="login-image-wrap" backgroundColor="#f8f9f4" dock="top">
        <Image verticalAlignment="center" width="100%" height="100%" src="~/assets/images/bynand.header.login.jpg" stretch="aspectFill" />
      </StackLayout>
    </DockLayout>
  </Page>
</template>

<script>
import { firebase } from '@nativescript/firebase'
import TextButton from '../../components/TextButton'

export default {
  name: "EmailLogin",

  data() {
    return {
      email: "",
      password: "",
      error: null,
      loading: false
    }
  },

  components: {
    TextButton
  },

  methods: {

    login() {
      this.loading = true;
      firebase.login({
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email: this.email,
          password: this.password
        }
      })
      .catch(err => {
        this.error = err;
        this.loading = false;
      });
    },

  }

}
</script>

<style lang="scss" scoped>
.login-image-wrap {
  padding-top: 100;
}

.login-input-wrap {
  padding: 0 40 20 40;
  width: 100%;
}

.login-field {
  margin: 10 0;
}
</style>