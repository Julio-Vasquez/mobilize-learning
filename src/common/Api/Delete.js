import { API_URL } from "./../config";
import { FunctionToken } from "./../token/tokens";

export const DELETE = async (url, body, header) => {
  try {
    const res = await fetch(`${API_URL}/${url}`, {
      method: "DELETE",
      headers: header
        ? header
        : {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${FunctionToken.getToken()}`,
          },
      body: body ? body : "",
    });
    if (res.status === 401) {
      //cambiar el estado del store a false
      return res;
    }
    return res.json();
  } catch (err) {
    return err;
  }
};
