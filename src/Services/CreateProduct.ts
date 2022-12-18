// This service fufills SRP, OCP and DIP
// SRP -  Handles posting a product to the DB depending on what value is given
// OCP - This can be re used depending on the product . ie. >>
// closed for modification but open for extension >> new products that will be added can use this service without altering this code
// DIP - The component that calls this service is dependent on the abstraction of the axios library and not the conrete implementation of it.
//Changing the library (axios) here would not affect the component calling the service

import axios from "axios";

export const createProduct = (product: { [key: string]: any }): void => {
  const endpoint = `https://localhost:7187/api/Create${product.category}`;

  axios
    .post(endpoint, JSON.stringify(product), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      window.alert(`${product.category} created!`);
    })
    .catch((error) => {
      console.log(error);
      window.alert("Something went wrong, please try again.");
    });
};
