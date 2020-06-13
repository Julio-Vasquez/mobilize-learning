import { API_URL } from "./../config";
import { FunctionToken } from "./../token/tokens";

export const PUT = async (url, body, header) => {
  let formData = body instanceof FormData;
  try {
    const res = await fetch(`${API_URL}/${url}`, {
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
