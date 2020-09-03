import * as types from "./mutation-types";

export default {
  [types.LOGOUT](state) {
    state.isAuth = false;
  },
  [types.LOGIN](state, payload) {
    state.isAuth = true;
    state.name = payload.name;
    state.lastLogin = payload.last_login;
    state.username = payload.username;
  }
};
