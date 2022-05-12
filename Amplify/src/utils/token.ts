export const setToken = (userToken: string):void => {
  sessionStorage.setItem('token',JSON.stringify(userToken));
}

export const getToken = ():string | null => {
  return sessionStorage.getItem('token');
}

