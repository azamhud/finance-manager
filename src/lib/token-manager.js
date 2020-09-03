const STORAGE_KEY = "finance_manager_auth_token";

/**
 * @param {string} token
 */
function persist(token) {
  localStorage.setItem(STORAGE_KEY, token);
}

function retrieve() {
  return localStorage.getItem(STORAGE_KEY);
}

function remove() {
  localStorage.removeItem(STORAGE_KEY);
}

const tokenManager = {
  persist,
  retrieve,
  remove
};

export default tokenManager;

/**
 * @param {string} token
 */
/*
function persist(token) {
  var d = new Date();
  d.setTime(d.getTime() + 15 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = "JSESSIONID=" + token + ";" + expires + ";path=/";
}

function retrieve() {
  //return localStorage.getItem(STORAGE_KEY);
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf("JSESSIONID=") == 0) {
      return c.substring("JSESSIONID=".length, c.length);
    }
  }
  return "";
}

function remove() {
  var d = new Date();
  d.setTime(d.getTime() + 0 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = "JSESSIONID=0" + ";" + expires + ";path=/";
}

const tokenManager = {
  persist,
  retrieve,
  remove
};

export default tokenManager;

*/
