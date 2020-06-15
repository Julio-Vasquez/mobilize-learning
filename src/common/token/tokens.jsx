const jwtDecode = require('jwt-decode');

class Token {
  Decode = (token) => jwtDecode(token || this.GetToken());

  IsTokenValid = () => {
    try {
      return jwtDecode(this.getToken()) !== undefined;
    } catch (e) { return false; }
  };

  GetToken = () => localStorage.getItem("mltoken");

  SetToken = (token, type) => {
    if (type === "session") return sessionStorage.setItem("mltoken", token);
    return localStorage.setItem("mltoken", token);
  };

  RemoveToken = () => localStorage.removeItem("mltoken");
}

export const FunctionToken = new Token();
