// SRP - Responsible for retrieving products depending on the value (url: string)
// DIP - The GetProductsService is dependent on the HttpClient, not the hard implementation of axios. If needed, the library (low-level) which is used to get the products
//        can be changed without affecting the component (high-level) that calls the function

import { HTTPClient } from "@/models/interfaces/HttpClient";

export const GetProductsService = (httpClient: HTTPClient) => {
  return {
    getProducts: (url:string) => httpClient.get(url)
  }
}