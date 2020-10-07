<template>
  <Page v-if="loading" actionBarHidden="true">
    loading..
  </Page>
  <Page v-else actionBarHidden="true">
    <DockLayout stretchLastChild="true" backgroundColor="#e9edec">
      <StackLayout class="register-image-wrap" backgroundColor="#e9edec" dock="top">
        <!-- <Image verticalAlignment="center" width="100%" height="400" src="~/assets/images/myvoiz.header.verifymail.png" stretch="aspectFit" /> -->
      </StackLayout>
      <StackLayout class="register-input-wrap" verticalAlignment="center" horizontalAlignment="center" dock="bottom">
        <Label horizontalAlignment="center" @tap="logoutAndDelete" :class="'link' + (isDeleting ? ' disabled' : '')" :text="isDeleting ? 'Bitte warten ...' : 'Abbrechen'" />
      </StackLayout>
    </DockLayout>
  </Page>
</template>

<script>
import firebase from 'nativescript-plugin-firebase'
import request from '../../utils/request';

let intervalId = null;
export default {

  props: ['user'],

  data() {
    return {
      loading: true,
      isDeleting: false
    }
  },

  mounted() {
    request.get().then(client => {
      // Try initial verify
      client.initialVerify().then(() => {
        // Successful, just do nothing.
      }).catch(() => {
        // Failed most likely because email is not verified, retry every 5 seconds
        this.loading = false;
        intervalId = setInterval(() => client.initialVerify(), 5000);
      });
    });
  },

  beforeDestroy() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  },

  methods: {

    logoutAndDelete() {
      if (this.isDeleting) return;
      this.isDeleting = true;
      this.relogCurrentUser()
        .then(() => firebase.deleteUser())
        .then(() => firebase.logout())
        .catch(() => firebase.logout());
    },

    // ToDo: Make it work !? ^^
    relogCurrentUser() {
      const user = this.user;
      return firebase.reauthenticate({
        type: user.providers.reduce((res, p) => {
          if (p.id === "facebook.com") {
            return firebase.LoginType.FACEBOOK;
          }
          if (p.id === "google.com") {
            return firebase.LoginType.GOOGLE;
          }
          return res;
        }, null)
      });
    },

  }

}
</script>

<style lang="scss" scoped>
.register-image-wrap {
  padding-top: 100;
  padding-bottom: 200;
}

.register-input-wrap {
  padding: 0 40 20 40;
  width: 100%;
}

.register-field {
  margin: 10 0;
}

.link {
  margin-top: 15;
  font-weight: bold;
  color: #189ed7;
}

.link.disabled {
  color: rgba(0, 0, 0, 0.4);
}
</style>