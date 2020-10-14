import { firebase } from '@nativescript/firebase'
import Store from "../vuex/store";
import { AUTH_CHANGE, UPDATE_AUTH_USER } from "../vuex/modules/auth/actions";

const authService = {
  init() {
    return firebase.init({
        persist: true,
        onAuthStateChanged: async ({ loggedIn, user }) => {
            if (loggedIn) {
                Store.dispatch(AUTH_CHANGE, user);
            } else {
                Store.dispatch(AUTH_CHANGE, null);
            }
        },
        thisArg: this
    });
  },

  async updateUserState() {
    Store.dispatch(UPDATE_AUTH_USER, await firebase.getCurrentUser());
  },

  login(email, password) {
    return firebase.login({
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
            email,
            password
        }
    });
  },

  logout() {
    return firebase.logout();
  }
};

export default authService;
