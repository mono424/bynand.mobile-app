// import { FETCH_USER } from "../userdata/actions";
import { AUTH_CHANGE, UPDATE_AUTH_USER } from "./actions";
import { SET_AUTH, SET_USER, UNSET_AUTH } from "./mutations";

const state = {
  isLoaded: false,
  user: null,
  isAuthenticated: false
};

const getters = {
  authUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  authIsLoaded(state) {
    return state.isLoaded;
  }
};

const actions = {
  async [AUTH_CHANGE](context, user) {
    if (user) {
      context.commit(SET_AUTH, user);
    } else {
      context.commit(UNSET_AUTH);
    }
    // await api.updateAxiosInstance(user);
    // await files.updateAxiosInstance(user);
    // context.dispatch(FETCH_USER);
  },
  [UPDATE_AUTH_USER](context, user) {
    context.commit(SET_USER, user);
  }
};

const mutations = {
  [SET_AUTH](state, user) {
    state.isLoaded = true;
    state.isAuthenticated = true;
    state.user = user;
  },
  [SET_USER](state, user) {
    state.user = user;
  },
  [UNSET_AUTH](state) {
    state.isLoaded = true;
    state.isAuthenticated = false;
    state.user = null;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
