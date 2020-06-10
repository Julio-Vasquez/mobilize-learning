import { API_URL } from "./../config";
import { FunctionToken } from "./../token/tokens";

export const GET = async (url, params) => {
  url = new URL(`${API_URL}/${url}`);
  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
  }
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${FunctionToken.getToken()}`,
      },
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
