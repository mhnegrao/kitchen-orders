const KEY_TOKEN = '@chocolate-front/token';

export function localStorageSetToken(token) {
  localStorage.setItem(KEY_TOKEN, token);
}

export function localStorageGetToken() {
  return localStorage.getItem(KEY_TOKEN);
}

export function localStorageRemoveToken() {
  localStorage.removeItem(KEY_TOKEN);
}
