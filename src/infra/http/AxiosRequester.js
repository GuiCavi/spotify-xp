import axios from "axios";

export class AxiosRequester {
  http = null;

  constructor(baseUrl) {
    this.baseUrl = baseUrl;

    this.http = axios.create({ baseURL: baseUrl });
  }

  get(url, params) {
    return this.http.get(url, { params });
  }
}
