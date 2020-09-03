import axios from "../../../lib/axios";
// import * as types from "./mutation-types";
// import tokenManager from "../../../lib/token-manager";

export function addDataAccountFinance({ commit }, payload) {
  return axios
    .post("/api/v1/finance-accounts", payload, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error.response;
    });
}

export function getAllDataAccountFinance({ commit }, payload) {
  let queryparam = `?sort_field=${payload.field}&sort_type=${payload.sortType}`;
  return axios
    .get(`/api/v1/finance-accounts${queryparam}`, payload, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error.response;
    });
}

export function getDataAccountFinance({ commit }, payload) {
  let queryparam = `?name=${payload.name}&description=${payload.description}&type=${payload.type}&page=${payload.page}&per_page=${payload.size}&sort_field=${payload.field}&sort_type=${payload.sortType}`;
  return axios
    .get(`/api/v1/finance-accounts${queryparam}`, payload, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error.response;
    });
}

export function editDataAccountFinance({ commit }, payload) {
  return axios
    .put(`/api/v1/finance-accounts/${payload.id}`, payload.data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error.response;
    });
}

export function deleteDataAccountFinance({ commit }, payload) {
  return axios
    .delete(`/api/v1/finance-accounts/${payload.id}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error.response;
    });
}

export function addDataTransactionFinance({ commit }, payload) {
  return axios
    .post("/api/v1/finances", payload, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error.response;
    });
}

export function getAllDataTransactionFinance({ commit }, payload) {
  let queryparam = `?sort_field=${payload.field}&sort_type=${payload.sortType}`;
  return axios
    .get(`/api/v1/finances${queryparam}`, payload, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error.response;
    });
}

export function getDataTransactionFinance({ commit }, payload) {
  let queryparam = `?title=${payload.title}&description=${payload.description}&debit_amount=${payload.debit}&credit_amount=${payload.credit}&finance_account_name=${payload.name}&finance_account_type=${payload.type}&page=${payload.page}&per_page=${payload.size}&sort_field=${payload.field}&sort_type=${payload.sortType}`;
  return axios
    .get(`/api/v1/finances${queryparam}`, payload, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error.response;
    });
}

export function editDataTransactionFinance({ commit }, payload) {
  return axios
    .put(`/api/v1/finances/${payload.id}`, payload.data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error.response;
    });
}

export function deleteDataTransactionFinance({ commit }, payload) {
  return axios
    .delete(`/api/v1/finances/${payload.id}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error.response;
    });
}
