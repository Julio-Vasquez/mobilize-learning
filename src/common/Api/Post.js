import { API_URL } from "./../config";
import { FunctionToken } from "./../token/tokens";
import { logout } from "./../../services/auth/actions";
import { store } from "./../../index";

export const POST = (url, body, header) => {
  let dataBody = JSON.stringify(body);
  return fetch(`${API_URL}/${url}`, {
    method: "POST",
    headers: header
      ? header
      : {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${FunctionToken.getToken()}`,
        },
    body: dataBody,
  })
    .then(async (res) => {
      if (res.status === 401) {
        store.dispatch(logout);
        return res;
      }
      res.payload = await res.json();
      return res;
    })
    .catch((err) => err);
};
