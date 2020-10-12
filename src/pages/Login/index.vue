<template>
  <Page actionBarHidden="true">
    <DockLayout stretchLastChild="true" backgroundColor="#072c3d">
      <StackLayout class="login-wrap" verticalAlignment="bottom" height="35%" dock="bottom">
        <TextButton text="Anmelden" :tap="navigateToEmailLogin" />
        <StackLayout class="register-wrap" horizontalAlignment="center" verticalAlignment="top" orientation="horizontal">
          <Label color="#f8f9f4">Neu Hier? </Label>
          <Label @tap="navigateToRegister" class="register">Registrieren.</Label>
        </StackLayout>
      </StackLayout>
      <StackLayout class="login-image-wrap" backgroundColor="#f8f9f4" dock="top">
        <Image verticalAlignment="center" width="100%" height="100%" src="~/assets/images/bynand.header.jpg" stretch="aspectFill" />
      </StackLayout>
    </DockLayout>
  </Page>
</template>

<script>
import { firebase } from '@nativescript/firebase'
import { LoadingIndicator } from "@nstudio/nativescript-loading-indicator";
import TextButton from '@/components/TextButton'

export default {
  name: "Login",

  data() {
    return {}
  },

  created() {
    this.loader = new LoadingIndicator();
  },

  components: {
    TextButton
  },

  computed: {

    currentUser() {
      return null;
    },

    addCredentialsPageVisisble() {
      console.log({
        hasAuth: this.hasAuth
      })
      return (this.hasAuth && !this.userHasCredentials)
    },

    verifyEmailPageVisible() {
      return (this.hasAuth && this.userHasCredentials);
    },

  },

  methods: {

    navigateToEmailLogin() {
      this.$navigator.navigate('/login/email', { transition: "slideLeft" });
    },

    navigateToRegister() {
      alert("Registrieren ist momentan deaktiviert.");
    },

    loginByGoogle() {
      this.loader.show();
      firebase.login({
        type: firebase.LoginType.GOOGLE,
        googleOptions: {
          scope: ['public_profile', 'email']
        }
      }).finally(() => {
        this.loader.hide();
      });
    },

    loginByFacebook() {
      this.loader.show();
      firebase.login({
        type: firebase.LoginType.FACEBOOK,
        facebookOptions: {
          scope: ['public_profile', 'email']
        }
      }).finally(() => {
        this.loader.hide();
      });
    },

  }

}
</script>

<style lang="scss" scoped>
.login-wrap {
  padding: 0 20 20 20;
  width: 100%;
}

.login-field {
  margin: 10 0;
}

.register {
  margin-left: 10;
  font-weight: bold;
  color: #78bdc4;
}

.register-wrap {
  font-size: 16;
  padding: 25 0 0 0;
}
</style>
