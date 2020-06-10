import { jwtDecode } from "jwt-decode";

class Token {
  decode = (token) => jwtDecode(token || this.getToken());

  isTokenValid = () => {
    try {
      return jwtDecode(this.getToken()) !== undefined;
    } catch (e) {
      return false;
    }
  };

  getToken = () => {
    return sessionStorage.getItem("mltoken") || localStorage.getItem("mltoken");
  };

  setToken = (token, type) => {
    if (type === "session") return sessionStorage.setItem("mltoken", token);
    return localStorage.setItem("mltoken", token);
  };

  removeToken = () => localStorage.removeItem("mltoken");
}

export const FunctionToken = new Token();
