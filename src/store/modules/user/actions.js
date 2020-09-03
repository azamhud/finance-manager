import axios from "../../../lib/axios";
import * as types from "./mutation-types";
import tokenManager from "../../../lib/token-manager";

export function login({ commit }, payload) {
  return axios
    .post("/api/v1/login", payload, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      tokenManager.persist(response.data.token);
      let userInfo = response.data;
      userInfo.username = payload.username;
      commit(types.LOGIN, userInfo);
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

export function logout({ commit }) {
  tokenManager.remove();
}
