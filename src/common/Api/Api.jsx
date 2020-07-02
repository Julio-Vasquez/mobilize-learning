import { API_URL } from "./../config";
import { FunctionToken } from "./../token/tokens";
import { auth } from "./../../services/auth/actions";
import { store } from "./../../store";

class Api {
  GET(url, params) {
    url = new URL(`${API_URL}/${url}`);
    if (params)
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${FunctionToken.getToken()}`,
      },
    })
      .then(async (res) => {
        if (res.status === 401) {
          store.dispatch(auth.logout());
          return res;
        }
        res.payload = await res.json();
        return res;
      })
      .catch((err) => err);
  }

  POST(url, body, header) {
    let dataBody = JSON.stringify(body);
    console.log(dataBody);
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
    })
      .then(async (res) => {
        if (res.status === 401) {
          store.dispatch(auth.logout());
          return res;
        }
        res.payload = await res.json();
        return res;
      })
      .catch((err) => err);
  }

  PUT(url, body, header) {
    console.log(url);
    console.log(body);
    return fetch(`${API_URL}/${url}`, {
      method: "PUT",
      headers: header
        ? header
        : {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${FunctionToken.GetToken()}`,
          },
      body: JSON.stringify(body),
    })
      .then(async (res) => {
        if (res.status === 401) {
          store.dispatch(auth.logout());
          return res;
        }
        res.payload = await res.json();
        return res;
      })
      .catch((res) => res);
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
    })
      .then(async (res) => {
        if (res.status === 401) {
          store.dispatch(auth.logout());
          return res;
        }
        res.payload = await res.json();
        return res;
      })
      .catch((err) => err);
  }
}

export default new Api();
