const jwtDecode = require("jwt-decode");

class Token {
  Decode = (token) => jwtDecode(token || this.GetToken());

  IsTokenValid = (token) => {
    try {
      return jwtDecode(localStorage.getItem("mltoken")) !== undefined;
    } catch (e) {
      return false;
    }
  };

  CheckToken = (token) => {
    try {
      return jwtDecode(token) !== undefined;
    } catch (e) {
      return false;
    }
  };

  GetToken = () => {
    return localStorage.getItem("mltoken");
  };

  SetToken = (token, type) => {
    if (type === "session") return sessionStorage.setItem("mltoken", token);
    return localStorage.setItem("mltoken", token);
  };

  RemoveToken = () => localStorage.removeItem("mltoken");
}

export const FunctionToken = new Token();
