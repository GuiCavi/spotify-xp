import { AxiosRequester } from "./AxiosRequester";

const baseUrl = "https://api.spotify.com/v1/";

class Requester extends AxiosRequester {
  constructor() {
    super(baseUrl);
  }

  setToken(token) {
    this.http.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  clearToken() {
    this.http.defaults.headers.common.Authorization = undefined;
  }
}

const requester = new Requester(baseUrl);

export default requester;
