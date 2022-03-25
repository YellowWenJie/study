export function setToken(userToken: any) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
  return 1;
}

export function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken =
    tokenString && tokenString !== 'undefined'
      ? JSON.parse(tokenString)
      : undefined;
  return userToken?.token;
}

export function getMe() {
  const tokenString = sessionStorage.getItem('token');
  const userToken =
    tokenString && tokenString !== 'undefined'
      ? JSON.parse(tokenString)
      : undefined;
  return userToken?.user;
}
