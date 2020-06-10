import { API_URL } from "./../config";
import { FunctionToken } from "./../token/tokens";

export const POST = async (url, body, header) => {
  let dataBody = JSON.stringify(body);
  try {
    const res = await fetch(`${API_URL}/${url}`, {
      method: "POST",
      headers: header
        ? header
        : {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${FunctionToken.getToken()}`,
          },
      body: dataBody,
    });
    if (res.status === 401) {
      //cambiar el estado del store a false
      return res;
    }
    res.payload = await res.json();
    return res;
  } catch (err) {
    return err;
  }
};
