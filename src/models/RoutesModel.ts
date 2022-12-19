//SRP - Responsible for the implementation of the routes, using the Routes interface

import { Routes } from "@/models/interfaces/IRoutes";

export const UserRoute: Array<Routes> = [
  {
    routeId: 1,
    route: "/",
    title: "Home",
  },
  {
    routeId: 2,
    route: "/categories",
    title: "Category",
  },
  {
    routeId: 3,
    route: "/products",
    title: "Products",
  },
  {
    routeId: 4,
    route: "/contacts",
    title: "Contacts",
  },
];
