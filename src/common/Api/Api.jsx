import { API_URL } from "./../config";
import { FunctionToken } from "./../token/tokens";
import { logout } from "./../../services/auth/actions";
import { store } from "./../../index";

class Api {

  GET(url, params) {
    url = new URL(`${API_URL}/${url}`);
    if (params)
      Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${FunctionToken.getToken()}`,
      },
    }).then(async res => {
      if (res.status === 401) {
        store.dispatch(logout);
        return res;
      }
      res.payload = await res.json();
      return res;
    }).catch(err => err);
  }

  POST(url, body, header) {
    let dataBody = JSON.stringify(body);
    console.log(`${API_URL}/${url}`)
    return fetch(`${API_URL}/${url}`, {
      method: "POST",
      headers: header
        ? header
        : {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${FunctionToken.GetToken()}`,
        },
      body: dataBody,
    }).then(async res => {
      if (res.status === 401) {
        store.dispatch(logout);
        return res;
      }
      res.payload = await res.json();
      return res;
    }).catch(err => err);
  }

  PUT(url, body, header) {
    let formData = body instanceof FormData;
    return fetch(`${API_URL}/${url}`, {
      method: "PUT",
      headers: header
        ? header
        : formData
          ? { Authorization: `Bearer ${FunctionToken.getToken()}` }
          : {
            Accept: formData ? "" : "application/json",
            "Content-type": formData ? "" : "application/json",
            Authorization: `Bearer ${FunctionToken.getToken()}`,
          },
      body: formData ? body : JSON.stringify(body),
    }).then(async res => {
      if (res.status === 401) {
        store.dispatch(logout);
        return res;
      }
      res.payload = await res.json();
      return res;
    }).catch(res => res);
  }

  DELETE(url, body, header) {
    return fetch(`${API_URL}/${url}`, {
      method: "DELETE",
      headers: header
        ? header
        : {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${FunctionToken.getToken()}`,
        },
      body: body ? body : "",
    }).then(async res => {
      if (res.status === 401) {
        store.dispatch(logout);
        return res;
      }
      res.payload = await res.json();
      return res;
    }).catch(err => err);
  }
}

export default new Api();