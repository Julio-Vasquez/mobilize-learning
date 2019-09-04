const jwtDecode = require('jwt-decode');

export class jwt{

  decode = () => jwtDecode(localStorage.getItem('token'));

  isTokenValid = () => {
    try{
      return jwtDecode(localStorage.getItem('token')) !== undefined;
    } catch(e){
      return false;
    }
  };

  getToken(){
    return localStorage.getItem('token');
  }

  setToken(token){
    return localStorage.setItem('token', token);
  }
}
  
export default new Jwt();