// SRP/DIP - Creating a httpclient axios get interface to be used for dependency inversion. This creates an axios instance.

import axios from "axios";

export interface HTTPClient {
  get(url: string): Promise<any>;
}

export const createAxiosHTTPClient = (): HTTPClient => {
  const client = axios.create({
    baseURL: "https://localhost:7187/api",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return {
    get: (url: string) => client.get(url),
  };
};
