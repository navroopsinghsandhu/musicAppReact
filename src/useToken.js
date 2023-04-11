import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    var tokenString = ''
    if(localStorage.getItem('token') != "undefined"){
      tokenString = localStorage.getItem('token');
      var userToken = tokenString;
    }
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem('token', userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token : sessionStorage.getItem('token')
  }
}